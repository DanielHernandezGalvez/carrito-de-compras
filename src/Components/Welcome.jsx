import styled from "styled-components";
import Simpsons from "../img/simpsons.png";

const Welcome = (props) => {
  const { reqApi } = props;
  return (
    <ContentLogo>
      <WelcomeText>Para buscar frases, has click en la imagen</WelcomeText>
      <ImageSimpsons
        src={Simpsons}
        alt="Los simpson en sofá"
        onClick={reqApi}
      />
    </ContentLogo>
  );
};

const ImageSimpsons = styled.img`
  width: 450px;
  height: auto;

  &:hover {
    cursor: pointer;
  }
`;

const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;

const WelcomeText = styled.p`
  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 px 10px 0px;
  font-size: 25px;
`;

export default Welcome;
