import { useState } from "react";

const Audio = () => {
    const [word, setWord] = useState();
    const [all, setAll] = useState([]);
    const [main, setMain] = useState([]);
    const [audio, setAudio] = useState();

    const dataApi = async () => {
        const data = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const dataJ = await data.json();
        setAll(dataJ);
        setMain(dataJ[0]);
        const url = dataJ[0].phonetics[0].audio;
        const urla = url.replace("//ssl.", "https://");
        setAudio(urla);
      };
};

export default Audio;