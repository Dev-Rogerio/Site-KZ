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
import "../DescricaoColar/descricaoColar.css";

function DescricaoColar() {

  var Zoom = localStorage.getItem("figura");
  //img.style.transform = 'scale(2)';

  
  
  return (
    <>
      <containner className="containner-descicao">
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

        <section className="aside-descricao">
          <div className="mode">
            <div className="zoom">
            <img
              id="fig"
              className="zoon"
              src={Zoom}
              alt=""
              width="400px"
              height="340px"
            />
            </div>
          </div>

          <div className="descricao-colar">
            <h1 className="h1-desc">Descrição do colarinho</h1>
            <p className="desc-ingles">
              Esse tipo de colarinho se caracteriza pelas pontas mais
              pontiagudas e alongadas, porém, sempre bem justas e, praticamente,
              seguindo a linha da gravata. Aliás, esse acessório — a gravata — é
              fundamental para a camisa que ostenta um colarinho assim.
            </p>

            <Link to="/modelo">
            <div className="voltar">voltar</div>
            </Link>

            <Link to="/agradecimento" >
            <button className="booton-descricao">continuar</button>
            </Link>
          </div>
        </section>

        
        <div className="footer-descricao">
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
      </containner>
    </>
  );
}
export default DescricaoColar;
