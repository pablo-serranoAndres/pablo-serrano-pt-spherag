import CardProps from "./Card.types";
import styles from "./Card.module.scss";

const Card = ({ title, subtitle, children }: CardProps) => {
  const type = children ? "variant" : "container";

  return (
    <div className={styles[`card__${type}`]}>
      {children && children}
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  );
};

export { Card };
