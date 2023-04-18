import React from "react";
import { Link } from "react-router-dom";

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
import visa from "../Icons/visa.png";
import MasterCard from "../Icons/master-card.jpg";
import PayPal from "../Icons/PayPal.jpg";
import NuBank from "../Icons/NuBank.jpg";
import Cielo from "../Icons/Cielo.jpg";

import "../Modal3/modal3.css";

const Modal3 = () => {
  return (
    <>
      <section className="menu_form">
        <img src={Logo} alt="" className="logo" />
        <header className="kz">KAMISARIA ZANUTO</header>
        {/* =======================================================================menu */}
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
      {/* ==============================================================================main */}
      <div className="containerallDad">
        <div className="painelChildremText">
          <div className="taxa">
            <label className="descriptionPagamento">
              Taxa de Agendamento R$50,00
            </label>
          </div>

          <div className="descriptionTaxa">
            <label htmlFor="">Atenção</label>
          </div>

          <div className="descriptionAboutTaxa">
            <label htmlFor="">
              O Horário de atendimento é reservado exclusivamnete para o cliente
              ser atendido no horário desejado. Não cobramos{" "}
              <label htmlFor="" font="bold">
                taxa{" "}
              </label>{" "}
              de agendamento, o valor pago será devolvido na hora da compra.
            </label>
          </div>

          <div className="iconsPay">
            <div className="iconsVisa">
              <img src={visa} alt="" id="iconsVisa" />
            </div>

            <div className="iconsCielo">
              <img src={Cielo} alt="" id="iconsCielo" />
            </div>
            <div className="iconsNuBank">
              <img src={NuBank} alt="" id="iconsNuBnak" />
            </div>
            <div className="iconsPayPal">
              <img src={PayPal} alt="" id="iconsPayPal" />
            </div>

            <div className="iconsMasterCard">
              <img src={MasterCard} alt="" id="iconsMasterCard" />
            </div>
          </div>
          <div className="formOfPayment">
            <div className="visa">
              <input type="radio" name="SelectCard" />
              <label htmlFor="card2" name="card2">
                Visa
              </label>
            </div>
            <div className="cielo">
              <input type="radio" name="SelectCard" />
              <label htmlFor="card3" name="card3">
                Ciélo
              </label>
            </div>
            <div className="pagSeguro">
              <input type="radio" name="SelectCard" />
              <label htmlFor="card4" name="card4">
                Pay Pal
              </label>
            </div>
            <div className="nuBank">
              <input type="radio" name="SelectCard" />
              <label htmlFor="card5" name="card5">
                Nu Bank
              </label>
            </div>
            <div className="masterCard">
              <input type="radio" name="card6" />
              <label htmlFor="card6" name="SelectCard">
                Master Card
              </label>
            </div>
          </div>
          {/* <div className="buttonmodal3">
            <button className="finalizar">Pagar</button>
          </div> */}
        </div>
      </div>
      {/* ================================================================================Footer */}
      <div className="footer-modelo">
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
    </>
  );
};
export default Modal3;
