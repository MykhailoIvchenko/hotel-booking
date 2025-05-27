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
});

export const { setUser, setLoading } = appSlice.actions;

export const selectIsLoading = (state: { app: AppState }) =>
  state.app.isLoading;

export const selectUser = (state: { app: AppState }) => state.app.user;

export default appSlice.reducer;
