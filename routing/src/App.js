import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation/>
        <Routes>
        <Route path='*' element={<h1>all others routes</h1>}/>
          <Route path='/' element={<h1>hi</h1>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/characters' element={<CharacterList/>}/>
          <Route path='/characters/:characterId' element={<CharacterDetails/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
