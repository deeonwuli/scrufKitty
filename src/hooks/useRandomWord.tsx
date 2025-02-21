import { useCallback, useEffect, useState } from "react";
import { fetchData } from "../data/fetchData";

type RandomWordState = {
  randomWord: string;
  getRandomWord: () => void;
};

export function useRandomWord(): RandomWordState {
  const [randomWord, setRandomWord] = useState<string>("");

  const getRandomWord = useCallback(async () => {
    try {
      const { word } = await fetchData<{ word: string }>("/words", {
        random: "true",
      });
      setRandomWord(word);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  }, []);

  useEffect(() => {
    getRandomWord();
  }, [getRandomWord]);

  return { randomWord: randomWord, getRandomWord: getRandomWord };
}
