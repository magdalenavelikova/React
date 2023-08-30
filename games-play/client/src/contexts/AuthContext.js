import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authServiceFactory } from "../services/authServiceFactory";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({});
  const authService = authServiceFactory(auth.accessToken);
  const navigate = useNavigate();
  const onLoginSubmitHandler = async (data) => {

    try {
      const result = await authService.login(data);
      setAuth(result);
      navigate("/catalogue");
    } catch (error) {
      console.log("There is no such user!");
    }
    //  console.log(Object.fromEntries(new FormData(e.target)));
  };

  const onRegisterSubmitHandler = async (data) => {
    const { confirmPassword, ...registerData } = data;
    if (confirmPassword !== registerData.password) {
      console.log("Paswords not match!");
      return;
    }
    try {
      const result = await authService.register(registerData);
      setAuth(result);
      navigate("/catalogue");
    } catch (error) {
      console.log("Error");
    }
  };

  const onLogoutHandler = async () => {
    await authService.logout();
    setAuth({});
  };
  const context = {
    onRegisterSubmitHandler,
    onLoginSubmitHandler,
    onLogoutHandler,
    userId: auth._id,
    token: auth.accessToken,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    </>
  );
};
