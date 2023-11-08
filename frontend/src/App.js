import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import RegistrationForm from './components/Login/Register';
import EventRegistrationForm from './components/Event/eventform';

import './App.css';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/register" element = {<RegistrationForm/>}/>
          <Route path = "/create-event" element = {<EventRegistrationForm/>}/>
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
