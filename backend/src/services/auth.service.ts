import bcrypt from "bcryptjs"
import { User } from "../models/user.model"
import jwt from 'jsonwebtoken'
import { stringify } from "node:querystring"

type registerRequest = {
    username:string,
    email:string,
    password:string
}
type registerResponse = {
    message:string
}

type loginRequest = {
    email:string,
    password:string
}
type loginResponse = {
    token:string
}

type getCurrentUserResponse={
    userId:string,
    username:string,
    email:string
}

const SALT_ROUNDS = 10;


export async function registerService(data:registerRequest):Promise<registerResponse>{
    let isExisting = await User.findOne({email:data.email}).lean();
    if(isExisting) throw {status:409,message:"User already Exists!"}

    let hashedPassword = await bcrypt.hash(data.password,SALT_ROUNDS);

    await User.create({username:data.username,email:data.email,password:hashedPassword});

    return {message:"User registered successfully"}
}


export async function loginService(data:loginRequest):Promise<loginResponse>{
    let user = await User.findOne({email:data.email}).select('email password').lean();
    if(!user) throw {status:401,message:"Invalid email or password!"}

    let ok = await bcrypt.compare(data.password,user.password);
    if(!ok) throw {status:401,message:"Invalid email or password!"}

    let token = jwt.sign({userId:user._id},process.env.JWT_SECRET as string);

    return {token};
}

export async function getCurrentUserService(userId:string):Promise<getCurrentUserResponse>{
    let user = await User.findById(userId).select('username email').lean();
    if(!user) throw {status:404,message:"User not found!"}

    return {
        userId:user._id.toString(),
        username:user.username,
        email:user.email
    }
}