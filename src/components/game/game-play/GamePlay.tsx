import styled from "styled-components";
import { RandomWord } from "../../../hooks/useRandomWord";
import GameProgress from "./GameProgress";
import Word from "./Word";
import hintIcon from "../../../assets/hint.png";
import pauseIcon from "../../../assets/pause.png";
import volumeIcon from "../../../assets/volume.png";
import { IconButton } from "../../IconButton";
import Modal from "../../modal/Modal";
import { useGamePlay } from "./useGamePlay";
import { useCallback } from "react";

export function GamePlay(props: {
  randomWord: RandomWord;
  onRestart: () => void;
}) {
  const {
    randomWord: { word },
    onRestart,
  } = props;

  const {
    incorrectGuesses,
    isWordGuessed,
    showHint,
    isLetterSelected,
    handleLetterClick,
    onHintClick,
    clearSelection,
  } = useGamePlay(word);

  const resetGame = useCallback(() => {
    clearSelection();
    onRestart();
  }, [clearSelection, onRestart]);

  return (
    <StyledDiv>
      <GameProgress incorrectGuesses={incorrectGuesses} />
      <Word
        handleLetterClick={handleLetterClick}
        isLetterSelected={isLetterSelected}
        randomWord={props.randomWord}
        showHint={showHint}
      />

      <IconButton
        alt="pause"
        icon={pauseIcon}
        onClick={() => alert("pause")}
        position={{ top: "2rem", right: "2rem" }}
      />
      <IconButton
        alt="volume"
        onClick={() => alert("Volume")}
        icon={volumeIcon}
        position={{ top: "2rem", right: "8rem" }}
      />
      <IconButton
        alt="hint"
        disabled={showHint}
        icon={hintIcon}
        onClick={onHintClick}
        position={{ bottom: "2rem", right: "2rem" }}
      />

      {isWordGuessed !== undefined && (
        <Modal onSave={resetGame}>
          {isWordGuessed ? (
            <>
              <p>You Win! 🎉</p>
              <p>The word is "{word}"</p>
            </>
          ) : (
            <>
              <p>You lost 😔</p>
              <p>The correct word is "{word}"</p>
            </>
          )}
        </Modal>
      )}
    </StyledDiv>
  );
}

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
