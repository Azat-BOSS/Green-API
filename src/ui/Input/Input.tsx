import { FC } from "react";
import inputStyle from "./input.module.css"

interface IInput {
  placeholder: string;
  type: string;
  handleInput?: any;
  value?: string;
  styleInput?: React.CSSProperties;
  icon?: string;
  rest?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Input: FC<IInput> = ({type, placeholder, handleInput, value, styleInput, icon, ...rest}) => {
  return (  
    <div className={inputStyle.input__container}>
      {icon && <img src={icon} alt="icon" />}
      <input 
        className={inputStyle.input}
        type={type} 
        placeholder={placeholder}
        onChange={(evt: any) => handleInput(evt.target.value)}
        value={value}
        style={styleInput}
        {...rest}/>
    </div>
  );
}
 
export default Input;