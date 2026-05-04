import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section className={styles.container}>
      <h1>Sobre Nós</h1>
      <p className={styles.descricao}>
        Somos uma escola focada em transformar carreiras através da tecnologia.
      </p>
      
      <div className={styles.mvvGrid}>
        <div className={styles.item}>
          <h3>🚀 Missão</h3>
          <p>Ensinar programação de forma prática e acessível.</p>
        </div>
        <div className={styles.item}>
          <h3>👁️ Visão</h3>
          <p>Ser a maior referência em ensino de React no Brasil.</p>
        </div>
        <div className={styles.item}>
          <h3>💎 Valores</h3>
          <p>Inovação, ética, persistência e foco no aluno.</p>
        </div>
      </div>
    </section>
  );
}
export default Sobre;
