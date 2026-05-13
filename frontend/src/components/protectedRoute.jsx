import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { userInfo } = useAuth();
  const location = useLocation();

  if (!userInfo) {
    // Redirect to auth page, but save the current location in 'state'
    // so we can redirect them back after they login
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
