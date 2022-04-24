import * as React from "react";
import { Route } from "react-router-dom";
import AdminPage from "../Pages/Admin";

export default function PrivateRoutes() {
  return <Route path={"/admin"} element={<AdminPage />} />;
}
