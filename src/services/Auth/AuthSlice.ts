import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../utils/constants";
import { getCookie } from "../../utils/cookies/cookie";

type TAuth = {
  idInst?: string;
  apiToken?: string;
}

type TInitialState = {
  message: any;
  success: boolean | null;
}

const initialState: TInitialState = {
  message: {},
  success: null,
}

export const authThunk = createAsyncThunk(
  "auth/thunk",
  async({idInst, apiToken}: TAuth) => {
    try {
      const res = await fetch(`${API.handler}${idInst}/getStateInstance/${apiToken || getCookie("apiToken")}`, {
        method: "GET"
      })
      const data = res.json()
      return data
    } catch (error) {
      if(error instanceof Error) throw new Error(error.message)
    }
  }
)

const authSlice = createSlice({
  name: "auth/slice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authThunk.pending, (state) => {
        state.message = "pending ...";
        state.success = false
      })
      .addCase(authThunk.fulfilled, (state, action) => {
        state.message = action.payload
        if(state.message === undefined){ 
          state.message = {}
          state.success = false
        }
        if(state.message === "error") {
          state.success = false
        }
        if(state.message?.stateInstance === "notAuthorized") {
          state.success = false
        }
        if(state.message?.stateInstance === "authorized") {
          state.success = true
        }
      })
      .addCase(authThunk.rejected, (state) => {
        state.message = "error";
        state.success = false
      })
  }
})

export default authSlice.reducer



