import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import AuthSlice from "./Auth/AuthSlice";
import ChatsSlice from "./Chats/ChatsSlice"
import SendMsgSlice from "./SendChatMessage/ChatMessageSlice"
import GetMsgSlice from "./GetChatMessages/GetChatMessages"
import ModalSlice from "./Modal/ModalSlice";

const rootReducer = combineReducers({
  AuthSlice: AuthSlice,
  ChatsSlice: ChatsSlice,
  SendMsgSlice: SendMsgSlice,
  GetMsgSlice: GetMsgSlice,
  ModalSlice: ModalSlice
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector