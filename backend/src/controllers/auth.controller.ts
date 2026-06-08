import { Request, Response } from "express";
import { getCurrentUserService, loginService, registerService } from "../services/auth.service";

export async function register(req:Request,res:Response):Promise<void>{
    try {
        let response = await registerService(req.body);
        res.status(201).json({...response});
    } catch (error:any) {
        res.status(error.status || 500).json({message:error.message});
    }
}

export async function login(req:Request,res:Response):Promise<void>{
    try {
        let response = await loginService(req.body);
        res.status(200).json({...response});
    } catch (error:any) {
        res.status(error.status || 500).json({message:error.message})
    }
}

export async function getCurrentUser(req:Request,res:Response):Promise<void>{
    try {
        let response = await getCurrentUserService(req.userId!);
        res.status(200).json({...response});
    } catch (error:any) {
        res.status(error.status || 500).json({message:error.message})
    }
}