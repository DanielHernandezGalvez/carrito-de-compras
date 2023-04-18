import styled from "styled-components";
import Character from "./Character";

interface CharacterContainerProps {
characters: {
character: string;
image: string;
quote: string;
}[];
reqApi: () => void;
}

const CharacterContainer = ({ characters, reqApi }: CharacterContainerProps) => {

  return (
    <>
      <ContainerCharacter>
        {characters.map((character, index) => (
          <Character dataCharacter={character} key={index} />
        ))}
      </ContainerCharacter>
      <ContainerButton>
        <Button onClick={reqApi}>Recargar Frases</Button>
      </ContainerButton>
    </>
  );
};

const ContainerCharacter = styled.div`
  display: flex;
`;

const ContainerButton = styled.div`
width: 100%;
text-align: center;
`
const Button = styled.button`
width: 250px;
background-color: #e76f51;
color: #fff;
border: none;
padding: 10px 20px;
border-radius: 20px;
font-size:20px;
margin-top: 40px;
transition: all 0.2s ease-out;

&:hover{
    cursor: pointer;
    background-color: #1c0950;
}
`

export default CharacterContainer;
