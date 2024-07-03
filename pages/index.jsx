import styled from 'styled-components';
import { useState } from 'react';

import ImageWithSpace from '../src/components/layout/ImageWithSpace'


const StyledContainer =styled.div`
 box-sizing: border-box;
 background-color: ${props => props.theme.white};

 display: flex;
 flex-direction: column;
 justify-content: center;

 `


function Home() {
  return (
    <StyledContainer >
      <ImageWithSpace/>
    </StyledContainer>  
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