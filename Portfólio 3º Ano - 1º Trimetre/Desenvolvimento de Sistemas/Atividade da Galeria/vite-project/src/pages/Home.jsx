import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Banner from '../componentes/Galeria'
import Header from '../componentes/Header'

function Home() {
  const irPara= useNavigate();
  const handleClick = () => {
  irPara('/sobre');
  };


  return (
    <div>
      <Header />
      <Banner />
      <button onClick={handleClick}>Ir para Sobre</button>

    </div>
  )
}

export default Home;
