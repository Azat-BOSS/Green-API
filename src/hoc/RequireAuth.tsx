import { FC } from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/cookies/cookie";

interface IRequireAuth {
  children: React.ReactNode
}

const RequireAuth: FC<IRequireAuth> = ({children}) => {
  if(getCookie("idInstance") === undefined || getCookie("apiToken") === undefined) {
    return <Navigate to={"/auth"} replace={true}/>
  }
  
  return (  
    <div className="test">
      {children}
    </div>
  );
}
 
export default RequireAuth;