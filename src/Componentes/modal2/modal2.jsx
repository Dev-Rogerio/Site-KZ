import React, { useState } from "react";

import "./modal2.css";

const Modal2 = ({ show, setShow }) => {
  const [response, setResponse] = useState(false);
  const [cep, setCep] = useState(false);
  const [icode, setIcode] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [complement, setComplement] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setServece] = useState("");
  const [radio, setRadio] = useState(false);
  const [work, setWork] = useState(false);
  const [name, setName] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const working = () => {
    if (work !== false) {
      setWork(true);
      setResponse(`${work ? "A" : "b"}`);
    } else {
      document.querySelector(".iNome").focus();
    }
  };

  const handleResponse = (event) => {
    if (name === "") {
      document.querySelector(".iNome").focus();
      setResponse("Informe seu nome - linha 36!");
    } else if (icode === "") {
      setResponse("Informe seu Cep - linha 38");
      document.querySelector(".iCod").focus();
    } else if (number === "") {
      setResponse("Informe o numero - linha 41");
      document.querySelector(".iNumber").focus();
    } else if (complement === "") {
      setResponse("Tem complememto - linha 44");
    } else if (phone === "") {
      setResponse("Informe o telefone");
      document.querySelector(".iPhone").focus();
    } else {
      setResponse(
        response
          ? "Informe o cep - linha 33"
          : "Informe seu cep - linha 33 depois"
      );
      document.querySelector(".iCode").focus();
    }
  };

  const preencherCampos = (apiViacep) => {
    const end = window.document.querySelector(".iAddress");
    end.value = apiViacep.logradouro;
  };

  const handleCod = (v) => {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "0");

    if (r.length > 7) {
      r = r.replace(/^(\d{5})(\d{3}).*/, "$1-$2");

      const url = `https://viacep.com.br/ws/${r.replace("-", "")}/json`;
      fetch(url).then((resposta) => {
        resposta.json().then((apiViacep) => {
          preencherCampos(apiViacep);
        });
      });
    }
    return r;
  };

  const maskTree = (target, calback) => {
    setTimeout(() => {
      const y = calback(target.value);
      if (y !== target.value) {
        target.value = y;
      }
    }, 1);
  };

  function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else if (r.value) {
      r = r.replace(/^(\d*)/, "($1");
    } else if (r.value.length <= 10) {
      window.document.querySelector(".iPhone").focus();
    }
    return r;
  }
  function mask(target, callback) {
    setTimeout(() => {
      var v = callback(target.value);
      if (v != target.value) {
        target.value = v;
      }
    }, 1);
  }

  const handleRadio = (e) => {
    if (!name) {
      setResponse("O campo nome precisa ser preenchido - linha 121");
    } else if (icode === "") {
      setResponse("Informe um cep - linha 124");
      document.querySelector(".iCod").focus();
    } else if (number === "") {
      setResponse("Informe o numero - linha 127");
      document.querySelector(".iNumber").focus();
    } else if (complement === "") {
      setResponse("Tem complemento? - linha 129");
      document.querySelector(".iCompl").focus();
    } else if (phone === "") {
      setResponse("Informe o telefone - linha 132");
      document.querySelector(".iPhone").focus();
    } else if (service === "") {
      setServece(true);
      setResponse("É preciso Informar um Local de Atendimento -linha 136");
    } else {
      setResponse(
        `${
          radio
            ? "É preciso Informar um Local de Atendimento - linha 141"
            : (window.location.href = "http://localhost:3000/modal-cartao")
        }`
      );
    }
  };

  return (
    <>
      <contaner className="container-modal2">
        {show ? (
          <div className="ShowModal">
            <button className="fechar" onClick={() => setShow(false)}>
              X
            </button>

            <div className="containerText">
              <label htmlFor="descriptionRadio">
                Como gostaria de ser atendido?
              </label>
            </div>
            <div className="containerRadio">
              <input
                type="radio"
                name="select"
                className="iRadioButton"
                id="radio1"
              />
              <label htmlFor="radio1" id="radio1">
                Loja
              </label>

              <input
                type="radio"
                name="select"
                className="iRadioButton"
                id="radio2"
                value={work}
                onChange={(e) => working(e.target.value)}
              />
              <label htmlFor="radio2" id="radio2">
                Escritório
              </label>

              <input
                type="radio"
                name="select"
                id="radio3"
                className="iRadioButton"
                value={work}
              />
              <label htmlFor="radio3" id="radio3">
                Residência
              </label>
            </div>

            <div className="containerDados">
              <div className="dadosNome">
                <label htmlFor="lNome">Nome</label>
                <input
                  type="text"
                  className="iNome capitalize"
                  autoFocus
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Qual o seu Nome?"
                  onBlur={(event) => handleResponse(event.target.value)}
                />
              </div>
              <div className="dadosCep">
                <label htmlFor="lCod">Cep</label>
                <input
                  className="iCod capitalize"
                  onBlur={(e) => maskTree(e.target, handleCod, handleResponse)}
                  placeholder="Inorme seu cep"
                  value={icode}
                  onChange={(event) => setIcode(event.target.value)}
                ></input>
              </div>
              <div className="dadosEnd">
                <label htmlFor="lAddress">Endereço</label>
                <input
                  type="text"
                  className="iAddress  capitalize"
                  placeholder="Informe seu endereço"
                  value={address}
                  onChange={(event) => setResponse(event.target.value)}
                />
              </div>

              <div className="dadosNumber">
                <label htmlFor="lNunber">N°</label>
                <input
                  type="text"
                  className="iNumber"
                  placeholder="N°"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                  onBlur={(event) => handleResponse(event.target.value)}
                />
              </div>

              <div className="dadosComplemento">
                <label htmlFor="lCompl">Compl.</label>
                <input
                  type="text"
                  className="iCompl"
                  value={complement}
                  onChange={(event) => setComplement(event.target.value)}
                  onBlur={(event) => handleResponse(event.target.value)}
                />
              </div>

              <div className="dadosCel">
                <label htmlFor="lPhone" className="lNunber">
                  Celular/Telefone
                </label>
                <input
                  type="text"
                  className="iPhone"
                  placeholder="(99) 99999-9999"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  onBlur={(event) => handleResponse(event.target.value)}
                />
              </div>
            </div>
            <div className="bConfirmar">
              <div className="response">{response}</div>
              <button className="ButtonModal2" onClick={handleRadio}>
                Confirmar
              </button>
            </div>
          </div>
        ) : null}
      </contaner>
      <section className="containersection">
        <div className="task">
          {mostrar ? (
            <button
              className="ButtonConfirma"
              onClick={() => setShowModal(true)}
            >
              Confirmar
            </button>
          ) : null}
        </div>
      </section>
    </>
  );
};
export default Modal2;
