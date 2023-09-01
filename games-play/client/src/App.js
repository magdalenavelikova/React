import { Routes, Route} from "react-router-dom";
import { Catalogue } from "./components/Catalogue";
import { CreatePage } from "./components/CreatePage";
import { DetailsPage } from "./components/DetailsPage";
import { EditPage } from "./components/EditPage";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { LogoutPage } from "./components/LogoutPage";
import { RegisterPage } from "./components/RegisterPage";

import { AuthProvider } from "./contexts/AuthContext";
import { RouteGuard } from "./components/Common/RouteGuard";
import { GameProvider } from "./contexts/GameContext";
//import { withAuth } from "./hoc/withAuth";

function App() {
  //const EnhancedLogin=withAuth(LoginPage );

  return (
    <AuthProvider>
      <GameProvider>
        <div id='box'>
          <Header />

          <main id='main-content'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              {/*  <Route path='/login' element={<EnhancedLogin />} />*/}

              <Route path='/register' element={<RegisterPage />} />

              <Route
                path='/create-game'
                element={
                  <RouteGuard>
                    <CreatePage />
                  </RouteGuard>
                }
              />
              <Route element={<RouteGuard />}>
                <Route path='/edit/:gameId' element={<EditPage />} />
                <Route path='/logout' element={<LogoutPage />} />
              </Route>

              <Route path='/catalogue' element={<Catalogue />} />
              <Route path='/catalogue/:gameId' element={<DetailsPage />} />
            </Routes>
          </main>
        </div>
      </GameProvider>
    </AuthProvider>
  );
}

export default App;
