import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/auth/AuthLayout";
import Login from "../modules/auth/views/Login";

const RootRedirect = () => <Navigate to="/login" replace />;

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<RootRedirect />} />
    </Routes>
  );
}
