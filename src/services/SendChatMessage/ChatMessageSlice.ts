import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../utils/constants";
import { getCookie } from "../../utils/cookies/cookie";
import { TInitialState } from "./types";

const idInst: string = getCookie("idInstance")!;
const apiToken: string = getCookie("apiToken")!;

type TSendMsgThunk = {
  userId: string | number | null;
  message: string;
}

const initialState: TInitialState = {
  idMessage: "",
  success: null,
}

export const SendMsgThunk = createAsyncThunk(
  "message/thunk",
  async({userId, message}: TSendMsgThunk) => {
    console.log(userId, message)
    try {
      const response = await fetch(`${API.handler}${idInst}/sendMessage/${apiToken}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          "chatId": userId?.toString(),
          "message": message
        }),
      })
      const data = await response.json()
      return data
    } catch (error) {
      if(error instanceof Error) throw new Error(error.message)
    }
  }
)

const SendMsgSlice = createSlice({
  name: "message/slice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SendMsgThunk.pending, (state) => {
        state.success = false
      })
      .addCase(SendMsgThunk.fulfilled, (state, action) => {
        state.success = true
        state.idMessage = action.payload
      })
      .addCase(SendMsgThunk.rejected, (state) => {
        state.success = false
      })
  } 
})

export default SendMsgSlice.reducer
