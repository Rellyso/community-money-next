import Input from "components/Input";
import type { NextPage } from "next";
import style from "./style.module.scss";
import Image from "next/image";
import {
  minLogo,
  logoUfersa,
  linkedin,
  twitter,
  youtube,
  instagram,
  arrowSend
} from "./img";

const Footer: NextPage = () => {
  return (
    <div className={style.container}>
      <div className={style.contentLogo}>
        <Image
          src={minLogo}
          draggable={false}
          alt="Mini logo da Commnunity Money"
        />
        <Image src={logoUfersa} draggable={false} alt="Logo da ufersa" />
      </div>
      <div className={style.contentInfo}>
        <div className={style.contentLeft}>
          <p>Quem somos?</p>
          <p>Dúvidas frequentes</p>
          <p>Políticas de privacidade</p>
        </div>
        <div className={style.contentRight}>
          <p>Siga nossas redes sociais</p>
          <div className={style.socialNetworks}>
            <Image src={linkedin} alt="Logo do Linkedin" />
            <Image src={twitter} alt="Logo do Twitter" />
            <Image src={youtube} alt="Logo do Youtube" />
            <Image src={instagram} alt="Logo do Instagram" />
          </div>
          <p>Grupo DevelopersAvengersWEB</p>
        </div>
      </div>
      <div className={style.contentInput}>
        <Input placeholder="Email@example.com" />
        <div className="input-group">
          <Input placeholder="Por favor resuma porque entrar em contato" />
          <div className={`${style.groupInput} input-group-append `}>
            <button className="btn btn-outline-secondary" type="button">
              <Image
                width={23}
                height={27}
                className={style.arrowButton}
                src={arrowSend}
                alt="Flecha de envio"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
