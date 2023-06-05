import { FC, useCallback, useRef, useState, useEffect, memo } from "react";
import mainChatStyle from "./chat.module.css"
import { createSelector } from "@reduxjs/toolkit";
import { RootState, useAppDispatch } from "../../services/store";
import { useSelector } from "react-redux";
import { SendMsgThunk } from "../../services/SendChatMessage/ChatMessageSlice";
import { TGetdataMessages } from "../../services/GetChatMessages/types";
import { sliceChatNum } from "../../utils/helpers/sliceChatNum";
import { convertToDate } from "../../utils/helpers/converterTime";
import { sendMsg, changeStatusLoader } from "../../services/GetChatMessages/GetChatMessages";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import Message from "../../ui/Message/Message";
import Loader from "../../ui/Loader/Loader";

const buttonStyle: {[keyof: string]: string} = {
  borderRadius: "1rem 1rem 1rem 1rem",
  height: "4rem",
  position: "absolute",
  bottom: "2.5rem",
  right: "2rem",
  border: "none",
}

const MainChat: FC = () => {
  const dispatch = useAppDispatch()
  const [message, setMessage] = useState<string>("")
  const messageRef = useRef<null | HTMLDivElement>(null)

  const chatSelector = createSelector(
    (state: RootState) => state.ChatsSlice.chatId,
    (state: RootState) => state.GetMsgSlice.dataMessages,
    (state: RootState) => state.ModalSlice.isActiveModal,
    (state: RootState) => state.GetMsgSlice.success,
    (chatId, dataMessages, isActiveModal, success) => ({chatId, dataMessages, isActiveModal, success})
  )
  const {chatId, dataMessages, isActiveModal, success} = useSelector(chatSelector)

  const submitData = useCallback((evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    dispatch(SendMsgThunk({userId: chatId, message: message}))
    dispatch(sendMsg({textMessage: message, idMessage: `${Math.random() * Date.now()}`}))
    dispatch(changeStatusLoader(true))
  }, [dispatch, chatId, message, SendMsgThunk])

  useEffect(() => {
    messageRef.current?.scrollIntoView({behavior: "smooth"});
  }, [messageRef]);

  return (  
    <div className={mainChatStyle.main__chat}>  
      <div className={mainChatStyle.main__chat__container}>
        {
          success ? (Array.isArray(dataMessages) && dataMessages?.map((messageUsr: TGetdataMessages) => (
          <div ref={messageRef} key={messageUsr?.idMessage}>
            <Message 
              name={messageUsr?.senderName} 
              number={sliceChatNum(messageUsr?.senderId!)} 
              message={messageUsr?.textMessage || messageUsr?.extendedTextMessage?.text}
              extendedMessage={messageUsr.quotedMessage?.textMessage}
              myMsg={messageUsr?.senderId ? true : false}
              time={convertToDate(messageUsr?.timestamp.toString())}
            />
          </div> 
          ))) : 
          <div className={mainChatStyle.block__container}>
            <Loader/>
          </div>
        }
      </div>
      {
        isActiveModal && <form className={mainChatStyle.chat__wrapper__input} onSubmit={(evt: any) => {submitData(evt); setMessage("")}}>
        <Input placeholder="Write a message ..." type="text" handleInput={setMessage}/>
        <Button text="Отправить" styleConf={buttonStyle}></Button>
      </form>
      }
    </div>
  );
}
 
export default memo(MainChat);