import { FC } from "react";
import authStyle from "./auth.module.css";
import AuthForm from "../../components/AuthForm/AuthForm";


const AuthModule: FC = () => {
  return (  
    <div className={authStyle.auth}>
      <div className={authStyle.auth__container}>
        <AuthForm/>
      </div>
    </div>
  );
}
 
export default AuthModule;