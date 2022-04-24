import * as React from "react";
import { Route } from "react-router-dom";
import LoginPage from "../Pages/Login";

export default function PublicRoutes() {
  return <Route path="/" element={<LoginPage />} />;
}
