import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

import IconCardProps from "./IconCard.types";
import styles from "./IconCard.module.scss";

const IconCard = ({ variant, text }: IconCardProps) => {
  switch (variant) {
    case "info":
      return (
        <div className={styles.container}>
          <IoIosInformationCircleOutline color="#333d78" size={20} />
          {text && <span className={styles.text}>{text}</span>}{" "}
        </div>
      );
    case "noti":
      return (
        <div className={styles.container}>
          <IoIosNotificationsOutline color="#333d78" size={20} />
          {text && <span className={styles.text}>{text}</span>}
        </div>
      );
    case "user":
      return (
        <div className={styles.container}>
          <FaRegUserCircle color="#333d78" size={20} />
          {text && <span className={styles.text}>{text}</span>}
        </div>
      );

    default:
      break;
  }
};

export { IconCard };
