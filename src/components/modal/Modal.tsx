import styled from "styled-components";

export default function Modal(props: {
  children: React.ReactNode;
  onSave: () => void;
}) {
  const { children, onSave } = props;

  return (
    <ModalOverlay>
      <ModalContent>
        <h3>Game Over</h3>
        {children}
        <p>Would you like to play again?</p>
        <ButtonContainer>
          <button onClick={onSave}>Yes</button>
          <button>No</button>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  min-width: 24rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.pink300};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    font-weight: bold;
  }
`;
