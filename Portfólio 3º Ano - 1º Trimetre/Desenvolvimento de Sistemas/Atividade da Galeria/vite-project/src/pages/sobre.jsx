import React from 'react';
import {useNavigate} from 'react-router-dom';

function Sobre() {
  
  const irPara= useNavigate();
  
  const handleClick = () => {
   
    irPara('/Home');
  };
  
  return (
    <div>
     
       
        <button onClick={handleClick}>Ir para Home</button>
        <Sobre />
    </div>
  );
}

export default Sobre;
