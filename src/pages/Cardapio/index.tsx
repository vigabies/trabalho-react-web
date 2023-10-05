import styles from "./Cardapio.module.scss";
import Logo from "assets/logo.png";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";
import Mario from "assets/mario.png";

export function Cardapio() {
  const [busca, setBusca] = useState("");
  return (
    <main>
      <nav className={styles.menu}>
        <img src={Logo} alt="Logo" />
        <Buscador busca={busca} setBusca={setBusca} />
      </nav>

      <div className={styles.textos}>
        <img src={Mario} alt="Mario" className={styles.img} />
        <div className={styles.text}>"Traveling is experiencing new cultures with an open mind"</div>
      </div>

      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Options</h3>
        <div className={styles.cardapio__filtros}>
          <Filtros />
        </div>
      </section>
    </main>
  );
}
