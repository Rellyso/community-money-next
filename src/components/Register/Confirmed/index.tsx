import { NextPage } from "next";
import style from "./style.module.scss";

const Confirmed: NextPage = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <img src="../../img/logo2.svg" alt="Segunda logo" draggable="false" />
        <p>Parabéns! Você acaba de criar sua conta!</p>
        <img
          src="../../img/clapping.svg"
          alt="Batida de palmas"
          draggable="false"
        />
        <p>Explorar o Community Money!</p>
        <img
          src="../../img/arrow-left.svg"
          alt="Flecha direcionada a esquerda"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default Confirmed;
