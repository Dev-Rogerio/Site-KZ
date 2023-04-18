import React, { useState } from "react";

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

import "../Newsletter/newsletter.css";

const Newsletter = () => {
  const limpaNome = () => {
    var res = document.querySelector(".res-newsletter");
    res.innerHTML = "";
    var nome = document.querySelector(".i-nome");
    if (nome.value === "" || nome.value.length <= 3) {
      res.innerHTML = "Campo nome, precisa no minímo 4 caracteres";
      document.querySelector(".i-nome").focus();
    }
  };
  const limpaEmail = () => {
    var email = document.querySelector(".i-email");
    var res = document.querySelector(".res-newsletter");
    res.innerHTML = "";

    function validarEmail(email) {
      const isValid = email.includes("@") && email.includes(".");
      return isValid;
    }
    if (!validarEmail(email.value) || email.value.length <= 8) {
      res.innerHTML = "Campo nome, precisa no minímo 4 caracteres";
      res.setAttribute("style", "display", "block");
      document.querySelector(".i-email").focus();
    }
  };
  const Cadastrar = () => {
    var res = document.querySelector(".res-newsletter");
    var nome = document.querySelector(".i-nome");
    var email = document.querySelector(".i-email");
    if (nome.value === "" || nome.value.length <= 3) {
      res.innerHTML = "Campo nome, precisa no minímo 4 caracteres";
      document.querySelector(".i-nome").focus();
    } else if (email.value === "") {
      res.innerHTML = "[ error ] Formato inválido Ex:. @.com";
      document.querySelector(".i-email").focus();
    } else {
      window.location.href = "http://localhost:3000/agradecimento";
    }
  };
  const abrirModal = () => {
    const modal = document.getElementById("modal-promocao");
    modal.classList.add("mostrar");
    modal.addEventListener("click", (e) => {
      if (e.target.id == "fechar") {
        modal.classList.remove("mostrar");
      }
    });
  };
  return (
    <>
      <section className="corpo">
        <div className="menucad">
          <header className="header_cadcli">
            <img src={Logo} alt="" className="logo_cadcli" />
            <header className="kz_cadcli">KAMISARIA ZANUTO</header>
          </header>

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
                  <li className="banner">Newsletter</li>
                  <li className="banner">sapatos</li>
                </ul>
              </li>
              <li>Serviços</li>
              <Link to="/contato">
                <li>Contato</li>
              </Link>
            </ul>
          </div>
        </div>

        <section className="header-newsletter">
          <h2 className="titulo-new">Cadastre-se Em Nossa Newsletter</h2>
          <button className="clique-aqui" onClick={abrirModal}>
            Clique Aqui
          </button>
        </section>

        <div className="footer_newsletter">
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

      {/* https://www.youtube.com/watch?v=pGJB5FgfdMI */}

      <div id="modal-promocao" className="modal-container">
        <div className="modal">
          <button className="fechar" id="fechar">
            X
          </button>
          <h3 className="newsletter">Preencha os dados</h3>
          <form>
            <div className="dad-nome">
              <label htmlFor="l_nome">Nome:</label>
              <input
                type="text"
                placeholder="Nome"
                className="i-nome"
                id="nome"
                autoComplete="off"
                onBlur={limpaNome}
              />
            </div>

            <div className="dad-E-mail">
              <label htmlFor="l_email">E-mail:</label>
              <input
                type="text"
                placeholder="E-mail"
                className="i-email"
                id="email"
                autoComplete="off"
                onBlur={limpaEmail}
              />
            </div>

            <div className="dad_button">
              <input
                type="button"
                value="Cadastrar"
                onClick={Cadastrar}
                className="cadastrar-form"
              />
            </div>

            <div className="res-newsletter" id="resul"></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
