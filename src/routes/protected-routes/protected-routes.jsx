// components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const userRole = localStorage.getItem("userRole");

  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  // Check if any role in allowedRoles contains the userRole
  const hasAccess = allowedRoles.some((role) =>
    role.split(",").includes(userRole)
  );

  if (!hasAccess) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};
export default ProtectedRoute;
