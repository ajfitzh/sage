import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route,Outlet } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Home from './components/Home';
import Team from './components/Team';
import Labs from './components/Labs';
import References from './components/References';
import Feasibility from './components/Feasibility';
import Design from './components/Design';
import Prototype from './components/Prototype';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} >
        <Route path="~410red/" element={<Home/>} />
        <Route path="" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="feasibility" element={<Feasibility />} />
        <Route path="design" element={<Design />} />
        <Route path="prototype" element={<Prototype />} />
        <Route path="labs" element={<Labs />} />
        <Route path="references" element={<References />} />
        <Route path="*" 
                element={
                  <main style={{ padding: "1rem" }}>
                    <p> ERROR 404: Nothing here!</p>
                  </main>
                } />
      </Route>
      
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
