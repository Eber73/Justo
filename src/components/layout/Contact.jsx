import styled from "styled-components";
const WIDTH_BREAK = '700px'

const StyledFlex = styled.div`
padding-top: 10vh;
  display: flex;
  height: 50vh;
`
const StyledBloco = styled.div`
  display: flex;


`
const StyledImage = styled.div`
 background-image: url('${props => props.image}');
 background-position: right;
 background-repeat: no-repeat;
 background-size: cover;
 padding-top: 50px;
 width: 50%;

 @media (max-width: ${WIDTH_BREAK}) {
  display: none;
 }
`

const StyledContainer = styled.div`

  background-color: ${props => props.theme.white};
  padding: 0px 50px;
  flex: 2;

  
 width: 50%;
 height:10%vh;



  display: flex;
  flex-direction: column;

  &:before, &:after {
    content: '';
    margin: auto;
  }
`


function Contact ( { children, image } ) {
  return (
    <StyledFlex>
      <StyledContainer>
        {children}
      </StyledContainer>
      <StyledImage image={image}/>
    </StyledFlex>
  )

}


export default Contact