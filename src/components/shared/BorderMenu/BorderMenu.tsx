import Image from "next/image";
import Link from "next/link";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuComputer } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { GiPositionMarker } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Input, IconCard } from "@/components";
import styles from "./BorderMenu.module.scss";

const BorderMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topMenu}>
        <div className={styles.topMenu__inputContainer}>
          <RxHamburgerMenu size={30} />
          <Input type="select" label="Seleccionar finca..."></Input>
        </div>
        <div className={styles.topMenu__inputContainer}>
          <div>
            {" "}
            <IconCard
              text={""}
              icon={<IoIosNotificationsOutline size={30} />}
            ></IconCard>
          </div>
        </div>
      </div>
      <div className={styles.lateralMenu}>
        <Image
          src={"/images/logoMin.png"}
          alt={""}
          width={50}
          height={50}
        ></Image>
        <ul>
          <li>
            <Link href={""}>
              {" "}
              <HiMiniSquares2X2 size={30} />
            </Link>
          </li>
          <li>
            <Link href={""}>
              {" "}
              <FaRegCalendarAlt size={30} />
            </Link>
          </li>{" "}
          <li>
            <Link href={""}>
              {" "}
              <LuComputer size={30} />
            </Link>
          </li>{" "}
          <li>
            <Link href={""}>
              {" "}
              <CiClock2 size={30} />
            </Link>
          </li>{" "}
          <li>
            <Link href={""}>
              {" "}
              <GiPositionMarker size={30} />
            </Link>
          </li>{" "}
          <li>
            <Link href={""}>
              {" "}
              <IoSettingsOutline size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { BorderMenu };
