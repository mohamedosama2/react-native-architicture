export interface Post {
  id: number
  name: string
  fetched_at: string
}

export type PostsResponse = Post[]
