import * as React from "react";
import { Route } from "react-router-dom";
import IdeasPage from "../Pages/Ideas";

export default function ProtectedRoutes() {
  return <Route path="/ideas" element={<IdeasPage />} />;
}
