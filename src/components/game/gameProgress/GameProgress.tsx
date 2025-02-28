import styled from "styled-components";
import headImage from "../../../assets/game/head.png";
import headAndHand from "../../../assets/game/headAndHand.png";
import hands from "../../../assets/game/hands.png";
import tailless from "../../../assets/game/tailless.png";
import full from "../../../assets/game/full.png";

export default function GameProgress(props: { incorrectGuesses: number }) {
  const { incorrectGuesses } = props;

  return (
    <GameProgressContainer>
      <GameProgressIcon incorrectGuesses={incorrectGuesses} />
    </GameProgressContainer>
  );
}

const GameProgressIcon = (props: { incorrectGuesses: number }) => {
  switch (props.incorrectGuesses) {
    case 1:
      return <StyledImage src={headImage} alt="head" />;
    case 2:
      return <StyledImage src={headAndHand} alt="headAndHand" />;
    case 3:
      return <StyledImage src={hands} alt="hands" />;
    case 4:
      return <StyledImage src={tailless} alt="tailless" />;
    case 5:
      return <StyledImage src={full} alt="full" />;
    default:
      return <StyledImage src={full} alt="full" />;
  }
};

const GameProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 20rem;
  margin: 10px;
  padding: 10px;
`;

const StyledImage = styled.img`
  width: 100%;
`;
