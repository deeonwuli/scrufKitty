import styled from "styled-components";
import { StyledButton } from "../game/intro/IntroScreen";

type TextModalProps = {
  type: "text";
  content: string;
};

type ButtonModalProps = {
  type: "button";
  content: string;
  action: () => void;
};

type ModalComponentType = TextModalProps | ButtonModalProps;

type ModalProps = {
  headerText: string;
  modalComponents: ModalComponentType[];
};

export default function Modal(props: ModalProps) {
  const { headerText, modalComponents } = props;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalWrapper>
          <StyledText>{headerText}</StyledText>

          {modalComponents.map((modalProperty) => {
            switch (modalProperty.type) {
              case "text":
                return (
                  <p key={modalProperty.content}>{modalProperty.content}</p>
                );
              case "button":
                return (
                  <StyledButton onClick={modalProperty.action}>
                    {modalProperty.content}
                  </StyledButton>
                );
            }
          })}
        </ModalWrapper>
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
  background-color: ${(props) => props.theme.colors.pink200};
  border-radius: 6rem;
  box-shadow: 0px 9px 6px 0px #00000040;
  padding: 4rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  min-width: 24rem;
  height: 75%;
`;

const ModalWrapper = styled.div`
  border: 2px dashed ${(props) => props.theme.colors.pink400};
  border-radius: 4rem;
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledText = styled.p`
  background-color: ${(props) => props.theme.colors.pink100};
  color: ${(props) => props.theme.colors.white};
  font-size: 2.5rem;
  font-weight: 700;
  border-radius: 2.5rem;
  width: 100%;
  text-transform: uppercase;
`;
