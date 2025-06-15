import styled from "styled-components";
import { RandomWord } from "../../../hooks/useRandomWord";

const alphabetsFirstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const alphabetsSecondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const alphabetsThirdRow = ["z", "x", "c", "v", "b", "n", "m"];

const alphabets: Array<string[]> = [
  alphabetsFirstRow,
  alphabetsSecondRow,
  alphabetsThirdRow,
];

type WordGameProps = {
  randomWord: RandomWord;
  showHint: boolean;
  handleLetterClick: (letter: string) => void;
  isCorrectGuess: boolean;
  isLetterSelected: (letter: string) => boolean;
};

export default function Word(props: WordGameProps) {
  const {
    randomWord,
    showHint,
    handleLetterClick,
    isCorrectGuess,
    isLetterSelected,
  } = props;
  const { definition, word } = randomWord;

  return (
    <>
      <WordContainer>
        {isCorrectGuess ? (
          <span style={{ fontStyle: "italic" }}>W I N N E R</span>
        ) : (
          word
            .split("")
            .map((letter, index) =>
              /[a-zA-Z]/.test(letter) ? (
                isLetterSelected(letter) ? (
                  <span key={index}>{letter} </span>
                ) : (
                  <span key={index}>_ </span>
                )
              ) : (
                <span key={index}>{letter} </span>
              )
            )
        )}
      </WordContainer>

      <Hint style={{ opacity: showHint ? 1 : 0 }}>Hint: {definition}</Hint>

      <LetterContainer>
        {alphabets.map((row, index) => (
          <LetterRow key={index}>
            {row.map((alphabet) => (
              <Letter
                key={alphabet}
                isCorrectGuess={isCorrectGuess}
                isLetterSelected={isLetterSelected(alphabet)}
                onClick={() => handleLetterClick(alphabet)}
              >
                {alphabet}
              </Letter>
            ))}
          </LetterRow>
        ))}
      </LetterContainer>
    </>
  );
}

const WordContainer = styled.div`
  width: max-content;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1rem;
  z-index: 1;
  font-family: Patrick Hand, cursive;
`;

const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const LetterRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Hint = styled.p`
  font-style: italic;
  font-weight: Albert Sans, sans-serif;
  color: ${(props) => props.theme.colors.white};
  margin: 1rem 0;
  z-index: 1;
`;

const Letter = styled.p<{ isCorrectGuess: boolean; isLetterSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.salmon100};
  color: ${(props) => props.theme.colors.white};
  padding: 8px 16px;
  font-weight: 700;
  font-family: Albert Sans, sans-serif;
  font-size: 1.5rem;
  cursor: ${(props) =>
    props.isLetterSelected || props.isCorrectGuess ? "not-allowed" : "pointer"};
  opacity: ${(props) => (props.isLetterSelected ? 0 : 1)};
  transition: 0.3s;
  text-transform: uppercase;
  border: 2px solid #cf6cb180;
`;
