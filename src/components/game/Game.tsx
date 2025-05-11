import styled from "styled-components";
import { useRandomWord } from "../../hooks/useRandomWord";
import { useEffect, useState } from "react";
import CircleLoader from "../loader/CircleLoader";
import clouds from "../../assets/clouds.png";
import { GamePlay } from "./game-play/GamePlay";
import { IntroScreen } from "./intro/IntroScreen";

export const NUMBER_OF_LIVES = 5;

export default function Game() {
  const { randomWord: randomWordResponse, getRandomWord } = useRandomWord();
  const [stage, setStage] = useState<"intro" | "game">("intro");

  useEffect(() => {
    getRandomWord();
  }, [getRandomWord]);

  if (!randomWordResponse) return <CircleLoader />;

  return (
    <StyledDiv>
      {stage === "intro" ? (
        <IntroScreen goToGame={() => setStage("game")} />
      ) : (
        <GamePlay
          randomWord={randomWordResponse}
          onRestart={() => getRandomWord()}
        />
      )}
      <StyledClouds src={clouds} alt="clouds" />
    </StyledDiv>
  );
}

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 2rem 0;
  position: relative;
  background: linear-gradient(180deg, #ffc3c3 0%, #fff9cf 85.58%);

  @media (max-width: 768px) {
    margin: 2rem;
  }
`;

const StyledClouds = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
`;
