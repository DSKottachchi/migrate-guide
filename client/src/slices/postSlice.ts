import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath: 'posts',
    // TODO: Add the base url to a query
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9091/api'}),
    endpoints: (builder) => ({
        // Reading the data so using query
        getPosts: builder.query({
            query: () => '/posts'
        })
    })
})

// Auto created a hook
export const {
    useGetPostsQuery
} = postApi
