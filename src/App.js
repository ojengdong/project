/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './component/Login';
import Ragister from './component/Ragister';
import Join from './component/Join'

function App() {
  const [submit, setSubmit] = useState(true)
  return (
    <div>
    <Routes>
      <Route path='/Join' element={<Join/>}/>
      <Route path='/Ragister' element={<Ragister/>}/>
      <Route path='/' element={<Login/>}/>
    </Routes>
    </div>
  );  
}

export default App;
