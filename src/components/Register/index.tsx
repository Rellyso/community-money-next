import { NextPage } from "next";
import style from "./style.module.scss";
import Input from "components/Input";

const Register: NextPage = () => {
  return (
    <div className={style.container}>
      <img
        className={style.arrow}
        draggable={false}
        src="../img/arrow.svg"
        alt="Arrow"
      />
      <div className={style.content}>
        <div className={style.contentLeft}>
          <img src="../img/image.svg" alt="Imagem de crianças jogando" />
        </div>
        <div className={style.contentRight}>
          <img src="../img/logo2.svg" alt="Segunda logo" />
          <div className={style.info}>
            <p>
              <strong>Cadatre-se</strong>
            </p>
            <p>Preencha os campos abaixo</p>
            <p>Seus dados estão seguros no Community Money</p>
          </div>
          <form className={style.form}>
            <Input type="text" placeholder="Seu nome" />
            <Input type="text" placeholder="CPF"/>
            <Input type="email" placeholder="Email"/>
            <Input type="date" placeholder="Data de Nascimento" style={{ padding: '0 1rem 0 1rem' }}/>
            <Input type="password" placeholder="Senha"/>
            <Input type="password" placeholder="Digite a senha novamente"/>
          </form>
          <div className={style.terms}>
            <label htmlFor="">
              <Input type="checkbox" />
              Concordo com os termos de privacidade
            </label>
            <label htmlFor="">
              <Input type="checkbox" />
              Você concordaria em deixar sua imagem pública para que outras
              pessoas possam visualizar
            </label>
          </div>
          <button className={style.submit} type="submit">Finalizar cadastro</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
