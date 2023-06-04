import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../utils/constants";
import { TInitialState } from "./types";
import { getCookie } from "../../utils/cookies/cookie";

const idInst: string = getCookie("idInstance")!;
const apiToken: string = getCookie("apiToken")!;

const initialState: TInitialState = {
  data: [],
  success: null,
  chatId: null
}

export const chatsThunk = createAsyncThunk(
  "chats/thunk",
  async() => {
    try {
      const response = await fetch(`${API.handler}${idInst}/getChats/${apiToken}`, {
        method: "GET"
      })
      const data = await response.json()
      return data
    } catch (error) {
      if(error instanceof Error) throw new Error(error.message)
    }
  }
)

const ChatsSlice = createSlice({
  name: "chat/slice",
  initialState: initialState,
  reducers: {
    getChatId(state, action) {
      state.chatId = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(chatsThunk.pending, (state) => {
        state.success = false
      })
      .addCase(chatsThunk.fulfilled, (state, action) => {
        state.data = action.payload
        state.success = true
      })
      .addCase(chatsThunk.rejected, (state) => {
        state.success = false
      })
  }
})

export const {getChatId} = ChatsSlice.actions
export default ChatsSlice.reducer