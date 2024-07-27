import styled from 'styled-components';
import { useState } from 'react';

import HeaderImage from '../src/components/layout/HeaderImage';
import ImageWithSpace from '../src/components/layout/ImageWithSpace';
import H3 from '../src/components/typography/H3';






const StyledContainer =styled.div`

 display: flex;
 flex-direction: column;
`

const SltyledSummary = styled.div`
  display: flex;



`

//------------------------------------------------


// const Footer = styled.footer`
//   background-color: #c4c4c4;
//   text-align: center;
//   padding: 20px 0;
// `


//-----------------------------------------------






function Home() {
  return (
    <StyledContainer>
      <HeaderImage image='/Banner.svg'/>
      <SltyledSummary>      
        <ImageWithSpace image={'/pivo.svg'}>
              <H3>Produção</H3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, ducimus minus maiores iste voluptate obcaecati doloremque, dolorem mollitia quis, error praesentium libero aliquam magni. Ut tempore a eos optio ipsam.</p>
        </ImageWithSpace>
      </SltyledSummary>

    </StyledContainer>  
    
   // <Footer>Seu rodapé aqui</Footer>
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