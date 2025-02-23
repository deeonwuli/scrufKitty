import styled from "styled-components";
import { NUMBER_OF_LIVES } from "../Game";

export default function Lives(props: { incorrectGuesses: number }) {
  const { incorrectGuesses } = props;

  return (
    <LivesContainer>
      {Array.from({ length: NUMBER_OF_LIVES }).map((_, index) => (
        <span
          key={index}
          style={{
            backgroundColor:
              index < NUMBER_OF_LIVES - incorrectGuesses ? "none" : "red",
          }}
        >
          ❤️
        </span>
      ))}
    </LivesContainer>
  );
}

const LivesContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  width: 5rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1;

  @media (max-width: 768px) {
    top: 0.25rem;
    right: 0.25rem;
  }
`;
