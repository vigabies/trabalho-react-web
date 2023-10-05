import styles from "./Filtros.module.scss";
import filtros from "./filtros.json";

type IOpcao = typeof filtros[0];
interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({filtro, setFiltro}: Props) {
  function selecionarFiltro(opcao: IOpcao) {
      return setFiltro(opcao.id)
  }
  return (
    <div className={styles.filtro}>
      {filtros.map((opcao) => (
        <button className={styles.filtro__filtro} key={opcao.id}>
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
