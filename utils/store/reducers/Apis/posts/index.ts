import { createApi } from '@reduxjs/toolkit/query/react'
import { retry } from '@reduxjs/toolkit/query/react'
import { User } from '../auth/types'
import { axiosBaseQuery, providesList } from '../types'
import { Post, PostsResponse } from './types'

export const postsApi = createApi({
  tagTypes: ['Posts'],
  reducerPath: 'posts',
  baseQuery: axiosBaseQuery({
    ///   BASE URI
    baseUrl: 'https://batcy-backend.herokuapp.com/'
  }),
  endpoints: (build) => ({
    login: build.mutation<{ token: string; user: User }, any>({
      query: (credentials: any) => ({
        url: 'login',
        method: 'POST',
        body: credentials
      })
      /*   extraOptions: {
        backoff: () => {
          // We intentionally error once on login, and this breaks out of retrying. The next login attempt will succeed.
          retry.fail({ fake: 'error' })
        }
      } */
    }),
    getPosts: build.query<PostsResponse, void>({
      query: () => ({ url: 'posts', method: 'GET' }),
      providesTags: (result = []) => providesList(result, 'Posts') ///ONLY IN GET ALL
    }),
    addPost: build.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: `posts`,
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }]
    }),
    getPost: build.query<Post, number>({
      query: (id) => ({ url: `posts/${id}`, method: 'GET' }),
      providesTags: (_post, _err, id) => [{ type: 'Posts' as const, id }]
    }),
    updatePost: build.mutation<Post, Partial<Post>>({
      query(data) {
        const { id, ...body } = data
        return {
          url: `posts/${id}`,
          method: 'PUT',
          body
        }
      },
      invalidatesTags: (post) => [{ type: 'Posts', id: post?.id }]
    }),
    deletePost: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `posts/${id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (post) => [{ type: 'Posts', id: post?.id }]
    })
    /*  getErrorProne: build.query<{ success: boolean }, void>({
      query: () => ({ url: 'error-prone', method: 'GET' })
    }) */
  })
})

export const { useAddPostMutation, useDeletePostMutation, useGetPostQuery, useGetPostsQuery, useLoginMutation, useUpdatePostMutation } =
  postsApi

export const {
  endpoints: { login, getPost }
} = postsApi
