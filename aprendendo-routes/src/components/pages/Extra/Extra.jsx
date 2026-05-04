import styles from './Extra.module.css';

function Extra() {
  return (
    <section className={styles.equipe}>
      <h1>Nossa Equipe</h1>
      <div className={styles.membros}>
        <div className={styles.membro}>
          <div className={styles.fotoPlaceholder}>👤</div>
          <h4>Ana Silva</h4>
          <p>Diretora de Tecnologia</p>
        </div>
        <div className={styles.membro}>
          <div className={styles.fotoPlaceholder}>👤</div>
          <h4>Bruno Costa</h4>
          <p>Professor de React</p>
        </div>
      </div>
    </section>
  );
}
export default Extra;
