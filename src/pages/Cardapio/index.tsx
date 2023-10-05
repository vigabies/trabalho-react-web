import styles from "./Cardapio.module.scss";
import Logo from "assets/logo.png";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";
import Aviao from "assets/aviao.jpg";

export function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState <number | null>(null);

  return (
    <main>
      <nav className={styles.menu}>
        <img src={Logo} alt="Logo" />
        <Buscador busca={busca} setBusca={setBusca} />
      </nav>

      <div className={styles.textos}>
        <img src={Aviao} alt="Aviao" className={styles.img} />
        <div className={styles.text}>"Traveling is experiencing new cultures with an open mind"</div>
      </div>

      <section className={styles.cardapio}>
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro}/>
        </div>
      </section>
    </main>
  );
}
