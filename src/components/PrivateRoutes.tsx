import type { FC } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { ERoutes } from "../enums/routes"

interface IProps {
  isAuthenticated?: boolean;
  redirectPath?: string;
}

export const PrivateRoutes: FC<IProps> = ({ isAuthenticated, redirectPath = ERoutes.Root }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />
}