import * as React from "react";
import { Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      {PublicRoutes()}
      {ProtectedRoutes()}
      {PrivateRoutes()}
    </Routes>
  );
}
