import styled from "styled-components";
import { StyledDiv } from "../Game";
import gameTitle from "../../../assets/scruffKittyText.svg";
import AnimatedPaw from "./AnimatedPaw";
import pinkPawImage from "../../../assets/pink-paw.png";
import whitePawImage from "../../../assets/white-paw.png";
import { useCallback, useEffect, useState } from "react";

export type Position = {
  top: number;
  left: number;
};

export const IntroScreen = (props: { goToGame: () => void }) => {
  const [positions, setPositions] = useState<Position[]>([]);

  const generateNonOverlappingPositions = useCallback(
    (count: number): Position[] => {
      const positions = [];

      while (positions.length < count) {
        const candidate = getRandomPosition();
        if (isFarEnough(candidate, positions)) {
          positions.push(candidate);
        }
      }

      return positions;
    },
    []
  );

  useEffect(() => {
    const newPositions = generateNonOverlappingPositions(SVG_COUNT);
    setPositions(newPositions);
  }, [generateNonOverlappingPositions]);

  return (
    <StyledDiv>
      {positions.slice(0, 15).map((position, index) => (
        <AnimatedPaw
          key={index}
          pawImage={pinkPawImage}
          delay={index * 300}
          position={position}
        />
      ))}

      {positions.slice(-15).map((position, index) => (
        <AnimatedPaw
          pawImage={whitePawImage}
          key={index}
          delay={index * 300}
          position={position}
        />
      ))}

      <GameTitle src={gameTitle} alt="Game title" />

      <StyledButton onClick={props.goToGame}>
        <span>Play</span>
      </StyledButton>
    </StyledDiv>
  );
};

const GameTitle = styled.img`
  z-index: 1;
`;

export const StyledButton = styled.button`
  background-color: #ffb3b3;
  background: linear-gradient(360deg, #ff367e -125.53%, #ffd0e1 116.43%);
  color: #fff;
  box-shadow: 0px 7px 1px 0px #d95e8a;
  border: none;
  border-radius: 2rem;
  padding: 1rem 5rem;
  cursor: pointer;
  font-size: 2.25rem;
  font-weight: 700;
  transition: background-color 0.3s ease;
  z-index: 1;
  min-width: 20rem;
  font-family: Poppins;
  -webkit-text-stroke: 2px #d36588;
  text-shadow: 0px 2px 4px #e27396;
`;

const MIN_SPACING = 120;
const SVG_COUNT = 30;

const isFarEnough = (pos: Position, existingPositions: Position[]) => {
  return existingPositions.every((p) => {
    const dx = p.left - pos.left;
    const dy = p.top - pos.top;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance >= MIN_SPACING;
  });
};

const getRandomPosition = () => {
  const maxX = window.innerWidth - 100;
  const maxY = window.innerHeight - 100;
  return {
    top: Math.floor(Math.random() * maxY),
    left: Math.floor(Math.random() * maxX),
  };
};
