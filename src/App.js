import logo from './logo.svg';
import {Link, Outlet} from "react-router-dom";
import {useEffect, useState} from 'react';
import Appbar from "./components/Appbar";
import { Toolbar } from '@mui/material';
import Footer from "./components/Footer"
import './App.css';


function App() {
  return (
    <div>
    <Appbar />
    <Toolbar/>
    <Outlet/>
    <Footer />
    </div>
  );
}

export default App;
