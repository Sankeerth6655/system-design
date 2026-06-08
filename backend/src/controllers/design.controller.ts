import {Request, Response } from "express"
import { createDesignService, deleteDesignService, getDesignByIdService, getDesignsByUserIdService } from "../services/design.service";

export async function createDesign(req:Request,res:Response):Promise<void>{
    try {
        let response = await createDesignService(req.userId!,req.body);
        res.status(201).json({...response});
    } catch (error:any) {
        res.status(error.status || 500).json({message:error.message});
    }
}

export async function getDesignsByUserId(req:Request,res:Response):Promise<void>{
    try {
        let response = await getDesignsByUserIdService(req.userId!);
        res.status(200).json([...response]);
    } catch (error:any) {
        res.status(error.status || 500).json({message:error.message})
    }
}

export async function getDesignById(req:Request<{designId:string}>,res:Response):Promise<void>{
    try {
        let response = await getDesignByIdService(req.userId!,req.params.designId);
        res.status(200).json({...response});
    } catch (error:any) {
        res.status(error.status || 500).json({message:error.message})
    }
}

export async function deleteDesign(req:Request<{designId:string}>,res:Response):Promise<void>{
    try {
        let response = await deleteDesignService(req.userId!,req.params.designId);
        res.status(200).json({...response});
    } catch (error:any) {
        res.status(error.message || 500).json({message:error.message})
    }
}