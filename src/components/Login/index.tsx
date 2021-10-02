import type { NextPage } from "next";
import style from "./style.module.scss";

const Login: NextPage = () => {
  return (
    <div className={style.container}>
      <img
        className={style.arrow}
        draggable={false}
        src="img/arrow.svg"
        alt="Arrow"
      />
      <div className={style.content}>
        <div className={style.contentLeft}>
          <img src="img/logo.svg" alt="Logo" draggable={false} />
        </div>

        <div className={style.contentRight}>
          <h3 className={style.h3}>Entrar</h3>
          <form className={style.form}>
            <input type="text" placeholder="CPF" />
            <input type="password" placeholder="Senha" />
            <a href="#">Esquceu a senha?</a>
            <button type="submit">Entrar</button>
          </form>
          <span className={style.line}></span>
          <p>
            Novo por aqui? <a href="#">Criar conta</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
