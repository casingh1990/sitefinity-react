import { configureStore } from '@reduxjs/toolkit'
// ...
const initialState = {
  firstName: 'test',
  lastName: ' ',
};

export type State = typeof initialState;

type Action =
  | { type: 'setFirstName'; payload: string }
  | { type: 'setLastName'; lastName: string };

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'setFirstName':
      return { ...state, firstName: action.payload };
    case 'setLastName':
      return { ...state, lastName: action.lastName };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch