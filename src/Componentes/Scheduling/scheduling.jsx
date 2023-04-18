// import React, { useState } from "react";

// import { Link } from "react-router-dom";
// import "../Agendammento/agendamento.css";
// import Logo from "../Icons/logokz.svg";
// import Iinstagram from "../Icons/instagram.svg";
// import Ifacebook from "../Icons/facebook.svg";
// import Ipinterest from "../Icons/pinterest.svg";
// import Iyoutube from "../Icons/youtube.svg";
// import imail from "../Icons/cemail.svg";
// import iface from "../Icons/cface.svg";
// import iinsta from "../Icons/cinsta.svg";
// import itel from "../Icons/ctel.svg";
// import iwhats from "../Icons/cwhats.svg";
// import itwiter from "../Icons/twiter.svg";
// import Modal2 from "../modal2/modal2";
// import { set, setDate } from "date-fns";

// const Scheduling = () => {
//   const [currencyDate, setCurencyDate] = useState(new Date());

//   let dataAtual = new Date();

//   let dia = dataAtual.getDate() + 1;
//   let mes = dataAtual.getMonth() + 1;
//   let ano = dataAtual.getFullYear();
//   let first = window.document.querySelector("button_horas");

//   const dias = [
//     "Domingo",
//     "Segunda-feira",
//     "Terça-feira",
//     "Quarta-feira",
//     "Quinta-feira",
//     "Sexta-feira",
//     "Sabádo",
//   ];
//   const meses = [
//     "Janeiro",
//     "Fevereiro",
//     "Março",
//     "Abril",
//     "Maio",
//     "Junho",
//     "Julho",
//     "Agosto",
//     "Setembro",
//     "Outubro",
//     "Novembro",
//     "Dezembro",
//   ];

//   //  =================================================================================timeAgendamento

//   const formatarData = (data) => {
//     const [ano, mes, dia] = data.split("-");
//     return dia + "/" + mes + "/" + ano;
//   };

//   const [hora, setHora] = useState("");
//   const [res, setRes] = useState("");
//   const [res2, setRes2] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [mostrar, setMostrar] = useState(false);
//   const [previous, setPrevious] = useState(false);
//   const [date, SetDate] = useState("");
//   const [agenda, setAgenda] = useState(false);
//   const [day, setDay] = useState("");

//   const previousDate = (envent) => {
//     const data1 = new Date("2022-02-28");
//     const data2 = new Date("2022-03-01");
//     if (data1.isBefore(data2)) {
//       res2("data1 é anterior a data2");
//     } else {
//       res2("data2 é anterior a data1");
//     }
//   };

//   const handleDateNove = (e) => {
//     const dateOne = Number(new Date(date));
//     const dateNow = Date.now();

//     if (date !== "" && dateOne > dateNow) {
//       setMostrar(true);
//       setRes(
//         `Horáriio agendado para a data, ${formatarData(
//           date
//         )} com período de 1 hora na parte da manhã, das 9h ás 10h?`
//       );
//       setRes2(`Confirma o agendamento?`);
//     } else if (dateOne <= dateNow) {
//       setRes("Não temos agendamento para essa data");
//     } else if (agenda !== false) {
//       setAgenda(true);
//       setAgenda(`${agenda}`);
//       setAgenda(`A Kamisaria Zanuto agradece seu contato `);
//     } else {
//       setRes("Escolha uma data válida!");
//     }
//   };

//   const handleDateDez = (e) => {
//     if (date !== "") {
//       setMostrar(true);
//       setRes(
//         `Horáriio agendado para a data, ${formatarData(
//           date
//         )} com duração de 1 hora para o período da manhã, das 10h ás 11h.`
//       );
//       setRes2(`Confirma o agendamento?`);
//     } else {
//       setRes("Precisa escolher uma data válida!");
//     }
//   };
//   const handleDateOnze = (e) => {
//     if (date !== "") {
//       setRes(
//         `Horáriio agendado para a data, ${formatarData(
//           date
//         )} com duração de 1 hora para o período da manhã, das 11h às 12h.`
//       );
//       setMostrar(true);
//       setRes2(`Confirma o agendamento?`);
//     } else {
//       setRes(`Precisa escolher uma data válida!`);
//     }
//   };

//   const handleDateDoze = (e) => {
//     if (date !== "") {
//       setRes(
//         `Horáriio agendado para a data, ${formatarData(
//           date
//         )} com duração de 1 hora para o período da manhã, das 12h ás 13h.`
//       );
//       setRes2(`Confirma o agendamento?`);
//       setMostrar(true);
//     } else {
//       setRes(`Precisa escolher uma data válida!`);
//     }
//   };

//   const handleDateTreze = (e) => {
//     if (date !== "") {
//       setRes(
//         `Horáriio agendado para a data, ${formatarData(
//           date
//         )} com duração de 1 hora para o período da tarde, das 13hàs 14h.`
//       );
//       setRes2(`Confirma o agendamento?`);
//       setMostrar(true);
//     } else {
//       setRes(`Precisa escolher uma data válida!`);
//     }
//   };

//   const handleDateQuatorze = () => {
//     if (date === "") {
//       setRes(`Precisa escolher uma data váslida!`);
//     } else {
//       setRes(
//         `Horáriio agendado para a data, ${formatarData(
//           date
//         )} com duração de 1 hora para o período da tarde, das 14h ás 15h.`
//       );
//       setMostrar(true);
//       setRes2(`Confirma o agendamento?`);
//     }
//   };

//   const handleDateQuinze = () => {
//     if (date === "") {
//       setRes(`Precisa escolher uma data válida!`);
//     } else {
//       setRes(
//         `Horáriio agendado para a data, ${formatarData(
//           date
//         )} com duração de 1 hora para o período da tarde, das 15h ás 16h.`
//       );
//       setRes2(`Confirma o agendamento?`);
//       setMostrar(true);
//     }
//   };

//   const handleDateDezesseis = () => {
//     if (date !== "") {
//       setRes(
//         `Horáriio agendado para a data, ${formatarData(
//           date
//         )} com duração de 1 hora para o período da tarde, das 16h às 17h.`
//       );
//       setRes2(`Confirma o agendamento?`);
//       setMostrar(true);
//     } else {
//       setRes(`Precisa escolher uma data válida!`);
//     }
//   };

//   const handleDateDezessete = () => {
//     if (date !== "") {
//       setRes(
//         `Horáriio agendado para a data, ${formatarData(
//           date
//         )} com duração de 1 hora para o período da tarde, das 17h ás 18h.`
//       );
//       setMostrar(true);
//     } else {
//       setRes(`Precisa escolher uma data valida!`);
//     }
//   };

//   return (
//     <>
//       <section className="Container_agendamento">
//         <section className="menu_form">
//           <img src={Logo} alt="" className="logo" />
//           <header className="kz">KAMISARIA ZANUTO</header>

//           <div className="menu">
//             <ul>
//               <Link to="/">
//                 <li>Inicio</li>
//               </Link>
//               <li>Quem-somos</li>
//               <li>
//                 vestuário
//                 <ul>
//                   <Link to="/agendamento">
//                     <li className="banner">Agendamento</li>
//                   </Link>
//                   <li className="banner">Camisa masc.</li>
//                   <Link to="/cadcli">
//                     <li className="banner">Maneq.virtual</li>
//                   </Link>
//                   <li className="banner">Monograma</li>
//                   <Link to="/newsletter">
//                     <li className="banner">Newsletter</li>
//                   </Link>
//                   <li className="banner">sapatos</li>
//                 </ul>
//               </li>
//               <li>Serviços</li>
//               <Link to="/contato">
//                 <li>Contato</li>
//               </Link>
//             </ul>
//           </div>
//         </section>

//         <main className="main">
//           <div className="container_fundo">
//             <div className="txtfundo">
//               <h1 className="h1_txt">Gostaria de agendar um horário ?</h1>
//             </div>
//           </div>
//           <div className="containerCurrentDate">
//             <div className="current-date">
//               Hoje: {dias[currencyDate.getDay()]}, {dia} de
//               {meses[currencyDate.getMonth()]} de {ano}
//             </div>
//             <div className="d_date"></div>
//             <input
//               type="date"
//               className="i_date"
//               value={date}
//               onChange={(e) => SetDate(e.target.value)}
//             />
//           </div>{" "}
//           <div className="h1_fundo"></div>
//           <div className="horarios">
//             <button className="button_horas" onClick={handleDateNove}>
//               9:00hs
//             </button>
//             <button className="button_horas" onClick={handleDateDez}>
//               10:00hs
//             </button>
//             <button className="button_horas" onClick={handleDateOnze}>
//               11:00hs
//             </button>
//             <button className="button_horas" onClick={handleDateDoze}>
//               12:00hs
//             </button>
//             <button className="button_horas" onClick={handleDateTreze}>
//               13:00hs
//             </button>
//             <button className="button_horas" onClick={handleDateQuatorze}>
//               14:00hs
//             </button>
//             <button className="button_horas" onClick={handleDateQuinze}>
//               15:00hs
//             </button>
//             <button className="button_horas" onClick={handleDateDezesseis}>
//               16:00hs
//             </button>
//             <button className="button_horas" onClick={handleDateDezessete}>
//               17:00hs
//             </button>
//           </div>
//         </main>
//         <section className="containersection">
//           <div className="task">
//             <div className="txt_resposta">{res}</div>
//             <div className="txt_resposta2">{res2}</div>

//             {mostrar ? (
//               <button
//                 className="ButtonConfirma"
//                 onClick={() => setShowModal(true)}
//               >
//                 Confirmar
//               </button>
//             ) : null}
//           </div>
//         </section>
//         <Modal2 show={showModal} setShow={setShowModal} />

//         <div className="container_agendamento">
//           <div className="footer_agendamento">
//             <div className="nossoendereco">
//               Nosso Endereço
//               <div className="rodape">
//                 Praça Gen. Gentil Falcão 49
//                 <div className="rodape">
//                   Cidade Monções
//                   <div className="rodape">Brooklin</div>
//                 </div>
//               </div>
//             </div>
//             <div className="contato">
//               Contato
//               <div className="rodape">
//                 {" "}
//                 <img className="ico" src={imail} alt="" />{" "}
//                 contato@kamisariazanuto.com.br
//                 <div className="rodape">
//                   <img className="ico" src={itel} alt="" /> (11) 5506-8369
//                   <div className="rodape">
//                     {" "}
//                     <img className="ico" src={iwhats} alt="" /> (11) 93240-6348
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="rede_cad">
//               Rede Sociais
//               <div className="rodape">
//                 {" "}
//                 <img className="ico" src={iinsta} alt="" /> kamisaria Zanuto
//                 <div className="rodape">
//                   {" "}
//                   <img className="ico" src={iface} alt="" /> Kamisaria Zanuto
//                   <div className="rodape">
//                     <img className="ico" src={itwiter} alt="" /> Kamisaria
//                     Zanuto
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="redesociais">
//               <img className="instagram" src={Iinstagram} alt="" />
//               <img className="facebook" src={Ifacebook} alt="" />
//               <img className="pinterest" src={Ipinterest} alt="" />
//               <img className="youtube" src={Iyoutube} alt="" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
// export default Scheduling;
