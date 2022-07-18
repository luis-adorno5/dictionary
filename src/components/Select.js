import React from "react";
import Definition from "./Definition";
import Example from "./Example";
import Synonyms from "./Synonym";
import Antonyms from "./Antonym";
import Audio from "./Audio";
  
const Select = ({ all, main, audio }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row dark-theme">
          <div className="col-12 text-center text-capitalize fs-1 fw-bold text-decoration-underline">
            {main.word}
          </div>
          {audio ? (
            <Audio
              controls
              className="color m-4 text-center col-10"
              src={audio}
            ></Audio>
          ) : (
            <div className="color fs-3 text-center">Audio not found</div>
          )}
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            meaning & definitions :
          </div>
          <div>
            <ol>
              <Definition all={all} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            examples :
          </div>
          <div>
            <ol>
              <Example all={all} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            synonyms :
          </div>
          <div>
            <ol className="col-12 li">
              <Synonyms all={all} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            antonyms :
          </div>
          <div>
            <ol className="col-12 li">
              <Antonyms all={all} />
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
  
export default Select;