import { Card, IconCard } from "@/components";
import { BorderMenu, Header } from "./components";
import styles from "./page.module.scss";

const AdminPage = () => {
  const example = "https://example.com/path1/path2/path3/path4";
  return (
    <div className={styles.container}>
      <BorderMenu />
      <div className={styles.content}>
        <div className={styles.admin}>
          <Header accountantName="Nombre del contador" url={example} />

          <div className={styles.admin__cards}>
            <Card title={"500m3/h"} subtitle={"Caudal instantaneo"} />
            <Card title={"500m3/h"} subtitle={"Caudal instantaneo"} />
            <Card title={"500m3/h"} subtitle={"Caudal instantaneo"} />
            <Card title={"500m3/h"} subtitle={"Caudal instantaneo"} />
            <Card
              title={"500m3/h"}
              subtitle={"Caudal instantaneo"}
              children={
                <div className={styles.hardware}>
                  <IconCard
                    variant={"green"}
                    color={"#35a086"}
                    size={20}
                    text="Tiempo real"
                  />
                  <div className={styles.hardware__status}>
                    <IconCard
                      variant={"green"}
                      color={"#35a086"}
                      size={20}
                      icon="battery"
                      text="95%"
                    />
                    <IconCard
                      variant={"green"}
                      color={"#35a086"}
                      size={20}
                      icon="signal"
                    />
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
