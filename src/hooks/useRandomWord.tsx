import { useEffect, useState } from "react";
import { fetchData } from "../data/fetchData";

export function useRandomWord(): {
  randomWord: string;
  getRandomWord: () => void;
} {
  const [randomWord, setRandomWord] = useState<string>("");

  async function getRandomWord() {
    try {
      const words = await fetchData<string[]>("/word");
      const word = words[0];
      setRandomWord(word);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  }
  useEffect(() => {
    getRandomWord();
  }, []);

  return { randomWord: randomWord, getRandomWord: getRandomWord };
}
