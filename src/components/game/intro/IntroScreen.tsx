import styled from "styled-components";
import { StyledDiv } from "../Game";
import gameTitle from "../../../assets/scruffKittyText.svg";

export const IntroScreen = (props: { goToGame: () => void }) => {
  return (
    <StyledDiv>
      <img src={gameTitle} alt="Game title" />
      <StyledButton onClick={props.goToGame}>
        <span>Play</span>
      </StyledButton>
    </StyledDiv>
  );
};

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
