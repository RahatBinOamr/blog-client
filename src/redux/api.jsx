import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://blog-server-inky.vercel.app/api/v1/blog',
  }),
  endpoints: builder => ({
    getAllBlogs: builder.query({
      query: url => url,
    }),
    getRelatedBlogs: builder.query({
      query: url => url,
    }),
    getSingleBlog: builder.query({
      query: id => `/${id}`,
    }),
    deleteBlog: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
export const {
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useDeleteBlogMutation,
  useEditBlogMutation,
  useGetRelatedBlogsQuery,
} = api;
