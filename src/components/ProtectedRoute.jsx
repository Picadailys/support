import { Navigate, Outlet } from "react-router-dom";
import { getTokens } from "../config/axiosConfig";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const { access } = getTokens() || {};

  if (!access) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;
