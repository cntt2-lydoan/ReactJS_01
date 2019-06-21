import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/topmenu/TopMenu.js';
import Header from './Component/Header/Header.js';
import Content from './Component/Content/Content.js';
import Footer from './Component/Footer/Footer.js';



function App() {
  return (
    <div className="_013">
      <TopMenu/>
      <Header/>
      <Content tieude="Cach su dung props bang class" vitri1="order-lg-2" anh="img/01.jpg" trichdan="Day la trich dan so 1"/>
      <Content tieude="Tin tuc so 2" anh="img/02.jpg" trichdan="Day la trich dan so 2"/>
      <Content tieude="Tin tuc so 3" vitri1="order-lg-2" anh="img/03.jpg" trichdan="Day la trich dan so 3"/>
      <Footer/>
    </div>
  );
}

export default App;
