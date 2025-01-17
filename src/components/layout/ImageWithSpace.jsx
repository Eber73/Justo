import styled from "styled-components";
import Varieties from "./Varieties";
const WIDTH_BREAK = '700px'

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 2500px) {
  flex-direction: row;
 }

`
const StyledBloco = styled.div`
  display: flex;


`
const StyledImage = styled.div`
 background-image: url('${props => props.image}');
 flex: 2;
 background-position: right;
 background-repeat: no-repeat;
 background-size: cover;
 width: 50%;
 height: 47vh;

 @media (max-width: ${WIDTH_BREAK}) {
  display: none;
 }
`

const StyledContainer = styled.div`

  background-color: ${props => props.theme.white};
  padding: 30px 50px;
  flex: 2;

  

 height: 50vh;


  /* @media (min-width: ${WIDTH_BREAK}) {
    width: calc(${WIDTH_BREAK} - 100px);
  }

  @media (max-width:${WIDTH_BREAK}) {
    width: 100%;
  } */

  display: flex;
  flex-direction: column;

  /* height: calc(100vh - 60px);
  overflow-y: auto; */

  &:before, &:after {
    content: '';
    margin: auto;
  }
`


function ImageWithSpace ( { children, image } ) {
  return (
    <StyledFlex>
      <StyledBloco>
      <StyledImage image={image}/>
      <StyledContainer>
        {children}
      </StyledContainer>
      </StyledBloco>
      <Varieties />
      
    </StyledFlex>
  )

}


export default ImageWithSpace