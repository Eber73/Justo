import styled from 'styled-components';
import { useState } from 'react';

import HeaderImage from '../src/components/layout/HeaderImage';
import ImageWithSpace from '../src/components/layout/ImageWithSpace';
import H2 from '../src/components/typography/H2';
import H3 from '../src/components/typography/H3';

const WIDTH_BREAK = '940px'


const StyledContainer =styled.div`

 display: flex;
 flex-direction: column;
 justify-content: center;


 `

const SltyledSummary = styled.div`
  display: flex;



`

//------------------------------------------------
const SlyledContent = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2px 23vw;

  @media (max-width: ${WIDTH_BREAK}) {
  padding: 0 50px;
  
 }


`
const ServicesContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: ${WIDTH_BREAK}) {
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
 }

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
      <SltyledSummary>      
        <ImageWithSpace image={'/pivo.svg'}>
              <H3>Produção</H3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, ducimus minus maiores iste voluptate obcaecati doloremque, dolorem mollitia quis, error praesentium libero aliquam magni. Ut tempore a eos optio ipsam.</p>
        </ImageWithSpace> 
      </SltyledSummary>

      <SlyledContent>
                  <H3>Variedades</H3>
                            <ServicesContent>
                                  <ServicesCard>
                                            <ServicesImage src="./colheitadeira.svg"alt="Choleitadeira" />
                                            <ServicesText>Translados Gratuitos</ServicesText>
                                  </ServicesCard>
                                  <ServicesCard>
                                            <ServicesImage src="./citrus.svg" alt="Citrus" />
                                            <ServicesText>Translados Gratuitos</ServicesText>
                                  </ServicesCard>
                                  <ServicesCard>
                                            <ServicesImage src="./gado.svg" alt="Gado" />
                                            <ServicesText>Translados Gratuitos</ServicesText>
                                  </ServicesCard>
                            </ServicesContent>
        </SlyledContent>
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