import React from "react";

import { Link } from "react-router-dom";
import "../Data/data.css";

import Logo from "../Icons/logokz.svg";

import Iinstagram from "../Icons/instagram.svg";
import Ifacebook from "../Icons/facebook.svg";
import Ipinterest from "../Icons/pinterest.svg";
import Iyoutube from "../Icons/youtube.svg";
import imail from "../Icons/cemail.svg";
import iface from "../Icons/cface.svg";
import iinsta from "../Icons/cinsta.svg";
import itel from "../Icons/ctel.svg";
import iwhats from "../Icons/cwhats.svg";
import itwiter from "../Icons/twiter.svg";


function Data () {
    return (
        <>
        <section className="Container_agendamento">
         <section className="menu_form">
          <img src={Logo} alt="" className="logo" />
          <header className="kz">KAMISARIA ZANUTO</header>

          <div className="menu">
          <ul>
          <Link to="/" >
            <li>Inicio</li>
            </Link>
            <li>Quem-somos</li>
            <li>
              vestuário
              <ul>
              <Link to="/agendamento">
              <li className="banner">Agendar hora</li>
              </Link>
                <li className="banner">Camisa masc.</li>
                <Link to="/cadcli">
                  <li className="banner">Maneq.virtual</li>
                </Link>
                <li className="banner">Monograma</li>
                <Link to="/newsletter">
                  <li className="banner">Newsletter</li>
                  </Link>
                <li className="banner">sapatos</li>
              </ul>
            </li>
            <li>Serviços</li>
            <Link to="/contato">
              <li>Contato</li>
            </Link>
          </ul>
        </div>
        </section>

        {/* --------------------------------------------Main */}
        <main>
            <div className="h1_fundo">
            <div className="h1_agendamento">Informe uma data</div>
            </div>

            <div className="horarios">
                <input type="date" className="i_data" />         
            </div>

        </main>

        {/* --------------------------------------------footer */}
        <div className="footer_agendamento">
          <div className="nossoendereco">
            Nosso Endereço
            <div className="rodape">
              Praça Gen. Gentil Falcão 49
              <div className="rodape">
                Cidade Monções
                <div className="rodape">Brooklin</div>
              </div>
            </div>
          </div>

          <div className="contato">
            Contato
            <div className="rodape">
              {" "}
              <img className="ico" src={imail} alt="" />{" "}
              contato@kamisariazanuto.com.br
              <div className="rodape">
                <img className="ico" src={itel} alt="" /> (11) 5506-8369
                <div className="rodape">
                  {" "}
                  <img className="ico" src={iwhats} alt="" /> (11) 93240-6348
                </div>
              </div>
            </div>
          </div>
          <div className="rede_cad">
            Rede Sociais
            <div className="rodape">
              {" "}
              <img className="ico" src={iinsta} alt="" /> kamisaria Zanuto
              <div className="rodape">
                {" "}
                <img className="ico" src={iface} alt="" /> Kamisaria Zanuto
                <div className="rodape">
                  <img className="ico" src={itwiter} alt="" /> Kamisaria Zanuto
                </div>
              </div>
            </div>
          </div>

          <div className="redesociais">
            <img className="instagram" src={Iinstagram} alt="" />
            <img className="facebook" src={Ifacebook} alt="" />
            <img className="pinterest" src={Ipinterest} alt="" />
            <img className="youtube" src={Iyoutube} alt="" />
          </div>
        </div>
        </section>
        </>
    )
}
export default Data;