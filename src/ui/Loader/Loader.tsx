import { FC } from "react";
import loaderStyle from "./loader.module.css"


const Loader: FC = () => {
  return (  
    <div className={loaderStyle.lds__ring}><div></div><div></div><div></div><div></div></div>
  );
}
 
export default Loader;