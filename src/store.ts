import { configureStore } from '@reduxjs/toolkit';

import profileReducer from 'src/profile/features/slice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the features itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
