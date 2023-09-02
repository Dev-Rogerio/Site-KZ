import React, { useState } from "react";
import { Check, ChevronRight } from "@mui/icons-material";
import { OutlinedInput, Box } from "@mui/material";

import "../Pernam/styles.css";
import { Container } from "./style.ts";
import Modal5 from "../Modal5/modal5";
import { getDay, getHours, getMinutes } from "date-fns";

function Pernam() {
  const [labelText, setLabelText] = useState("");
  const [showTable, setShowtable] = useState(false);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const handleClick = () => {
    setLabelText("Informe a loja");
    setShowtable(true);
  };

  const getDate = () => {
    let dataAtual = new Date();
    let dia = dataAtual.getDay();
    let mes = dataAtual.getMonth() + 1;
    let ano = dataAtual.getFullYear();
    const dias = [
      "Domingo",
      "segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sabado-feira",
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

    return `${dias[dataAtual.getDay()]}, ${dia} de ${meses[0]} de ${ano}
         -  ${dataAtual.getHours()}:${dataAtual.getMinutes()}:${dataAtual.getSeconds()}`;
  };
  const getDate2 = () => {
    let dataAtual = new Date();
    let dia = dataAtual.getDateyar();
    let mes = dataAtual.getMonth() + 1;
    let ano = dataAtual.getFullYear();

    return `Atualizado em: ${dia}/${mes}/${ano} às ${dataAtual.getHours()}:${dataAtual.getMinutes()}`;
  };

  const handleCnpj = (cnpj) => {
    return cnpj.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
  };

  const hendleAccount = (account) => {
    if (!account) {
      return "";
    }
    const prefix = account.slice(0, -1);
    const sufix = account.slice(-1);
    return `${prefix}-${sufix}`;
  };

  return (
    <>
      <label className="flex ml-[580px] py-20 text-red-800 text-3xs">
        Digite o código da loja
      </label>
      <p>{hendleAccount("12345678901234")}</p>
      <section className="flex justify-center mt-[-70px] gap-4">
        {labelText}
        {/* <fieldset className="area-contato">
          <legend>Mensagem </legend>
          <div className="row">
            <div className="col-12">
              <input
                className={`flex border-2 flex-row w-180 h50 rounded placeholder-gray-500 placeholder="Informe a loja"`}
              ></input>
            </div>
          </div>
        </fieldset> */}
        <Box>
          <OutlinedInput label="text"></OutlinedInput>
        </Box>

        <button
          className="bg-[#0d1f3c] w-[180px] h-10 text-white rounded-md"
          onClick={handleClick}
        >
          Atualizar
        </button>
      </section>

      <div className="flex flex-col gap-3 mt-[20px]">
        <input />
        <input />
      </div>

      <div className="flex w-[340px] h-[70px] ml-[35%] mt-[5px] bg-red-500">
        {getHours(new Date())}:{getMinutes(new Date())}
      </div>
      <p>{getDate2()}</p>
      <section className="flex justify-center items-center bg-gray-400  mt-[70px] w-72 ms-[540px]">
        <h1 className="flex ms-2 mx-[8px] md-20 ">Campo Obrigatório</h1>
      </section>
      {showTable && (
        <Container>
          y
          <section className="flex justify-center mt-20 p-5 bg-orange-700 gap-6">
            <button
              className={`bg-[#f7d616] w-[90px] h-[40px] rounded font-bold`}
            >
              Hoje
            </button>
            <button
              className={`text-white bg-[#0d1f3c] w-[140px] h-[40] rounded `}
            >
              Ontem
            </button>
          </section>
          <div className="flex bg-black text-white h-10 mt-2 text"></div>
          <tarja className={`flex bg-[#0d1f3c] text-white mt-[20px] p-2`}>
            {getDate()}
          </tarja>
          <icon
            className="flex bg-blue-800 ms-[540px] mt-10 w-[25px] y-[25px] justify-center items-center rounded-[100%]"
            onClick={openModal}
          >
            <ChevronRight className="flex text-white"></ChevronRight>
          </icon>
          <Check className="flex w-7 y-7  border-sm text-green border-solid border-2 border-sky-500 rounded-xl "></Check>
        </Container>
      )}
      {open && <Modal5 mostra={open} setMostra={setOpen}></Modal5>}
    </>
  );
}
export default Pernam;
