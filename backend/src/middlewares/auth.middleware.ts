import { NextFunction, Request, Response } from "express";
import jwt, { Jwt } from 'jsonwebtoken';

interface JwtPayload {
    userId:string
}

export async function protectedRoute(req:Request,res:Response,next:NextFunction):Promise<void>{
    try {
        let authHeaders = req.headers.authorization;
        if(!authHeaders) {
            res.status(401).json({message:"Authorization token is missing"});
            return;
        }
        if(!authHeaders.startsWith("Bearer ")){
            res.status(401).json({message:"Invalid authorization format"});
            return;
        }

        let token = authHeaders.split(" ")[1];
        if(!token){
            res.status(401).json({message:"Invalid token!"});
            return;
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET!) as JwtPayload;
        req.userId = decoded.userId;

        next();
    } catch (error) {
        res.status(401).json({message:"Unauthorized access!"});
    }
}