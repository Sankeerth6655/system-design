import mongoose from "mongoose";

const designSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    projectName:{type:String,required:true},
    techStack:{type:String,required:true},
    features:{type:[String],required:true},
    generatedDesign:{type:mongoose.Schema.Types.Mixed,required:true},
})

export const Design = mongoose.model('design',designSchema);