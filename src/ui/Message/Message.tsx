import { FC } from "react";
import messageStyle from "./message.module.css"

interface Message {
  name: string;
  number: string;
  message: string;
  extendedMessage?: string;
  time?: string;
  myMsg: boolean
}

const Message: FC<Message> = ({name, number, message, extendedMessage, time, myMsg}) => {
  console.log(time)
  return (  
    <>
    {message && (
      <div className={!myMsg ? messageStyle.message__block : messageStyle.message__block_another}>
      <div className={!myMsg ? messageStyle.message : messageStyle.message_another}>
        {(number || name) && (
        <div className={messageStyle.message__upper}>
          <p className={messageStyle.message__name}>{name}</p>
          <p className={messageStyle.message__phone}>{number}</p>
        </div>
        )}
        {extendedMessage && (
        <div className={!myMsg ? messageStyle.message__extend__block : messageStyle.message__extend__block_another}>
          <p className={messageStyle.message__extend}>{extendedMessage}</p>
        </div>
        )}
        {message && (
          <p className={messageStyle.message__text}>
            {message}
          </p>
        )}
        <p className={messageStyle.message__time}>{time}</p>
      </div>
    </div>
    )}
    </>
  );
}
 
export default Message;