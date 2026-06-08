import { baseApi } from "./baseApi";

export const aiApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        generateDesign:builder.mutation({
            query:(data)=>({
                url:'/ai/generateDesign',
                method:'POST',
                body:data
            }),
        
        })
    })
});

export const {useGenerateDesignMutation} = aiApi;