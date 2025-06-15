import styled from "styled-components";
import { RandomWord } from "../../../hooks/useRandomWord";
import GameProgress from "./GameProgress";
import Word from "./Word";
import { IconButton } from "../../IconButton";
import Modal from "../../modal/Modal";
import { useGameActions, useGamePlay } from "./useGamePlay";
import { useCallback, useEffect, useState } from "react";
import { VolumeIcon } from "../../../assets/game-play/VolumeIcon";
import { PauseIcon } from "../../../assets/game-play/PauseIcon";
import { HintIcon } from "../../../assets/game-play/HintIcon";

export function GamePlay(props: {
  randomWord: RandomWord;
  onQuit: () => void;
  onRestart: () => void;
}) {
  const {
    randomWord: { word },
    onQuit,
    onRestart,
  } = props;

  const {
    incorrectGuesses,
    isCorrectGuess,
    isIncorrectGuess,
    isLetterSelected,
    handleLetterClick,
    clearSelection,
  } = useGamePlay(word);

  const {
    showHint,
    showPauseModal,
    activateHint,
    closePauseModal,
    hideHint,
    openPauseModal,
  } = useGameActions();

  const resetGame = useCallback(() => {
    clearSelection();
    hideHint();
    closePauseModal();
    onRestart();
  }, [clearSelection, closePauseModal, hideHint, onRestart]);

  const quitGame = useCallback(() => {
    onRestart();
    onQuit();
  }, [onQuit, onRestart]);

  const { showFailureModal, showSuccessModal } = useModalVisibility(
    isCorrectGuess,
    isIncorrectGuess
  );

  return (
    <StyledDiv>
      <GameProgress
        incorrectGuesses={incorrectGuesses}
        isCorrectGuess={isCorrectGuess}
        isIncorrectGuess={isIncorrectGuess}
      />
      <Word
        handleLetterClick={handleLetterClick}
        isLetterSelected={isLetterSelected}
        randomWord={props.randomWord}
        showHint={showHint}
      />

      <IconButton
        onClick={openPauseModal}
        position={{ top: "2rem", right: "2rem" }}
      >
        <PauseIcon />
      </IconButton>
      <IconButton
        onClick={() => alert("Volume")}
        position={{ top: "2rem", right: "8rem" }}
      >
        <VolumeIcon />
      </IconButton>
      <IconButton
        disabled={showHint}
        onClick={activateHint}
        position={{ bottom: "2rem", right: "2rem" }}
      >
        <HintIcon />
      </IconButton>

      {showPauseModal && (
        <Modal
          headerText="Paused"
          modalComponents={[
            { type: "button", content: "Resume", action: closePauseModal },
            { type: "button", content: "Restart", action: resetGame },
            { type: "button", content: "Quit", action: quitGame },
          ]}
        />
      )}

      {showSuccessModal && (
        <Modal
          headerText="You win!"
          modalComponents={[
            { type: "text", content: `The word is "${word}"` },
            { type: "button", content: "Restart", action: resetGame },
            { type: "button", content: "Quit", action: quitGame },
          ]}
        />
      )}
      {showFailureModal && (
        <Modal
          headerText="You lost"
          modalComponents={[
            { type: "text", content: `The correct word is "${word}"` },
            { type: "button", content: "Restart", action: resetGame },
            { type: "button", content: "Quit", action: quitGame },
          ]}
        />
      )}
    </StyledDiv>
  );
}

const useModalVisibility = (
  isCorrectGuess: boolean,
  isIncorrectGuess: boolean
) => {
  const [showSuccessModal, setSuccessModalVisibility] = useState(false);
  const [showFailureModal, setFailureModalVisibility] = useState(false);

  useEffect(() => {
    if (isCorrectGuess) {
      const timer = setTimeout(() => setSuccessModalVisibility(true), 3000);
      return () => clearTimeout(timer);
    } else if (isIncorrectGuess) {
      const timer = setTimeout(() => setFailureModalVisibility(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isCorrectGuess, isIncorrectGuess]);

  return { showFailureModal, showSuccessModal };
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: linear-gradient(180deg, #ffc3c3 0%, #fff9cf 85.58%);

  @media (max-width: 768px) {
    margin: 2rem;
  }
`;
