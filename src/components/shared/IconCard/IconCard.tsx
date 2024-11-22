import { IoIosNotificationsOutline } from "react-icons/io";
import IconCardProps from "./IconCard.types";
import styles from "./IconCard.module.scss";

const IconCard = ({ icon, text }: IconCardProps) => {
  return (
    <div className={styles.container}>
      {/* {icon} */}
      <IoIosNotificationsOutline />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export { IconCard };
