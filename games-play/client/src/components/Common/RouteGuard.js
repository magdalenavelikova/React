import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export const RouteGuard = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
  }
  return <>{children}</>;
};
