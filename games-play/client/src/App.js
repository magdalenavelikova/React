import { Routes, Route, useNavigate } from "react-router-dom";
import { Catalogue } from "./components/Catalogue";
import { CreatePage } from "./components/CreatePage";
import { DetailsPage } from "./components/DetailsPage";
import { EditPage } from "./components/EditPage";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { LogoutPage } from "./components/LogoutPage";
import { RegisterPage } from "./components/RegisterPage";
import { useEffect, useState } from "react";
import * as gameService from "./services/gameService";
import * as authService from "./services/authService";
import { AuthContext } from "./contexts/AuthContext";
function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    gameService.getAll().then((result) => {
      setGames(result);
    });
  }, []);

  const onCreateGameSubmitHandler = async (data) => {
    const newGame = gameService.create(data);
    if (newGame) {
      setGames((state) => [...state, data]);
      navigate("/catalogue");
    }
  };
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

  const onLogoutHandler =  () => {
   /* const accessToken = auth.accessToken;
    const result=await authService.logout(accessToken);
    console.log(result);*/
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
    <AuthContext.Provider value={context}>
      <div id='box'>
        <Header />

        <main id='main-content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route
              path='/create-game'
              element={
                <CreatePage
                  onCreateGameSubmitHandler={onCreateGameSubmitHandler}
                />
              }
            />
            <Route path='/catalogue' element={<Catalogue games={games} />} />
            <Route path='/catalogue/:gameId' element={<DetailsPage />} />
          </Routes>
          {/*<EditPage />      */}
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
