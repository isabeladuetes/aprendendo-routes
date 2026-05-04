import Card from '../../components/Card/Card';
import styles from './Home.module.css';

function Home() {
  const destaques = [
    { id: 1, t: "Qualidade", d: "Melhores serviços do mercado." },
    { id: 2, t: "Preço", d: "Valores que cabem no seu bolso." },
    { id: 3, t: "Suporte", d: "Atendimento 24 horas por dia." }
  ];

  return (
    <section className={styles.homeContainer}>
      <h1>Bem-vindo à TechSchool</h1>
      <p>Transformando o futuro através da educação tecnológica.</p>
      <div className={styles.grid}>
        {destaques.map(item => (
          <Card key={item.id} titulo={item.t} descricao={item.d} />
        ))}
      </div>
    </section>
  );
}
export default Home;
