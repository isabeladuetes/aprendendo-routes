import styles from './Contato.module.css';

function Contato() {
  return (
    <div className={styles.contatoContainer}>
      <h2>Entre em Contato</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <textarea placeholder="Sua mensagem"></textarea>
        <button type="button">Enviar</button>
      </form>
    </div>
  );
}
export default Contato;
