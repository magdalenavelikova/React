import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
export const LogoutPage = () => {
  const { onLogoutHandler } = useContext(AuthContext);

  useEffect(() => {
    onLogoutHandler();
  }, [onLogoutHandler]);
  return <Navigate to='/' />;
};
