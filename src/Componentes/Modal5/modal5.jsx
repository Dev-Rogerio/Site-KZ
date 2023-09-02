import React from "react";

import "../Modal5/modal5.css";

const Modal5 = ({ mostra, setMostra }) => {
  return (
    <>
      {mostra ? (
        <section className="fotherModal5">
          <div className="containerCadCli">
            <div className="dadosModal5">
              <h1 className="dp">Dados Pessoal</h1>
            </div>
            <section className="cad-cli">
              <div className="fotherName">
                <label className="L-Name">Nome:</label>
                <input type="text" className="i-Name" />
              </div>
              <div className="fotherSname">
                <label className="l-Snome">Sobre Nome:</label>
                <input type="text" className="i-Sname" />
              </div>
              <section className="fotherEmail">
                <label className="l-Email">E-mail:</label>
                <input type="text" className="i-Email" />
              </section>
              <section className="fotherTel">
                <label className="l-cel">Celular:</label>
                <input type="text" className="i-Tel" />
              </section>
              <section className="fotherNiver">
                <label className="l-Niver">Aniversário:</label>
                <input type="text" className="i-Niver" />
              </section>
              <div className="container_button">
                <button className="button_Modal5" onClick={""}>
                  CONTINUAR
                </button>
              </div>
            </section>
          </div>
        </section>
      ) : null}
    </>
  );
};
export default Modal5;
