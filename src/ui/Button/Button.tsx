import { FC } from "react";
import btnStyle from "./button.module.css";

interface IButton {
  text: string;
  rest?: React.HTMLAttributes<HTMLButtonElement>;
  styleConf?: any;
  icon?: string;
  func?: () => void;
}

const Button: FC<IButton> = ({text, icon, styleConf, func, ...rest}) => {
  return (  
    <button 
      onClick={func}
      className={btnStyle.button} style={styleConf} {...rest}>
      {text}
      {icon && <img src={icon} alt="" />}
    </button>
  );
}
 
export default Button;