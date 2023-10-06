import styles from "./Cardapio.module.scss";
import Logo from "assets/logo.png";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";
import Aviao from "assets/aviao.jpg";

export function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);

  return (
    <main>
      <nav className={styles.menu}>
        <img src={Logo} alt="Logo" />
        <Buscador busca={busca} setBusca={setBusca} />
      </nav>

      <section className={styles.cardapio}>
        <div className={styles.cardapio__textos}>
          <img src={Aviao} alt="Aviao" className={styles.cardapio__textos__img} />
          <h1 className={styles.cardapio__textos__frase}>
            Traveling is experiencing new cultures with an open mind!
          </h1>
        </div>

        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
        </div>
      </section>
    </main>
  );
}
