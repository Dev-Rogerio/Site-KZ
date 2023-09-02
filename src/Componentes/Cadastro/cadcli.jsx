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

function Cadcli(show, setShow) {
  const limparNome = () => {
    var nome = window.document.querySelector(".nome");
    var res = window.document.querySelector(".res_cli");

    res.innerHTML = "";

    if (nome.value === "" || nome.value.length <= 3) {
      res.innerHTML = "[ Error ] Campo nome";
      window.document.querySelector(".nome").focus();
    }
  };

  const limparSnome = () => {
    var snome = window.document.querySelector(".snome");
    var res = window.document.querySelector(".res_cli");

    res.innerHTML = "";

    if (snome.value === "" || snome.value.length <= 7) {
      res.innerHTML = " [ error ] Campo sobre nome";
      window.document.querySelector(".snome").focus();
    }
  };

  const limparEmail = () => {
    function validarEmail(index) {
      const isValid = index.includes("@") && index.includes(".com");
      return isValid;
    }
    var email = window.document.querySelector(".email");
    var res = window.document.querySelector(".res_cli");

    res.innerHTML = "";

    if (!validarEmail(email.value) || email.value.length < 7) {
      res.innerHTML = " [ error ] Campo e-mail";
      window.document.querySelector(".email").focus();
    }
  };

  function mphone(v) {
    var cel = window.document.querySelector(".cel");
    var res = window.document.querySelector(".res_cli");
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    res.innerHTML = "";

    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else if (r.value) {
      r = r.replace(/^(\d*)/, "($1");
    } else if (r.value.length <= 10) {
      res.innerHTML = "telefone inválido";
      window.document.querySelector(".cel").focus();
    }
    return r;
  }

  function mask(target, callback) {
    setTimeout(() => {
      var v = callback(target.value);
      if (v != target.value) {
        target.value = v;
      }
    }, 1);
  }

  function mdate(v) {
    var res = window.document.querySelector(".res_cli");
    var date = window.document.querySelector(".data");
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "0");
    res.innerHTML = "";
    if (date.value === "" || r.length > 7) {
      r = r.replace(/^(\d{2})(\d{2})(\d{4}).*/, "$1/$2/$3");
    } else {
      res.innerHTML = "Data inválida";
      window.document.querySelector(".data").focus();
    }
    return r;
  }
  function mask2(target, calback) {
    setTimeout(() => {
      var y = calback(target.value);
      if (y != target.value) {
        target.value = y;
      }
    }, 1);
  }

  function preencherCampos(apiViacep) {
    // console.log(endereco);
    const end = document.querySelector(".end");
    const bairro = document.querySelector(".bairro");
    const cid = document.querySelector(".cid");
    const est = document.querySelector(".est");
    end.value = apiViacep.logradouro;
    bairro.value = apiViacep.bairro;
    cid.value = apiViacep.localidade;
    est.value = apiViacep.uf;
    var num = document.querySelector(".num");
    num.focus();
  }

  function mcep(v) {
    var res = window.document.querySelector(".res_cli");
    var cep = window.document.querySelector(".cep");
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "0");
    res.innerHTML = "";
    if (r.length > 7) {
      r = r.replace(/^(\d{5})(\d{3}).*/, "$1-$2");

      const url = `https://viacep.com.br/ws/${r.replace("-", "")}/json`;
      fetch(url).then((resposta) => {
        resposta.json().then((apiViacep) => {
          preencherCampos(apiViacep);
        });
      });
    }
    return r;
  }

  function mask3(target, calback) {
    setTimeout(() => {
      var v = calback(target.value);
      if (v != target.value) {
        target.value = v;
      }
    }, 0);
  }
  const limparCel = () => {
    var cel = window.document.querySelector(".cel");
    var res = window.document.querySelector(".res_cli");
    res.innerHTML = "";

    if (cel.value === "" || cel.value.length <= 14) {
      res.innerHTML = "[ Error ] Campo celular";
      window.document.querySelector(".cel").focus();
    }
  };
  function handlePhone() {
    var cel = window.document.querySelector(".cel");
    if (cel.value.length !== 11) {
      var res = window.document.querySelector(".res_cli");
      res.innerHTML = "[Tel. incorreto]";
    }
  }

  function cadcli(e) {
    var nome = window.document.querySelector(".nome");
    var snome = window.document.querySelector(".snome");
    var email = window.document.querySelector(".email");
    var cel = window.document.querySelector(".cel");
    var data = window.document.querySelector(".data");
    var cep = window.document.querySelector(".cep");
    var end = window.document.querySelector(".end");
    var num = window.document.querySelector(".num");
    var comp = window.document.querySelector(".comp");
    var bairro = window.document.querySelector(".bairro");
    var cid = window.document.querySelector(".cid");
    var est = window.document.querySelector(".est");
    var res = window.document.querySelector(".res_cli");

    // function validarNome(nome) {
    //   const isNome = nome.includes('i') && nome.includes('e')
    //   return isNome;
    // }

    // ====================email.indexOOf('@')==============================================

    function validarEmail(email) {
      const isValid = email.includes("@") && email.includes(".");

      // const  isValid = email.length >=5 && email.length <=12;
      return isValid;
    }

    if (nome.value === "" || nome.value.length <= 2) {
      res.innerHTML = "Preencher todos os campos";
      document.querySelector(".nome").focus();
    } else if (snome.value === "") {
      res.innerHTML = "Informe seu sobrenome";
      res.setAttribute("style", "display", "block");
      document.querySelector(".snome").focus();
    } else if (email.value === "") {
      res.innerHTML = "Informe seu e-mail";
      res.setAttribute("style", "display", "block");
      document.querySelector(".email").focus();
    } else if (!validarEmail(email.value)) {
      res.innerHTML = "[ ERROR ] O formato é diferente!";
      res.setAttribute("style", "display", "block");
      document.querySelector(".email").focus();
    } else if (cel.value === "") {
      res.textContent = "Informe seu celular";
      res.setAttribute("style", "display", "block");
      document.querySelector(".cel").focus();
    } else if (data.value == "") {
      res.innerHTML = "informe seu aniversário";
      document.querySelector(".data").focus();
      // }
      //  else if (cep.value == "") {
      //   // var padrao = /\d{5}-\d{3}/gi;
      //   res.innerHTML = "informe o cep";
      //   document.querySelector(".cep").focus();
      // } else if (end.value == "") {
      //   res.innerHTML = "informe o endereço";
      //   document.querySelector(".end").focus();
      // } else if (num.value == "") {
      //   res.innerHTML = "informe o numero da residencia";
      //   document.querySelector(".num").focus();
      // } else if (bairro.value == "") {
      //   res.innerHTML = "Informe seu bairro";
      //   document.querySelector(".bairro").focus();
      // } else if (cid.value == "") {
      //   res.innerHTML = "Informe sua cidade";
      //   document.querySelector(".cid").focus();
      // } else if (est.value == "") {
      //   res.innerHTML = "Qual o estado";
      //   document.querySelector(".est").focus();
    } else {
      window.location.href = "http://localhost:3000/formulario";
      document.querySelector(".none").value = "";
    }

    //   email.addEventListener('keyup', () => {
    //     if(validarEmail(email.value) === true) {
    //     res.innerHTML =  "[error]"
    //     } else {

    //       res.textContent = "";
  }
  const limpaNumero = () => {
    var num = window.document.querySelector(".num");
    var res = window.document.querySelector(".res_cli");

    res.innerHTML = "";

    if (num.value === "") {
      res.innerHTML = "Preencher um numero válido";
      document.querySelector(".num").focus();
    }
  };
  const limpaComplemento = () => {
    var comp = window.document.querySelector(".comp");

    if (comp.value === "" || comp.value.length >= 0) {
      window.document.querySelector(".button_continuar").focus();
    }
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
        </div>

        <section className="secaopai">
          <div className="direcionamento">Entre com seus dados</div>
          <div className="secaofilho">
            <div className="lado-cliente">
              <div className="dadoscliente">Dados Pessoais</div>
              <label className="l_nome">nome:</label>
              <input
                type="text"
                className="nome capitalize"
                placeholder=" nome"
                onBlur={limparNome}
              />

              <label className="l_snome">sobre nome:</label>
              <input
                type="text"
                className="snome capitalize"
                placeholder=" sobre nome"
                onBlur={limparSnome}
              />

              <label className="l_email">e-mail:</label>
              <input
                type="text"
                pattern="[@-.-com]"
                className="email"
                placeholder=" e-mail"
                onBlur={limparEmail}
              />

              <label className="l_cel">celular:</label>
              <input
                type="text"
                className="cel"
                placeholder=" (xx) xxxxx-xxxx"
                onKeyUp={(e) => mask(e.target, mphone)}
                onBlur={limparCel}
              />

              <label className="l_data">aniversário:</label>
              <input
                type="text"
                className="data"
                placeholder=" dia / mês"
                onBlur={(e) => mask2(e.target, mdate)}
                //  onKeyUp={(e) => mask2(e.target, mdate)}
              />
            </div>

            <div className="lado-endereco">
              <div className="dadosendereco">Dados Res./Com.</div>
              <label className="l_cep">cep:</label>
              <input
                type="text"
                className="cep capitalize"
                placeholder="cep"
                onBlur={(e) => mask3(e.target, mcep)}
              />

              <label className="l_end">endereço:</label>
              <input
                type="text"
                className="end capitalize"
                placeholder="endereço"
              />

              <label className="l_num">num.:</label>
              <input
                type="text"
                className="num"
                placeholder=" n."
                onBlur={limpaNumero}
              />

              <label className="l_comp">compl.:</label>

              <input
                type="text"
                className="comp"
                placeholder=" apto"
                onBlur={limpaComplemento}
              />

              <label className="l_bairro">bairro:</label>
              <input
                type="text"
                className="bairro capitalize"
                placeholder=" bairro"
              />
              <label className="l_cid">cidade:</label>
              <input
                type="text"
                className="cid capitalize"
                placeholder=" cidade"
              />
              <label className="l_est">uf:</label>
              <input type="text" className="est capitalize" placeholder=" UF" />
            </div>
          </div>

          <div className="resposta">
            <div className="res_cli"></div>
            <button className="button_continuar" onClick={cadcli}>
              CONTINUAR
            </button>
          </div>
        </section>

        {/* pattern="\([0-9]{2}\)[9]{1}-[0-9]{3}-[0-9]{4} " */}

        <div className="footer_cadcli">
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
export default Cadcli;
