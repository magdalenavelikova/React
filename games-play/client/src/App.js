import { Catalogue } from "./components/Catalogue";
import { CreatePage } from "./components/CreatePage";
import { Details, DetailsPage } from "./components/DetailsPage";
import { EditPage } from "./components/EditPage";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { PageForRegistration, RegisterPage } from "./components/RegisterPage";

function App() {
  return (
    <div id='box'>
      <Header />

      {/*<!-- Main Content -->*/}
      <main id='main-content'></main>

      <HomePage />
      <LoginPage />
      <RegisterPage />
      <CreatePage />
      <EditPage />
      <DetailsPage />
      <Catalogue />
    </div>
  );
}

export default App;
