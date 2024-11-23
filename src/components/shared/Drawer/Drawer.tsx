import { ReactNode } from "react";
import styles from "./Drawer.module.scss";
import DrawerProps from "./Drawer.types";

const Drawer = ({ children, isOpen, onClose }: DrawerProps) => {
  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
        onClick={onClose}
      ></div>

      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
        <button className={styles.closeButton} onClick={() => onClose}>
          ✕
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export { Drawer };
