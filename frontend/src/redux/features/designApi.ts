import { baseApi } from "./baseApi";

export const designApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({

        createDesign:builder.mutation({
            query:(data)=>({
                url:'/design',
                method:'POST',
                body:data
            })
        }),

        getDesignsByUserId:builder.query<{id:string,projectName:string,techStack:string}[],void>({
            query:()=>({
                url:'/design',
                method:'GET'
            }),
            providesTags:['design']
        }),

        getDesignById:builder.query({
            query:(designId)=>({
                url:`/design/${designId}`,
                method:'GET'
            })
        }),

        deleteDesign:builder.mutation({
            query:(designId)=>({
                url:`design/${designId}`,
                method:'DELETE'
            }),
            invalidatesTags:['design']
        })

    })
})

export const {useCreateDesignMutation,useGetDesignsByUserIdQuery,useGetDesignByIdQuery,useDeleteDesignMutation} = designApi;