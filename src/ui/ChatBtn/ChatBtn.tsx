import { FC } from "react";
import { NavLink } from "react-router-dom";

import chatStyle from "./chat.module.css"
import { getCookie } from "../../utils/cookies/cookie";
import { useLocation } from "react-router-dom";
import { sliceChatNum } from "../../utils/helpers/sliceChatNum";

interface IChatBtn {
  name: string;
  func?: (id: string | number) => void;
  id: string | number
}

const ChatBtn: FC<IChatBtn> = ({name, func, id}) => {
  const location = useLocation()

  return (  
    <NavLink 
      to={`/messages/${getCookie("idInstance")}/${sliceChatNum(id.toString())}`} state={{background: location}} 
      className={chatStyle.chat__btn} 
      onClick={() => func!(id)}>
      <div className={chatStyle.chat__btn__icon}></div>
      <div className={chatStyle.chat__container}>
        <h4 className={chatStyle.chat__container__name}>{name}</h4>
      </div>
    </NavLink>
  );
}
 
export default ChatBtn;