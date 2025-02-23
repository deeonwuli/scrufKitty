import styled from "styled-components";
import GameProgress from "./gameProgress/GameProgress";
import Lives from "./lives/Lives";
import Word from "./word/Word";
import Modal from "../modal/Modal";
import { useRandomWord } from "../../hooks/useRandomWord";
import { useCallback, useMemo, useState } from "react";
import CircleLoader from "../loader/CircleLoader";

export const NUMBER_OF_LIVES = 3;

export default function Game() {
  const { randomWord, getRandomWord } = useRandomWord();
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  const incorrectGuesses = useMemo(
    () =>
      selectedLetters.filter((letter) => !randomWord.includes(letter)).length,
    [randomWord, selectedLetters]
  );

  const isLetterSelected = useCallback(
    (alphabet: string) => selectedLetters.includes(alphabet),
    [selectedLetters]
  );

  const isWordGuessed = useMemo(() => {
    const allLettersSelected = randomWord
      .split("")
      .filter((letter) => letter !== " ")
      .every((letter) => isLetterSelected(letter));
    const tooManyIncorrectGuesses = incorrectGuesses >= NUMBER_OF_LIVES;

    return !tooManyIncorrectGuesses && !allLettersSelected
      ? undefined
      : tooManyIncorrectGuesses
      ? false
      : true;
  }, [incorrectGuesses, randomWord, isLetterSelected]);

  const handleLetterClick = useCallback(
    (letter: string) => setSelectedLetters((prev) => [...prev, letter]),
    []
  );

  const onSave = useCallback(() => {
    setSelectedLetters([]);
    getRandomWord();
  }, [getRandomWord]);

  if (!randomWord) return <CircleLoader />;

  return (
    <Container>
      <GameProgress />
      <Lives incorrectGuesses={incorrectGuesses} />
      <Word
        randomWord={randomWord}
        isLetterSelected={isLetterSelected}
        handleLetterClick={handleLetterClick}
      />

      {isWordGuessed !== undefined && (
        <Modal onSave={onSave}>
          {isWordGuessed === true ? (
            <p>You Win! 🎉</p>
          ) : (
            <>
              <p>You lost 😔</p>
              <p>The correct word is "{randomWord}"</p>
            </>
          )}
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  gap: 2rem 0;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    margin: 2rem;
  }
`;
