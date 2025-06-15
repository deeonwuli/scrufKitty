import styled from "styled-components";
import headImage from "../../../assets/game-progress/head.png";
import headAndHand from "../../../assets//game-progress/headAndHand.png";
import hands from "../../../assets//game-progress/hands.png";
import full from "../../../assets//game-progress/full.png";
import winner from "../../../assets/game-progress/winner.png";
import loser from "../../../assets/game-progress/loser.png";

export default function GameProgress(props: {
  incorrectGuesses: number;
  isCorrectGuess: boolean;
  isIncorrectGuess: boolean;
}) {
  const { incorrectGuesses, isCorrectGuess, isIncorrectGuess } = props;

  return (
    <GameProgressContainer>
      <GameProgressIcon
        incorrectGuesses={incorrectGuesses}
        isCorrectGuess={isCorrectGuess}
        isIncorrectGuess={isIncorrectGuess}
      />
    </GameProgressContainer>
  );
}

const GameProgressIcon = (props: {
  incorrectGuesses: number;
  isCorrectGuess: boolean;
  isIncorrectGuess: boolean;
}) => {
  const { incorrectGuesses, isCorrectGuess, isIncorrectGuess } = props;

  switch (true) {
    case incorrectGuesses === 1:
      return <StyledImage src={headImage} alt="head" />;
    case incorrectGuesses === 2:
      return <StyledImage src={headAndHand} alt="headAndHand" />;
    case incorrectGuesses === 3:
      return <StyledImage src={hands} alt="hands" />;
    case incorrectGuesses === 4:
      return <StyledImage src={full} alt="tailless" />;
    case incorrectGuesses === 5:
      return <StyledImage src={full} alt="full" />;
    case isCorrectGuess:
      return <StyledImage src={winner} alt="winner" />;
    case isIncorrectGuess:
      return <StyledImage src={loser} alt="loser" />;
    default:
      return null;
  }
};

const GameProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  margin: 10px;
  padding: 10px;
  z-index: 1;
`;

const StyledImage = styled.img`
  width: 15rem;
`;
