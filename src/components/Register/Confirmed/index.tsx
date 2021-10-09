import { NextPage } from "next";
import style from "./style.module.scss";

const Confirmed: NextPage = () => {
  return (
    <div className={style.container}>
      <span>Logo</span>
      <p>Parabéns! Você acaba de criar sua conta!</p>
      <img src="../../img/clapping.svg" alt="Batida de palmas" />
      <p>Explorar o Community Money!</p>
      <img src="../../img/arrow-left.svg" alt="Flecha direcionada a esquerda" />
    </div>
  );
};

export default Confirmed;
