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
import { gameServiceFactory } from "./services/gameServiceFactory";

import { AuthProvider } from "./contexts/AuthContext";
import { RouteGuard } from "./components/Common/RouteGuard";
//import { withAuth } from "./hoc/withAuth";

function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [latestGames, setLatestGames] = useState([]);

  const gameService = gameServiceFactory();

  useEffect(() => {
    Promise.all([gameService.getAll(), gameService.getLatest()]).then(
      ([games, latestGames]) => {
        setGames(games);
        setLatestGames(latestGames);
        console.log(latestGames);
      }
    );
  }, []);

  const onCreateGameSubmitHandler = async (data) => {
    const newGame = gameService.create(data);
    if (newGame) {
      setGames((state) => [...state, data]);
      setLatestGames((state) => [data, ...state]);
      navigate("/catalogue");
    }
  };

  const onGameEditSubmitHandler = async (data) => {
    const editedGame = await gameService.edit(data._id, data);
    if (editedGame) {
      setGames((state) =>
        state.map((x) => (x._id === data._id ? editedGame : x))
      );
      setLatestGames((state) =>
        state.map((x) => (x._id === data._id ? editedGame : x))
      );
      navigate(`/catalogue/${data._id}`);
    }
  };

  const onDeleteGameHandler = (gameId) => {
    setGames((state) => state.filter((x) => x._id !== gameId));
  };

  //const EnhancedLogin=withAuth(LoginPage );

  return (
    <AuthProvider>
      <div id='box'>
        <Header />

        <main id='main-content'>
          <Routes>
            <Route path='/' element={<HomePage latestGames={latestGames} />} />
            <Route path='/login' element={<LoginPage />} />
            {/*  <Route path='/login' element={<EnhancedLogin />} />*/}
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='/register' element={<RegisterPage />} />

            <Route
              path='/create-game'
              element={
                <RouteGuard>
                  <CreatePage
                    onCreateGameSubmitHandler={onCreateGameSubmitHandler}
                  />
                </RouteGuard>
              }
            />
            <Route element={<RouteGuard/>}>
            <Route
              path='/edit/:gameId'
              element={
                <EditPage onGameEditSubmitHandler={onGameEditSubmitHandler} />
              }
            />
            </Route>
       
            <Route path='/catalogue' element={<Catalogue games={games} />} />
            <Route
              path='/catalogue/:gameId'
              element={
                <DetailsPage onDeleteGameHandler={onDeleteGameHandler} />
              }
            />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
