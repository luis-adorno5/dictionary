import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Select from "./components/Select";

const App = () => {
  const [word, setWord] = useState();
  const [all, setAll] = useState([]);
  const [main, setMain] = useState([]);

  const dataApi = async () => {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const dataJ = await data.json();
    setAll(dataJ);
    setMain(dataJ[0]);
  };

  const Search = () => {
    dataApi();
    setWord("");
  };
  
  useEffect(() => {
    dataApi();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center fw-bold fs-1 p-3 bg-primary text-white">
            Pocket Dictionary
          </div>
          <div className="form-floating bg-primary py-3 pb-5 d-flex justify-content-center">
            <input
              type="text"
              className="form-control-sm border-0 px-2 col-md-3 col-sm-4"
              placeholder="Type your word"
              id="floatingInput"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button
              className="btn btn-dark text-light col-md-1 col-sm-2 mx-2"
              onClick={Search}
            >
              Search
            </button>
          </div>
        {word == "" ? (
          <Select />
        ) : (
        <div className="fs-1 text-capitalize text-center fw-bold text-decoration-underline text-white bg-dark extra">
          type a word in the box
            </div>
            )}
        </div>
      </div>
    </>
  );
};
  
export default App;
