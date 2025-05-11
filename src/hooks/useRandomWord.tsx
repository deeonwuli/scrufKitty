import { useCallback, useState } from "react";
import { fetchData } from "../data/fetchData";

export type RandomWord = {
  word: string;
  definition: string;
  pronunciation: string;
};

export function useRandomWord(): {
  randomWord: RandomWord | undefined;
  getRandomWord: () => void;
} {
  const [randomWord, setRandomWord] = useState<RandomWord>();

  const getRandomWord = useCallback(async () => {
    try {
      const apiRandomWord = await fetchData<RandomWord>("/word");
      const randomWord = {
        word: apiRandomWord.word.toLowerCase(),
        definition: apiRandomWord.definition,
        pronunciation: apiRandomWord.pronunciation,
      };
      setRandomWord(randomWord);
    } catch (error) {
      console.error("Fetch error: ", error);
      setRandomWord(defaultWord);
    }
  }, []);

  return { randomWord: randomWord, getRandomWord: getRandomWord };
}

const defaultWord: RandomWord = {
  word: "Neutrosophy",
  definition: "Study of the origin and nature of philosophical neutralities",
  pronunciation: "Neutrosof",
};
