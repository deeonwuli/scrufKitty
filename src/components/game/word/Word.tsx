import styled from "styled-components";

const alphabets: string[] = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

type WordGameProps = {
  randomWord: string;
  handleLetterClick: (letter: string) => void;
  isLetterSelected: (letter: string) => boolean;
};

export default function Word(props: WordGameProps) {
  const { randomWord, handleLetterClick, isLetterSelected } = props;

  return (
    <>
      <WordContainer>
        {randomWord
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
      <LetterContainer>
        {alphabets.map((alphabet) => (
          <Letter
            isLetterSelected={isLetterSelected(alphabet)}
            onClick={() => handleLetterClick(alphabet)}
            key={alphabet}
          >
            {alphabet}
          </Letter>
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
`;

const LetterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  gap: 1rem;
  place-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Letter = styled.p<{ isLetterSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isLetterSelected
      ? props.theme.colors.black
      : props.theme.colors.pink400};
  color: ${(props) => props.theme.colors.white};
  padding: 8px 16px;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: ${(props) => (props.isLetterSelected ? "not-allowed" : "pointer")};
  transition: 0.3s;
`;
