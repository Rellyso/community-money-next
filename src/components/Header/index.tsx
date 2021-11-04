import { NextPage } from "next";
import Image from 'next/image';
import { Link } from "components/Link";
import { BsSearch } from 'react-icons/bs'

import styles from './styles.module.scss';
import { logoExtended } from '../../img';

export const Header: NextPage = () => {
  return (
    <header className={styles.headerWrapper}>
      <span className={styles.line} />

      <div className={styles.content}>
        <div className={styles.logo}>
          <Image
            src={logoExtended}
          />
        </div>

        <ul className={styles.menu}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/">
              Vaquinhas
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Equipe</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Agradecimentos</a>
            </Link>
          </li>
        </ul>

        <div className={styles.search}>
          {/* <input type="text" /> */}
          <button>
            <BsSearch size="20" />
          </button>
        </div>

        <div className={styles.loginContent}>
          <Link href="/login" className={styles.logIn}>
            Entrar
          </Link>

          <Link href="/login" className={styles.signIn}>
            Cadastre-se
          </Link>
        </div>
      </div>
    </header>
  )
}