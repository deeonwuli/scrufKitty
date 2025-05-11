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
  isLetterSelected: (letter: string) => boolean;
};

export default function Word(props: WordGameProps) {
  const { randomWord, showHint, handleLetterClick, isLetterSelected } = props;
  const { definition, word } = randomWord;

  return (
    <>
      <WordContainer>
        {word
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
          )}
      </WordContainer>

      <Hint style={{ opacity: showHint ? 1 : 0 }}>{definition}</Hint>

      <LetterContainer>
        {alphabets.map((row, index) => (
          <LetterRow key={index}>
            {row.map((alphabet) => (
              <Letter
                isLetterSelected={isLetterSelected(alphabet)}
                onClick={() => handleLetterClick(alphabet)}
                key={alphabet}
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
  color: ${(props) => props.theme.colors.white};
  margin: 1rem 0;
  z-index: 1;
`;

const Letter = styled.p<{ isLetterSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isLetterSelected
      ? props.theme.colors.salmon300
      : props.theme.colors.salmon100};
  color: ${(props) => props.theme.colors.white};
  padding: 8px 16px;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: ${(props) => (props.isLetterSelected ? "not-allowed" : "pointer")};
  transition: 0.3s;
  text-transform: uppercase;
  border: 2px solid #cf6cb180;
`;
