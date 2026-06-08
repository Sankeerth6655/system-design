import { Request,Response } from "express";
import { generateDesignService } from "../services/ai.service";

export async function generateDesign(req:Request,res:Response):Promise<void>{
    try {
        let response = await generateDesignService(req.body);
        res.status(200).json({...response});
    } catch (error:any) {
        res.status(error.status || 500).json({message:error.message})
    }
}