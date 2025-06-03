import { authApi } from '@/rtkQApi/auth';
import { IUser } from '@/utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  isLoading: boolean;
  user: IUser | null;
}

const initialState: AppState = {
  user: null,
  isLoading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.getMe.matchRejected, (state) => {
      state.user = null;
    });
    builder.addMatcher(
      authApi.endpoints.getMe.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
      }
    );
  },
});

export const { setUser, setLoading } = appSlice.actions;

export const selectIsLoading = (state: { app: AppState }) =>
  state.app.isLoading;

export const selectUser = (state: { app: AppState }) => state.app.user;

export default appSlice.reducer;
