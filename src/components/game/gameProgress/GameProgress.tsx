import styled from "styled-components";

export default function GameProgress() {
  return <GameProgressContainer />;
}

const GameProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 20rem;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  background-color: rgb(240, 240, 240);
`;
