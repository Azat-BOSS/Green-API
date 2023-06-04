import { FC } from "react"

import Messages from "../pages/Messages/Messages"
import Registration from "../pages/Registration/Registration"

type TRouters = {
  component: FC,
  exact: boolean,
  path: string
}

export const routers: TRouters[] = [
  {component: Registration, path: "/auth", exact: true},
]


export const privateRouters: TRouters[] = [
  {component: Messages, path: "/messages/:id", exact: true},
  {component: Messages, path: "/messages/:id/:id", exact: true}
]