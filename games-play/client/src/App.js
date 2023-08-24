import { Routes, Route, useNavigate } from "react-router-dom";
import { Catalogue } from "./components/Catalogue";
import { CreatePage } from "./components/CreatePage";
import { Details, DetailsPage } from "./components/DetailsPage";
import { EditPage } from "./components/EditPage";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { PageForRegistration, RegisterPage } from "./components/RegisterPage";
import { useEffect, useState } from "react";
import * as gameService from "./services/gameService";
function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll().then((result) => {
      setGames(result);
    });
  }, []);

  const onCreateGameSubmitHandler = async (data) => {
    const newGame = gameService.create(data);
    if (newGame) {
      setGames((state) => [...state, newGame]);
      navigate("/catalogue");
    }
  };

  return (
    <div id='box'>
      <Header />

      <main id='main-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
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
  );
}

export default App;
