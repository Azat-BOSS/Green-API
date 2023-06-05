import { FC, useEffect, memo, useCallback } from "react";
import chatsStyle from "./chats.module.css";
import ChatBtn from "../../ui/ChatBtn/ChatBtn";
import { createSelector } from "@reduxjs/toolkit";
import { RootState, useAppDispatch } from "../../services/store";
import { useSelector } from "react-redux";
import { chatsThunk } from "../../services/Chats/ChatsSlice";
import { TDataChats } from "../../services/Chats/types";
import { sliceChatNum } from "../../utils/helpers/sliceChatNum";
import { getChatId } from "../../services/Chats/ChatsSlice";
import {GetChatMessages} from "../../services/GetChatMessages/GetChatMessages";
import { changeModalState } from "../../services/Modal/ModalSlice";

const Chats: FC = () => {

  const dispatch = useAppDispatch()

  const chatsSelector = createSelector(
    (state: RootState) => state.ChatsSlice.data,
    (state: RootState) => state.ChatsSlice.chatId,
    (data, chatId) => ({data, chatId})
  )

  const {data, chatId} = useSelector(chatsSelector)
 
  useEffect(() => {
    dispatch(chatsThunk())
  }, [dispatch, chatsThunk])

  const setChatId = (id: string | number) => {
    dispatch(getChatId(id))
    dispatch(changeModalState(true))
  }

  useEffect(() => {
    dispatch(GetChatMessages({count: 100, chatId: chatId!}))
  }, [GetChatMessages, chatId, dispatch])

  return ( 
    <aside className={chatsStyle.chats}>
      <div className={chatsStyle.chats__upper__banner}>
        <div className={chatsStyle.chats__input__wrapper}>
        </div>
      </div>
      <div className={chatsStyle.chats__users__btns}>
        {
          data?.map((chat: TDataChats) => {
            return (
            <ChatBtn 
              id={chat.id}
              name={chat.name! || sliceChatNum(chat.id)}
              key={chat.id}
              func={setChatId}
            />
            )
          })
        }
      </div>
    </aside>
  );
}
 
export default memo(Chats);