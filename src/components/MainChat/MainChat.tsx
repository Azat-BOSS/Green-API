import { FC, useCallback, useRef, useState, useEffect } from "react";
import mainChatStyle from "./chat.module.css"
import { createSelector } from "@reduxjs/toolkit";
import { RootState, useAppDispatch } from "../../services/store";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { useSelector } from "react-redux";
import { SendMsgThunk } from "../../services/SendChatMessage/ChatMessageSlice";
import { TGetdataMessages } from "../../services/GetChatMessages/types";
import { sliceChatNum } from "../../utils/helpers/sliceChatNum";
import Message from "../../ui/Message/Message";
import { sendMsg } from "../../services/GetChatMessages/GetChatMessages";

const buttonStyle = {
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
    (chatId, dataMessages) => ({chatId, dataMessages})
  )
  const {chatId, dataMessages} = useSelector(chatSelector)

  const submitData = useCallback((evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    dispatch(SendMsgThunk({userId: chatId, message: message}))
    dispatch(sendMsg({textMessage: message, idMessage: `${Math.random() * Date.now()}`}))
  }, [dispatch, chatId, message, SendMsgThunk])

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (  
    <div className={mainChatStyle.main__chat}>  
      <div className={mainChatStyle.main__chat__container}>
        {
          Array.isArray(dataMessages) && dataMessages?.map((messageUsr: TGetdataMessages) => (
          <div ref={messageRef}>
            <Message 
              
              key={messageUsr?.idMessage}
              name={messageUsr?.senderName} 
              number={sliceChatNum(messageUsr?.senderId!)} 
              message={messageUsr?.textMessage || messageUsr?.extendedTextMessage?.text}
              extendedMessage={messageUsr.quotedMessage?.textMessage}
              myMsg={messageUsr?.senderId ? true : false}
            />
          </div>
          ))
        }
      </div>
      <form className={mainChatStyle.chat__wrapper__input} onSubmit={(evt: any) => {submitData(evt); setMessage("")}}>
        <Input placeholder="Write a message ..." type="text" handleInput={setMessage}/>
        <Button text="Отправить" styleConf={buttonStyle}></Button>
      </form>
    </div>
  );
}
 
export default MainChat;