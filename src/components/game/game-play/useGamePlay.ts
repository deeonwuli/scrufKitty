import { useCallback, useMemo, useState } from "react";
import { NUMBER_OF_LIVES } from "../Game";

export function useGamePlay(word: string) {
  const { showHint, onHintClick, setHintVisibility } = useGameHint();
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  const clearSelection = useCallback(() => {
    setSelectedLetters([]);
    setHintVisibility(false);
  }, [setHintVisibility]);

  const incorrectGuesses = useMemo(
    () => selectedLetters.filter((letter) => !word.includes(letter)).length,
    [selectedLetters, word]
  );

  const isLetterSelected = useCallback(
    (alphabet: string) => selectedLetters.includes(alphabet),
    [selectedLetters]
  );

  const isWordGuessed = useMemo(() => {
    const allLettersSelected = word
      .split("")
      .filter((letter) => letter !== " ")
      .every((letter) => isLetterSelected(letter));
    const tooManyIncorrectGuesses = incorrectGuesses >= NUMBER_OF_LIVES;

    return !tooManyIncorrectGuesses && !allLettersSelected
      ? undefined
      : tooManyIncorrectGuesses
      ? false
      : true;
  }, [incorrectGuesses, isLetterSelected, word]);

  const handleLetterClick = useCallback(
    (letter: string) => setSelectedLetters((prev) => [...prev, letter]),
    []
  );

  return {
    incorrectGuesses: incorrectGuesses,
    isWordGuessed: isWordGuessed,
    showHint: showHint,
    clearSelection: clearSelection,
    isLetterSelected: isLetterSelected,
    handleLetterClick: handleLetterClick,
    onHintClick: onHintClick,
  };
}

function useGameHint() {
  const [showHint, setHintVisibility] = useState(false);

  const onHintClick = useCallback(() => {
    setHintVisibility(true);
  }, []);

  return {
    showHint: showHint,
    onHintClick: onHintClick,
    setHintVisibility: setHintVisibility,
  };
}
