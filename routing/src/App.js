import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation/>
        <Routes>
          <Route path='/' element={<h1>hi</h1>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
