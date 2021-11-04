import styles from './style.module.scss';

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1>Bem vindo ao Community Money!</h1>
        <p>A sua contribuição pode ajudar vários a se reerguer. Um pouco para você pode parecer muito para alguém!</p>

        <a href="#">Mudar uma história</a>
      </div>
    </div>
  )
}