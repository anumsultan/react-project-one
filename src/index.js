import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import Header from './Header';
import Button from './Button';
import Middle from './Middle';
import Footer from './Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='main-wrapper'>
    <Header/>
    <div className='content'>
      <Main/>
      <Button/>
      <Middle/>
    </div>
   
  <Footer/>
  
    </div>
   
  </React.StrictMode>
);

