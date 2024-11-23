import {
  IoIosNotificationsOutline,
  IoIosInformationCircleOutline,
  FaRegUserCircle,
  FaSignal,
  FaBatteryFull,
  IoChevronBack,
} from "./assets/icons";
import { IconCardProps, IconProps } from "./IconCard.types";
import styles from "./IconCard.module.scss";

const Icon = ({ icon = "user", size, color }: IconProps) => {
  const iconMap: {
    [key in
      | "user"
      | "noti"
      | "info"
      | "battery"
      | "signal"
      | "back"]: JSX.Element;
  } = {
    info: <IoIosInformationCircleOutline color={color} size={size} />,
    noti: <IoIosNotificationsOutline color={color} size={size} />,
    user: <FaRegUserCircle color={color} size={size} />,
    signal: <FaSignal color={color} size={size} />,
    battery: <FaBatteryFull color={color} size={size} />,
    back: <IoChevronBack color={color} size={size} />,
  };

  return iconMap[icon] || null;
};

const IconCard = ({ variant, text, icon, color, size }: IconCardProps) => {
  return (
    <div className={styles[`container__${variant}`]}>
      {icon && <Icon icon={icon} color={color} size={size} />}
      {text && (
        <span className={styles[`container__${variant}__text`]}>{text}</span>
      )}
    </div>
  );
};

export { IconCard };
