import React, { useState } from "react";

import "../Opening/opening.css";
import { Button } from "bootstrap";

const Opening = ({ show, setShow }) => {
  return (
    <>
      {show ? (
        <div>
          <button>Abrir</button>
          <h1>Deus é Bom</h1>
        </div>
      ) : null}
    </>
  );
};
export default Opening;
