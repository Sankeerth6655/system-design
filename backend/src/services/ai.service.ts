import { ai } from "../config/gemini";
import { systemDesignPrompt } from "../prompts/systemDesign.prompt";

type generatedDesign = {
    overview?:string,
    architecture?:Record<string,any>,
    database?:Record<string,any>[],
    apis?:Record<string,any>[],
    folderStructure?:Record<string,any>,
    userStories?:string[],
    roadmap?:Record<string,any>[]
}

type systemDesign = {
    projectName:string,
    techStack:string,
    features:string[],
    generatedDesign: generatedDesign
}

export async function generateDesignService(data:{projectName:string,techStack:string,features:string[]}):Promise<systemDesign>{
    const prompt = systemDesignPrompt({...data});

    const response = await ai.models.generateContent({
        model:'gemini-2.5-flash',
        contents:prompt,
        config:{
            responseMimeType:"application/json"
        }
    });

    const text = response.text;
    const cleaned = text
        ?.replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    
    return JSON.parse(cleaned!);
}