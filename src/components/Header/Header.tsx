import { FC } from "react";
import bannerStyle from "./banner.module.css";

interface IHeader {
  children?: React.ReactNode;
}

const Header: FC<IHeader> = ({children}) => {
  return (  
    <div className={bannerStyle.banner}>{children}</div>
  );
}
 
export default Header;