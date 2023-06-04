import { FC } from "react";
import layoutStyle from "./layout.module.css"
import { routers, privateRouters } from "../routers/routers";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import RequireAuth from "../hoc/RequireAuth";

export const Layout: FC = () => {
  const location = useLocation()
  const background = location.state && location.state.background

  return (  
    <div className={layoutStyle.layout}>
      <main>
        <Routes location={background || location}>
          {routers?.map(({component: Component, path}, index) => (
            <Route 
            element={<Component/>}
            path={path}
            key={index}
            />
          ))}
          {privateRouters?.map(({component: Component, path}, index) => (
            <Route 
              key={index}
              path={path}
              element={
                <RequireAuth>
                  <Component/>
                </RequireAuth>
              }
            />
          ))}
        </Routes>
      </main>
    </div>
  );
}
 
