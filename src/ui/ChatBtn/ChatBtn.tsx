import { FC } from "react";
import chatStyle from "./chat.module.css"

interface IChatBtn {
  name: string;
  func?: (id: string | number) => void;
  id: string | number
}

const ChatBtn: FC<IChatBtn> = ({name, func, id}) => {
  return (  
    <button 
      className={chatStyle.chat__btn} 
      onClick={() => func!(id)}>
      <div className={chatStyle.chat__btn__icon}></div>
      <div className={chatStyle.chat__container}>
        <h4 className={chatStyle.chat__container__name}>{name}</h4>
      </div>
    </button>
  );
}
 
export default ChatBtn;