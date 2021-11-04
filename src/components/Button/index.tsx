import { HTMLAttributes } from "react";
import style from "./style.module.scss";

type Props = HTMLAttributes<HTMLAnchorElement>;

const Button = ({ ...rest }: Props) => {
  return (
    <a {...rest} className={style.button}>
      {rest.children}
    </a>
  );
};

export default Button;
