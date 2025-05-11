import styled from "styled-components";
import { StyledDiv } from "../Game";

export const IntroScreen = (props: { goToGame: () => void }) => {
  return (
    <StyledDiv>
      <StyledTitle>Scruff Kitty</StyledTitle>
      <StyledButton onClick={props.goToGame}>Play</StyledButton>
    </StyledDiv>
  );
};

const StyledButton = styled.button`
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
`;

const StyledTitle = styled.h1`
  font-size: 5.9375rem;
  color: #ff367e;
  text-transform: uppercase;
  z-index: 1;
`;
