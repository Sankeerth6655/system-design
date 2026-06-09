import { Design } from "../models/design.model"

type generatedDesign = {
    overview?:string,
    architecture?:Record<string,any>,
    database?:Record<string,any>[],
    apis?:Record<string,any>[],
    folderStructure?:string[],
    userStories?:string[],
    roadmap?:Record<string,any>[]
}

type createDesignRequest = {
    projectName:string,
    techStack:string,
    features:string[],
    generatedDesign: generatedDesign
}

type createDesignResponse = {
    designId:string,
    message:string
}

type getDesignsByUserIdResponse = {
    id:string,
    projectName:string,
    techStack:string
}[];

type getDesignByIdResponse = {
    id:string,
    projectName:string,
    techStack:string,
    features:string[],
    generatedDesign: generatedDesign
}


export async function createDesignService(userId:string,data:createDesignRequest):Promise<createDesignResponse>{
    let newDesign = await Design.create({userId,...data});
    return {designId:newDesign._id.toString(),message:"Design saved successfully!"}
}

export async function getDesignsByUserIdService(userId:string):Promise<getDesignsByUserIdResponse>{
    let designs = await Design.find({userId}).select('projectName techStack').sort({createdAt:-1}).lean();
    return designs.map((d)=>({
        id:d._id.toString(),
        projectName:d.projectName,
        techStack: d.techStack
    }))
}

export async function getDesignByIdService(userId:string,designId:string):Promise<getDesignByIdResponse>{
    let design = await Design.findOne({userId,_id:designId}).select('projectName techStack features generatedDesign').lean();
    if(!design) throw {status:404,message:"Design not found!"}
    return {
        id:design._id.toString(),
        projectName:design.projectName,
        techStack:design.techStack,
        features:design.features,
        generatedDesign:design.generatedDesign
    }
}

export async function deleteDesignService(userId:string,designId:string):Promise<{message:string}>{
    const deletedDesign = await Design.deleteOne({userId,_id:designId});
    if(deletedDesign.deletedCount === 0) throw {status:404,message:"Design not found!"}
    return {message:"Design deleted successfully"}
}