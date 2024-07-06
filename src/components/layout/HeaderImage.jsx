import styled from 'styled-components';
import H1 from '../typography/H1';
import H2 from '../typography/H2';

const WIDTH_BREAK = '500px';

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  color: ${props => props.theme.white};
`;

const StyledImage = styled.div`
  background-image: url('${props => props.image}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 0;
  padding: 0;
  width: 100%;
  height: 50vh;

  @media (max-width: ${WIDTH_BREAK}) {
    display: none;
  }
`;

const StyledContainer = styled.div`
  background-color: ${props => props.theme.black};

  @media (min-width: ${WIDTH_BREAK}) {
    width: calc(${WIDTH_BREAK} - 100px);
  }

  @media (max-width: ${WIDTH_BREAK}) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

const StyledContentHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 10%;
`;

const StyledLine = styled.div`
  background-color: ${props => props.theme.white};
  height: 2px;
  width: 100%;

  &:before,
  &:after {
    content: '';
    margin: auto;
  }
`;

function HeaderImage({ image }) {
  return (
    <StyledFlex>
      <StyledImage image={image} />
      <StyledContentHome>
        <H1>Justo & Filhos</H1>
        <StyledLine />
        <H2>AGROPECUÁRIA</H2>
      </StyledContentHome>
    </StyledFlex>
  );
}

export default HeaderImage;