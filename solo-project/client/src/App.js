import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Display from './components/Display';
import CreateService from './components/CreateService';
import OneService from './components/OneService';
import EditService from './components/EditService';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  // establishing state for our list of requested services
  const [serviceList, setServiceList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
        <Routes>
          {/* route that will render Display component */}
          <Route path='/' element={<Display serviceList={serviceList}
            setServiceList={setServiceList}/>}/>
          <Route path='/services/new' element={<CreateService/>}/>
          <Route path='/services/:id' element={<OneService/>}/>
          <Route path='/services/:id/edit' element={<EditService/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;