import styled from 'styled-components';
import H3 from '../typography/H3';

const WIDTH_BREAK = '500px'




const SlyledContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2px 30px;

  @media (max-width: ${WIDTH_BREAK}) {
  padding: 0 50px;
  
 }


`
const ServicesContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  @media (max-width: ${WIDTH_BREAK}) {
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0 10vw;
  width: 80%;
 }
 @media (min-width: 1870px) {
  justify-content: center;
 }

`

const ServicesCard = styled.div`
`

const StyledPadding = styled.div`
    background-color: ${props => props.theme.white};
    height:  5vh;
    width: 100%;
    /* @media (max-width: ${WIDTH_BREAK}) {
  display: none;
 } */
`

const ServicesText = styled.div`
  background-color: ${props => props.theme.black};
  padding: 17px 3px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  color: white;
`

const ServicesImage = styled.img`
  width: 100%;
`

function Varieties () {
  return (
    <SlyledContent>
    <ServicesContent>
      <ServicesCard>
        <StyledPadding>
          <H3>Variedades</H3>
        </StyledPadding>
        <ServicesImage src="./colheitadeira.svg"alt="Choleitadeira" />
        <ServicesText>Translados Gratuitos</ServicesText>
      </ServicesCard>
      <ServicesCard>
        <StyledPadding/>
        <ServicesImage src="./citrus.svg" alt="Citrus" />
        <ServicesText>Translados Gratuitos</ServicesText>
      </ServicesCard>
      <ServicesCard>
        <StyledPadding/>
        <ServicesImage src="./gado.svg" alt="Gado" />
        <ServicesText>Translados Gratuitos</ServicesText>
      </ServicesCard>
    </ServicesContent>
</SlyledContent>
  )
}

export default Varieties