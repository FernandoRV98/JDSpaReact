import logo from './logo.svg';
import './App.css';
// Import the BrowserRouter, Router, Switch, and Route components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import the Navbar component
import Navbar from './Components/navigate/navbar';
// Import the Inicio, Experiences, and Products pages
import Inicio from './Components/pages/inicio';
import Experiences from './Components/pages/experiences';
import Products from './Components/pages/products';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Inicio/>} />
          <Route path='/experiences' element={<Experiences/>} />
          <Route path='/products' element={<Products/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
