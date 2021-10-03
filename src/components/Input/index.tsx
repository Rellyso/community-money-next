import { NextPage } from "next";
import { InputHTMLAttributes } from "react";
import style from "./style.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: NextPage<InputProps> = (props) => {
  return <input className={style.input} {...props} />;
};

export default Input;
