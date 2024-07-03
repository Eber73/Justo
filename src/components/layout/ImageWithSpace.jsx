import styled from 'styled-components';

const WIDTH_BREAK = '500px'

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;

  padding: 0;
  margin-top: 0;
`

const StyledImage = styled.div`
 background-image: url('${props => props.image}');
 background-position: center;
 background-repeat: no-repeat;
 background-size: auto;

 margin-top: 0;
 padding: 0;

 width: 80%;
 height: 50vh;

 @media (max-width: ${WIDTH_BREAK}) {
  display: none;
 }
`

// const StyledContainer = styled.div`

//   background-color: ${props => props.theme.white};
//   padding: 30px 50px;

//    @media (min-width: ${WIDTH_BREAK}) {
//     width: calc(${WIDTH_BREAK} - 100px);
//   }

//   @media (max-width:${WIDTH_BREAK}) {
//     width: 100%;
//   } 

//   display: flex;
//   flex-direction: column;

//   height: calc(100vh - 60px);
//   overflow-y: auto; */

//   &:before, &:after {
//     content: '';
//     margin: auto;
//   }
// `


function ImageWithSpace ( { children, image } ) {
  return (
    <StyledFlex>
      <StyledImage image={image}/>
    </StyledFlex>
  )

}

ImageWithSpace.defaultProps = {
  image: '/Banner.jpg'
}

export default ImageWithSpace