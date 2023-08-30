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

function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
 
  const gameService = gameServiceFactory();//auth.accessToken
  
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
  

  const onGameEditSubmitHandler = async (data) => {
    const editedGame = await gameService.edit(data._id, data);
    console.log(editedGame);
    if (editedGame) {
      setGames((state) =>
        state.map((x) => (x._id === data._id ? editedGame : x))
      );
      navigate(`/catalogue/${data._id}`);
    }
  };

 

  return (
    <AuthProvider>
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
            <Route
              path='/edit/:gameId'
              element={
                <EditPage onGameEditSubmitHandler={onGameEditSubmitHandler} />
              }
            />
            <Route path='/catalogue' element={<Catalogue games={games} />} />
            <Route path='/catalogue/:gameId' element={<DetailsPage />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
