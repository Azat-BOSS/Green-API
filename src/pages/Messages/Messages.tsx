import { FC } from "react";
import ChatModule from "../../modules/Chat/ChatModule";
import messagesStyle from "./messages.module.css"

const Messages: FC = () => {
  return ( 
  <section className={messagesStyle.messages}>
    <ChatModule/>
  </section>
  );
}
 
export default Messages;