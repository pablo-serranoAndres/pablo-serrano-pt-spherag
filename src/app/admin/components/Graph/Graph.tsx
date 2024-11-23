import GraphProps from "./Graph.types";
import styles from "./Graph.module.scss";

const Graph = ({ title }: GraphProps) => {
  return (
    <div className={styles.container}>
      <h1>Gráfico!</h1>
    </div>
  );
};
export { Graph };
