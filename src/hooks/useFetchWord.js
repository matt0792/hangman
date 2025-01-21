import { useState, useEffect } from "react";

// Gets a random word from the api
// Also returns loading and error status
export const useFetchWord = (url, dependency) => {
  const [word, setWord] = useState("");

  // Get a random word from the api
  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Couldn't fetch word");
        }
        const data = await response.json();
        setWord(data[0]);
        console.log(data[0])
      } catch (err) {
        throw new Error("Couldn't fetch word");
      }
    };

    fetchWord();
  }, [url, dependency]);
  return { word };
};
