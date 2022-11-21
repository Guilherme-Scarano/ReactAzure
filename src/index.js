import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Header from './components/Header';
import Banner from './components/Banner'
import ComputerVision from './components/ComputerVision';
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   <Header />
   <App />
   <Footer />
    videoTitle={"Meu Video"}
    url={"https://www.youtube.com/watch?v=3BhkeY974Rg"}
    videoDescription={"IFSULDEMINAS"}
    <ComputerVision/>
    
  </div>
);