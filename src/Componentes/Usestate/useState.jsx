import React, { useState } from "react";
import { useTheme } from "styled-components";
import Modal2 from "../Componentes/modal2/modal2";

import "./useState.css";

const State = () => {
  let dataAtual = new Date();
  let dia = dataAtual.getDate();
  let mes = dataAtual.getMonth() + 1;
  let ano = dataAtual.getFullYear();
  let first = window.document.querySelector("button_horas");

  const dias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabádo",
  ];
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const formatarData = (data) => {
    const [ano, mes, dia] = data.split("-");
    return dia + "/" + mes + "/" + ano;
  };

  const [agenda, setAgenda] = useState(false);
  const [res, setRes] = useState("");
  const [res1, setRes1] = useState("");
  const [res2, setRes2] = useState("");
  const [limpar, setLimpar] = useState(true);
  const [vendedor, setVendedor] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const [show, setShow] = useState(false);
  const [resp, setResp] = useState("");
  const [day, setDay] = useState("");

  const handleChangeNove = (e) => {
    if (agenda !== false) {
      setAgenda(true);
      setAgenda(`${agenda}`);
      setResp(`A Kamisaria Zanuto agradece seu contato `);
      setRes(
        `Você agendou para o dia:  ${formatarData(agenda)} ás 09h da manhã.`
      );
      setVendedor(`${vendedor}`);
      setRes2(`Confirma o agendamento?`);
      setMostrar(`${mostrar}`);
      setRes1(`O nome do seu consultor é:  ${vendedor}`);
    } else {
      setRes("escolha uma data");
    }
  };
  const handleChangedez = (e) => {
    if (agenda !== false) {
      setAgenda(true);
      setAgenda(`${agenda}`);
      setResp(`A Kamisaria Zanuto agradece seu contato`);
      setRes(
        `Você agendou para o dia:  ${formatarData(agenda)} ás 09h da manhã.`
      );
      setVendedor(`${vendedor}`);
      setRes2(`Confirma o agendamento`);
      setMostrar(`${mostrar}`);
      setRes1(`O nome do seu consultor é: ${vendedor}`);
    } else {
      setRes(`Escolha uma data`);
    }
  };

  const clear = () => {
    setLimpar(false);
  };

  const handlerAgenda = (date) => {
    setAgenda(date);
    const agenda = new Date(date);
    const day = agenda.getUTCDay();
    if (day === 0) {
      setRes("Escolha um dia da semana");
      setDay(day);
    } else if (day === 6) {
      setRes("");
      setDay("sabado");
    } else {
      setRes("");
      setDay(day);
    }
  };

  const handleChangequinze = (e) => {
    if (agenda !== false) {
      setAgenda(true);
      setAgenda(`${agenda}`);
      setResp(`A Kamisaria Zanuto agradece seu contato`);
      setRes(`Você agendou para o dia:  ${formatarData(agenda)} ás 15h.`);
      setVendedor(`${vendedor}`);
      setRes2(`Confirma o agendamento`);
      setMostrar(`${mostrar}`);
      setRes1(`O nome do seu consultor é: ${vendedor}`);
    } else {
      setRes(`Escolha uma data`);
    }
  };

  return (
    <>
      <input
        className="sinput"
        type="date"
        value={agenda}
        onChange={(e) => handlerAgenda(e.target.value)}
      ></input>
      <div className="vendedores">
        <select
          name=""
          id="vendas"
          value={vendedor}
          onChange={(e) => setVendedor(e.target.value)}
        >
          <option value="Consultor" className="vendedor">
            Escolha um consutor
          </option>
          <option value="Joao">João</option>
          <option value="Antonio">António</option>
          <option value="Joaquin">Joaquim</option>
        </select>
      </div>
      <div className="buttonState">
        <button className="nine" onClick={() => handleChangeNove()}>
          9hs
        </button>
        <button className="ten" onClick={() => handleChangedez()}>
          10hs
        </button>
        {day !== "sabado" && (
          <button className="fifteen" onClick={() => handleChangequinze()}>
            15hs
          </button>
        )}
      </div>
      <div className="resp">{resp}</div>
      <div className="sres">{res}</div>
      <div className="sres1">{res1}</div>
      <div className="sres2">{res2}</div>
      {mostrar ? (
        <button className="sbuttonOne" onClick={() => setShow()}>
          Confirmar
        </button>
      ) : null}
      {/* <Modal2 show={show} setShow={setShow} /> */}
      {mostrar ? (
        <button className="sbuttonTwo" onClick={() => clear()}>
          Cancelar
        </button>
      ) : null}
    </>
  );
};
export default State;
