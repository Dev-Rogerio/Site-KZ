import React from "react";

import { Link } from "react-router-dom";

import Logo from "../Icons/logokz.svg";
import "../Cadastro/cadcli.css";
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
import Use from "../Icons/use-contato.png";
import Email from "../Icons/email-contato.png";
import Telefonista from "../Icons/telefonista.jpg";

import "../Contato/contato.css";

function Contato() {
  function enviar() {
    var area = document.querySelector(".mensagemdousuario");
    var nome = document.querySelector(".in_nome-contao");
    var email = document.querySelector(".in_email-conato");
    var res = document.querySelector(".res_contato");
  }
  return (
    <>
      <section>
        <section className="menu_form">
          <img src={Logo} alt="" className="logo" />
          <header className="kz">KAMISARIA ZANUTO</header>

          <div className="menu">
            <ul>
              <Link to="/">
                <li>Inicio</li>
              </Link>
              <li>Quem-somos</li>
              <li>
                vestuário
                <ul>
                  <Link to="/agendamento">
                    <li className="banner">Agendamento</li>
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

        <main className="ContainerContactForm">
          <section className="boardPhotoOperator">
            <img className="imgOperator" src={Telefonista} alt="" />
          </section>

          <section className="boardFormulario">
            <div className="formAll">
              <div className="textForm">
                <h1 className="h1_contato">Entre em contato conosco</h1>
              </div>

              <section className="board_Contato_E_Email">
                <div className="boardContato">
                  <img className="iconName" src={Use} alt="" />
                  <label htmlFor="" className="labelContato">
                    Nome:
                  </label>
                  <input
                    type="text"
                    className="inputName capitalize"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div className="boardEmail">
                  <img className="iconEmail" src={Email} alt="" />
                  <label htmlFor="" className="labelEmail">
                    E-mail:
                  </label>{" "}
                  <input
                    type="text"
                    className="inputEmail"
                    placeholder="Digite seu e-mail"
                  />
                </div>
              </section>

              <div className="text-area">
                <fieldset className="area-contato">
                  <legend>Mensagem </legend>
                  <div className="row">
                    <div className="col-12">
                      <textarea
                        className="descricao"
                        name="descricao"
                        id="txtdescricao"
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="button">
              <button className="button_contato">Enviar</button>
            </div>
          </section>
        </main>

        <div className="footerContato">
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

          <div className="redesociais_cad">
            <img className="instagram" src={Iinstagram} alt="" />
            <img className="facebook" src={Ifacebook} alt="" />
            <img className="pinterest" src={Ipinterest} alt="" />
            <img className="youtube" src={Iyoutube} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Contato;
