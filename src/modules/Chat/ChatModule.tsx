import { FC } from "react";
import chatStyle from "./chat.module.css"
import Chats from "../../components/Chats/Chats";
import MainChat from "../../components/MainChat/MainChat";

const ChatModule: FC = () => {
  return (  
    <div className={chatStyle.chat}>
      <Chats/>
      <MainChat/>
    </div>
  );
}
 
export default ChatModule;