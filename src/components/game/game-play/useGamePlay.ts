import { useCallback, useMemo, useState } from "react";
import { NUMBER_OF_LIVES } from "../Game";

export function useGamePlay(word: string) {
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  const clearSelection = useCallback(() => {
    setSelectedLetters([]);
  }, []);

  const handleLetterClick = useCallback(
    (letter: string) => setSelectedLetters((prev) => [...prev, letter]),
    []
  );

  const incorrectGuesses = useMemo(
    () => selectedLetters.filter((letter) => !word.includes(letter)).length,
    [selectedLetters, word]
  );

  const isLetterSelected = useCallback(
    (alphabet: string) => selectedLetters.includes(alphabet),
    [selectedLetters]
  );

  const allLettersSelected = word
    .split("")
    .filter((letter) => letter !== " ")
    .every((letter) => isLetterSelected(letter));
  const isCorrectGuess =
    incorrectGuesses < NUMBER_OF_LIVES && allLettersSelected;
  const isIncorrectGuess = incorrectGuesses >= NUMBER_OF_LIVES;

  return {
    incorrectGuesses: incorrectGuesses,
    isCorrectGuess: isCorrectGuess,
    isIncorrectGuess: isIncorrectGuess,
    clearSelection: clearSelection,
    isLetterSelected: isLetterSelected,
    handleLetterClick: handleLetterClick,
  };
}

export function useGameActions() {
  const [showHint, setHintVisibility] = useState(false);
  const [showPauseModal, setPauseModalVisibility] = useState(false);

  const activateHint = useCallback(() => setHintVisibility(true), []);
  const hideHint = useCallback(() => setHintVisibility(false), []);
  const openPauseModal = useCallback(() => setPauseModalVisibility(true), []);
  const closePauseModal = useCallback(() => setPauseModalVisibility(false), []);

  return {
    showHint: showHint,
    showPauseModal: showPauseModal,
    activateHint: activateHint,
    closePauseModal: closePauseModal,
    hideHint: hideHint,
    openPauseModal: openPauseModal,
  };
}
