import { FC } from "react";
import regStyle from "./reg.module.css";
import AuthModule from "../../modules/AuthModule/AuthModule";

const Registration: FC = () => {
  return (  
    <section className={regStyle.reg}>
      <AuthModule/>
    </section>
  );
}
 
export default Registration;