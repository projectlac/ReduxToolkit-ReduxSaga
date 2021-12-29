import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models";

export interface LoginPayload {
  username: string;
  password: string;
}
export interface AuthState {
  isLoggedIn?: boolean;
  loggin?: boolean;
  currentUser?: User;
}
const initialState: AuthState = {
  isLoggedIn: false,
  loggin: false,
  currentUser: undefined,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.loggin = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.loggin = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.loggin = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

//Actions
export const authAction = authSlice.actions;
//Selectors
export const selectIsLoginIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogin = (state: any) => state.auth.loggin;

//Reducers

const authReducer = authSlice.reducer;
export default authReducer;
