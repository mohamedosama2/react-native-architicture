import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from './reducers/Apis/pokemon'
import counter from './reducers/counter'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './reducers/Apis/auth'
import { postsApi } from './reducers/Apis/posts'

export const store = configureStore({
  reducer: {
    counter: counter,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat(
      pokemonApi.middleware,
      authApi.middleware,
      postsApi.middleware
    )
})
/* setupListeners(store.dispatch) */

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
