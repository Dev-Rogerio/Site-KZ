import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../Icons/logokz.svg";
import "../Formulário/formulario.css";
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
import Douglas from "../Icons/douglaspequeno.svg";
import Ingles from "../Icons/ingles.png";
import Italy from "../Icons/Italy-Redondo.png";
import Italiano from "../Icons/Italiano.png";
import Magalhaes from "../Icons/joao.png";
import Windsor from "../Icons/windsor1.png";
import Paris from "../Icons/Paris.png";
import Monaco from "../Icons/monaco.png";
import Maniquin from "../Icons/maniquin1.png";

function Formulario() {
  // const [valor, setValor] = useState();

  function Receber() {
    var res = document.querySelector(".res_formulario");
    var col = document.querySelector(".colar");
    var pal = document.querySelector(".pala");
    var man = document.querySelector(".manga");
    var tor = document.querySelector(".torax");
    var cin = document.querySelector(".cintura");
    var qua = document.querySelector(".quadril");
    var cum = document.querySelector(".cumprimento");
    var pun = document.querySelector(".punho");

    if (col.value === "" || col.value.length <= 3) {
      res.innerHTML = "[erro]Campo Colar Ex. 001";
      window.document.querySelector(".colar").focus();
    } else if (pal.value === "" || pal.value.length <= 3) {
      res.innerHTML = "[erro]Campo pala Ex. 002";
      window.document.querySelector(".pala").focus();
    } else if (man.value === "" || man.value.length <= 3) {
      res.innerHTML = "[erro]Campo manga Ex. 003";
      window.document.querySelector(".manga").focus();
    } else if (tor.value === "" || tor.value.length <= 3) {
      res.innerHTML = "[erro]Campo toraxr Ex. 001";
      window.document.querySelector(".torax").focus();
    } else if (cin.value === "" || cin.value.length <= 3) {
      res.innerHTML = "[erro]Campo cintura Ex. 001";
      window.document.querySelector(".cintura").focus();
    } else if (qua.value === "" || qua.value.length <= 3) {
      res.innerHTML = "[erro]Campo quadril Ex. 001";
      window.document.querySelector(".quadril").focus();
    } else if (cum.value === "" || cum.value.length <= 3) {
      res.innerHTML = "[erro]Campo cumprimento Ex. 001";
      window.document.querySelector(".cumprimento").focus();
    } else if (pun.value === "" || pun.value.length <= 3) {
      res.innerHTML = "[erro]Campo punho Ex. 001";
      window.document.querySelector(".punho").focus();
    } else {
      window.location.href = "http://localhost:3000/modelo";
    }
  }

  function mcolar(y) {
    var res = window.document.querySelector(".res_formulario");
    var colar = window.document.querySelector(".colar");
    var r = y.replace(/\D/g, "");
    r = r.replace(/^0/, "0");
    res.innerHTML = "";

    if (colar.value === "" || r.length > 2) {
      r = r.replace(/^(\d{1})(\d{2}).*/, "$1.$2cm");
    } else if (colar.value === "" || r.length <= 2) {
      res.innerHTML = "[erro]Campo Colar Ex. 001";
      window.document.querySelector(".colar").focus();
    }
    return r;
  }

  function maskColar(target, calback) {
    setTimeout((e) => {
      var x = calback(target.value);
      if (x != target.value) {
        target.value = x;
      }
    }, 1);
  }

  function mpala(y) {
    var res = window.document.querySelector(".res_formulario");
    var pala = window.document.querySelector(".pala");
    var r = y.replace(/\D/g, "");
    r = r.replace(/^0/, "0");
    res.innerHTML = "";

    if (pala.value === "" || r.length > 2) {
      r = r.replace(/^(\d{1})(\d{2}).*/, "$1.$2cm");
    } else if (pala.value === "" || r.length <= 2) {
      res.innerHTML = "[erro]Campo pala Ex. 002";
      window.document.querySelector(".pala").focus();
    }
    return r;
  }

  function maskPala(target, calback) {
    setTimeout((e) => {
      var x = calback(target.value);
      if (x != target.value) {
        target.value = x;
      }
    }, 1);
  }

  // function mpala (t) {
  //   var res = window.document.querySelector('.res_formulario')
  //   var pala = window.document.querySelector('.pala');
  //   var j = t.replace(/\D/g, "");
  //   j = j.replace(/^0/, "0");
  //   res.innerHTML = "";

  //   if(j.length >= 3) {
  //     j = j.replace(/^(\d{1})(\d{2}).*/, "$1.$2cm");

  //   } else if (pala.value === "" || j.length <= 2) {
  //     res.innerHTML = "[erro]Campo pala Ex. 002";
  //     window.document.querySelector('.pala').focus();
  //   }
  //   return j;
  // }

  // function maskPala (target, calback) {
  //   setTimeout((i) => {
  //     var k = calback(target.value);
  //     if(k != target.value) {
  //     target.value = k
  //     }
  //   }, 1);
  // }

  function mmanga(y) {
    var res = window.document.querySelector(".res_formulario");
    var manga = window.document.querySelector(".manga");
    var r = y.replace(/\D/g, "");
    r = r.replace(/^0/, "0");
    res.innerHTML = "";

    if (manga.value === "" || r.length > 2) {
      r = r.replace(/^(\d{1})(\d{2}).*/, "$1.$2cm");
    } else {
      res.innerHTML = "Digite 3 caracteres Ex. 003";
      window.document.querySelector(".manga").focus();
    }
    return r;
  }

  function maskManga(target, calback) {
    setTimeout(() => {
      var x = calback(target.value);
      if (x != target.value) {
        target.value = x;
      }
    }, 1);
  }

  function mtorax(y) {
    var res = window.document.querySelector(".res_formulario");
    var torax = window.document.querySelector(".torax");
    var r = y.replace(/\D/g, "");
    r = r.replace(/^0/, "0");
    res.innerHTML = "";

    if (torax.value === "" || r.length > 2) {
      r = r.replace(/^(\d{1})(\d{2}).*/, "$1.$2cm");
    } else {
      res.innerHTML = "Digite 3 caracteres Ex. 004";
      window.document.querySelector(".torax").focus();
    }
    return r;
  }
  function maskTorax(target, calback) {
    setTimeout((e) => {
      var x = calback(target.value);
      if (x != target.value) {
        target.value = x;
      }
    }, 1);
  }

  function mcintura(y) {
    var cintura = window.document.querySelector(".cintura");
    var res = window.document.querySelector(".res_formulario");
    var r = y.replace(/\D/g, "");
    r = r.replace(/^0/, "0");
    res.innerHTML = "";

    if (cintura.value === "" || r.length > 2) {
      r = r.replace(/^(\d{1})(\d{2}).*/, "$1.$2cm");
    } else {
      res.innerHTML = "[Error}Digite 3 caracteres Ex. 001";
      window.document.querySelector(".cintura").focus();
    }
    return r;
  }

  function maskCintura(target, calback) {
    setTimeout((e) => {
      var x = calback(target.value);
      if (x != target.value) {
        target.value = x;
      }
    }, 1);
  }

  function mquadril(y) {
    var res = window.document.querySelector(".res_formulario");
    var quadril = window.document.querySelector(".quadril");
    var r = y.replace(/\D/g, "");
    r.replace(/^0/, "0");
    res.innerHTML = "";

    if (quadril.value === "" || r.length > 2) {
      r = r.replace(/^(\d{1})(\d{2}).*/, "$1.$2cm");
    } else {
      res.innerHTML = "[erro] quadril";
      window.document.querySelector(".quadril").focus();
    }

    return r;
  }
  function maskQuadril(target, calback) {
    setTimeout((e) => {
      var x = calback(target.value);
      if (x != target.value) {
        target.value = x;
      }
    }, 1);
  }

  function mcumprimento(y) {
    var res = window.document.querySelector(".res_formulario");
    var cumprimento = window.document.querySelector(".cumprimento");
    var r = y.replace(/\D/g, "");
    r.replace(/^0/, "0");
    res.innerHTML = "";

    if (cumprimento.value === "" || r.length > 2) {
      r = r.replace(/^(\d{1})(\d{2}).*/, "$1.$2cm");
    } else {
      res.innerHTML = "[ erro ] 7";
      window.document.querySelector(".cumprimento").focus();
    }
    return r;
  }

  function maskCumprimento(target, calback) {
    setTimeout((e) => {
      var x = calback(target.value);
      if (x != target.value) {
        target.value = x;
      }
    }, 1);
  }

  function mpunho(y) {
    var res = window.document.querySelector(".res_formulario");
    var punho = window.document.querySelector(".punho");
    var r = y.replace(/\D/g, "");
    r.replace(/^0/, "0");
    res.innerHTML = "";

    if (r.length > 2) {
      r = r.replace(/^(\d{1})(\d{2}).*/, "$1.$2cm");
    } else {
      res.innerHTML = "[erro] Ex. 002";
      window.document.querySelector(".punho").focus();
    }
    return r;
  }

  function maskPunho(target, calback) {
    setTimeout((e) => {
      var x = calback(target.value);
      if (x != target.value) {
        target.value = x;
      }
    }, 1);
  }

  // -------------------------------------------------------------

  function TrocarColar() {
    document.querySelector("#figura").src = Douglas;
  }

  function TrocarPala() {
    document.getElementById("figura").src = Ingles;
  }

  function TrocarManga() {
    document.getElementById("figura").src = Italy;
  }

  function TrocarTorax() {
    document.getElementById("figura").src = Italiano;
  }

  function TrocarCintura() {
    document.getElementById("figura").src = Magalhaes;
  }

  function TrocarWindsor() {
    document.getElementById("figura").src = Windsor;
  }

  function TrocarCumprimento() {
    document.getElementById("figura").src = Paris;
  }

  function TrocarPunho() {
    document.getElementById("figura").src = Monaco;
  }

  return (
    <>
      <section className="containner_form">
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

        <section className="aside_form">
          <h1 className="medidas">Insira suas medidas</h1>

          <section className="envelope_aside">
            <section className="bloco_form">
              <div className="Colar">
                <div className="l_colar">Colar</div>
                <input
                  onKeyUp={TrocarColar}
                  type="text"
                  name="cCol"
                  className="colar"
                  placeholder=" 0.00"
                  autoComplete="off"
                  onBlur={(e) => maskColar(e.target, mcolar)}
                />

                <h3 className="video">vídeo</h3>
              </div>
              <div className="Pala">
                <div className="l_pala">Pala</div>
                <input
                  onKeyUp={TrocarPala}
                  className="pala"
                  type="text"
                  placeholder="0.00"
                  autoComplete="off"
                  onBlur={(e) => maskPala(e.target, mpala)}
                />

                <h3 className="video">vídeo</h3>
              </div>
              <div className="Manga">
                <div className="l_manga">Manga </div>
                <input
                  onKeyUp={TrocarManga}
                  id="manga"
                  className="manga"
                  type="text"
                  placeholder="  0.00"
                  autoComplete="off"
                  onBlur={(e) => maskManga(e.target, mmanga)}
                />
                <h3 className="video">vídeo</h3>
              </div>

              <div className="Torax">
                <div className="l_torax">Tórax</div>

                <input
                  onKeyUp={TrocarTorax}
                  className="torax"
                  type="text"
                  placeholder="  0.00"
                  onBlur={(e) => maskTorax(e.target, mtorax)}
                />
                <h3 className="video">vídeo</h3>
              </div>

              <div className="Cintura">
                <div className="l_cintura">Cintura </div>
                <input
                  onKeyUp={TrocarCintura}
                  className="cintura"
                  type="text"
                  placeholder="  0.00"
                  onBlur={(e) => maskCintura(e.target, mcintura)}
                />
                <h3 className="video">vídeo</h3>
              </div>

              <div className="Quadril">
                <div className="l_quadril">Quadril </div>
                <input
                  onKeyUp={TrocarWindsor}
                  className="quadril"
                  type="text"
                  placeholder="  0.00"
                  onBlur={(e) => maskQuadril(e.target, mquadril)}
                />
                <h3 className="video">vídeo</h3>
              </div>

              <div className="Cumprimento">
                <div className="l_cumprimento"> Cumpr.</div>
                <input
                  onKeyUp={TrocarCumprimento}
                  className="cumprimento"
                  type="text"
                  placeholder="  0.00"
                  onBlur={(e) => maskCumprimento(e.target, mcumprimento)}
                />
                <h3 className="video">vídeo</h3>
              </div>

              <div className="Punho">
                {" "}
                <div className="l_punho">Punho </div>
                <input
                  onKeyup={TrocarPunho}
                  className="punho"
                  type="text"
                  placeholder="  0.00"
                  onBlur={(e) => maskPunho(e.target, mpunho)}
                />
                <h3 className="video">vídeo</h3>
              </div>

              <img className="med_col" id="figura" src={Maniquin}></img>

              <div className="res_formulario"></div>

              <button onClick={Receber} className="booton_form">
                {" "}
                CONTINUAR{" "}
              </button>
            </section>
          </section>
        </section>

        <div className="footer_form">
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
  );
}

export default Formulario;
