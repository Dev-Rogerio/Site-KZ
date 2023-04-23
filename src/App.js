import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Cadcli from "./Componentes/Cadastro/cadcli.jsx";
import Inicio from "./Componentes/Inicio/inicio.jsx";
import Formulario from "../src/Componentes/Formulário/formulario.jsx";
import Modelo from "./Componentes/Modelo/modelo.jsx";
import Resumo from "./Componentes/Resumo/resumo.jsx";
import DescricaoColar from "./Componentes/DescricaoColar/descricaoColar.jsx";
import Agradecimento from "../src/Componentes/Agradecimento/agradecimento.jsx";
import Contato from "./Componentes/Contato/contato.jsx";
import Quemsomos from "../src/Componentes/QuemSomos/quemsomos.jsx";
import Servicos from "./Componentes/Servicos/servicos.jsx";
import Newsletter from "../src/Componentes/Newsletter/newsletter.jsx";
import Modal from "../src/Componentes/Modal/modal.jsx";
import Agendamento from "../src/Componentes/Agendammento/agendamento.jsx";
import Punho from "../src/Componentes/Punho/punho.jsx";
import Data from "./Componentes/Data/data.jsx";
import Medidas from "../src/Componentes/Medidas/medidas.jsx";
import State from "../src/Usestate/useState.jsx";
import Modal3 from "../src/Componentes/Modal3/modal3.jsx";
import Finalization from "./Componentes/Finalization/finalization.jsx";
import BoasVindas from "./Componentes/BoasVindas/boasVindas.jsx";
// import Scheduling from "../src/Componentes/Scheduling/scheduling.jsx";
import Modal2 from "./Componentes/modal2/modal2.jsx";
import Opening from "./Componentes/Opening/opening.jsx";

// import "./style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cadcli" element={<Cadcli />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/modelo" element={<Modelo />} />
          <Route path="/resumo" element={<Resumo />} />
          <Route path="/descricaocolar" element={<DescricaoColar />} />
          <Route path="/agradecimento" element={<Agradecimento />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/quemsomos" element={<Quemsomos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/punho" element={<Punho />} />
          <Route path="/semana" element={<Data />} />
          <Route path="/medidas" element={<Medidas />} />
          <Route path="/state" element={<State />} />
          <Route path="/modal-cartao" element={<Modal3 />} />
          <Route path="/finalization" element={<Finalization />} />
          <Route path="/boasvindas" element={<BoasVindas />} />
          <Route path="/modal2" element={<Modal2 />} />
          <Route path="/opening" element={<Opening />} />

          {/* <Route path="/scheduling" element={<Scheduling />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
