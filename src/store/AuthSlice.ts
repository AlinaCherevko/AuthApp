import { createSlice } from "@reduxjs/toolkit";

export interface IState {
  name: string | null;
  email: string | null;
  token: string | null;
}

const initialState: IState = {
  name: null,
  email: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.name = null;
      state.email = null;
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
