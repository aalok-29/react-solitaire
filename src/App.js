import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Use from './components/Use';

import About from './components/About';
import Home from './components/Home';
// import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
  return (
    <>

  
   
    <Router>
      <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/AboutMe' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Blog' element={<Blog/>}/>
    <Route path='/Use' element={<Use/>}/>
     <Route path='/Link' element={<Link/>}/>
   
    </Routes>
    </Router>
    </>
  ); 
}

export default App;
