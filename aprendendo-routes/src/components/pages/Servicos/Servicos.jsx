import styles from './Servicos.module.css';

function Servicos() {
  const listaServicos = [
    { id: 1, nome: "Desenvolvimento Web", desc: "Criação de sites modernos e rápidos." },
    { id: 2, nome: "Apps Mobile", desc: "Aplicativos para Android e iOS." },
    { id: 3, nome: "UI/UX Design", desc: "Interfaces focadas na experiência do usuário." },
    { id: 4, nome: "Consultoria Tech", desc: "Ajudamos sua empresa a crescer com tecnologia." }
  ];

  return (
    <section>
      <h1>Nossos Serviços</h1>
      <div className={styles.lista}>
        {listaServicos.map(s => (
          <div key={s.id} className={styles.servicoCard}>
            <h3>{s.nome}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Servicos;
