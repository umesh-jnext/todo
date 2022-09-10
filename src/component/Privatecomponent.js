import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { isLogin } from "../utils/index";
const Privatecomponent = () => {
  const { pathname } = useLocation();
  console.log({ pathname });
  console.log("is login is ", isLogin());

  return isLogin() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: pathname }} replace />
  );
};

export default Privatecomponent;
