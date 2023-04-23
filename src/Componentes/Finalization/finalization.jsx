import React from "react";
import { useState } from "react";

import "./finalization.css";
import Opening from "../Opening/opening";

const Finalization = () => {
  const [mostrar, setMostrar] = useState(false);
  const [start, setStart] = useState(false);

  const hadleClick = () => {
    setMostrar(true);
  };

  return (
    <>
      <div className="final">
        <button className="btn" onClick={hadleClick}>
          Clicar Aqui broow
        </button>
        {mostrar ? (
          <button className="op" onClick={() => setStart(true)}>
            Let`s Open Now
          </button>
        ) : null}
      </div>
      <Opening show={start} setShow={setStart}></Opening>
    </>
  );
};
export default Finalization;
