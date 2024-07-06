import styled from 'styled-components';
import { useState } from 'react';

import HeaderImage from '../src/components/layout/HeaderImage';
import ImageWithSpace from '../src/components/layout/ImageWithSpace';


// const StyledContainer =styled.div`
//  background-color: ${props => props.theme.black};

//  display: flex;
//  flex-direction: column;
//  justify-content: center;

// padding: 0px, 2040px, 0px, 2040px;

//  `



function Home() {
  return (
    // <StyledContainer></StyledContainer>  
      <HeaderImage image='/Banner.jpg'/>
    )
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }
  return (
    <div>
        <div>{contador}</div>
        <button onClick={adicionarContador}>Aicionar</button>
    </div>
  )
}

export default Home