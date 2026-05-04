// Imports aqui
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.errorWrapper}>
      <h1>404 ❌</h1>
      <p>Opa! Essa página não existe.</p>
      {/* Editaremos aqui */}
    </div>
  );
}
export default NotFound;
