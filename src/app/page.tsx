import Image from "next/image";
import styles from "./page.module.scss";
import { Button } from "@/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home!</h1>
      <Button></Button>
    </div>
  );
}
