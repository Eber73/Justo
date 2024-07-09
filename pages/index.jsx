import styled from 'styled-components';
import { useState } from 'react';

import HeaderImage from '../src/components/layout/HeaderImage';
import ImageWithSpace from '../src/components/layout/ImageWithSpace';
import H1 from '../src/components/typography/H1';
import H2 from '../src/components/typography/H2';
import H3 from '../src/components/typography/H3';


const StyledContainer =styled.div`

 display: flex;
 flex-direction: column;
 justify-content: center;


 `
//------------------------------------------------
const SlyledContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: space-between;


`
const ServicesContent = styled.div`
  display: flex;

  margin-top: 30px;
  justify-content: space-between;
  flex: 1;
  gap: calc(5vh - 50px);

`

const ServicesCard = styled.div`
`

const ServicesText = styled.div`
  background-color: ${props => props.theme.black};
  padding: 20px 0;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  color: white;
`

const ServicesImage = styled.img`
  width: 100%;
  height: 50vh;
`

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
      <ImageWithSpace image={'/pivo.svg'}>
              <H2>Produção</H2>

      </ImageWithSpace> 



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