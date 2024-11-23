import HeaderProps from "./Header.types";
import { IconCard } from "@/components";
import { CiLocationOn } from "react-icons/ci";
import { capitalize } from "@/utils/utils";
import styles from "./Header.module.scss";

const Header = ({ accountantName, url }: HeaderProps) => {
  const breadscrumbs = url.split("/");
  return (
    <div className={styles.header}>
      <IconCard variant={"bgblue"} icon="back" color="#333d78" size={25} />
      <div className={styles.data}>
        <span>{accountantName}</span>
        <div className={styles.data__breadscrums}>
          <CiLocationOn size={10} color="#333d78" />
          {breadscrumbs.slice(3).map((segment, index) => (
            <>
              <span key={index}> {capitalize(segment)}</span>
              {index + 1 < breadscrumbs.slice(3).length && <span>{">"}</span>}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Header };
