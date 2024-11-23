"use client";

import Image from "next/image";
import Link from "next/link";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuComputer } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { GiPositionMarker } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { Input, IconCard, Drawer } from "@/components";
import styles from "./BorderMenu.module.scss";
import { useState } from "react";

const BorderMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <div className={styles.topMenu}>
        <div className={styles.topMenu__inputContainer}>
          <RxHamburgerMenu size={40} onClick={() => setOpen(!open)} />
          <Input
            type="select"
            label="Mi finca..."
            options={["Finca 1", "Finca 2", "Finca 3"]}
          />
        </div>
        <div className={styles.topMenu__iconsContainer}>
          <div>
            {" "}
            <IconCard text={""} variant={"noti"} />
          </div>
          <div>
            {" "}
            <IconCard text={""} variant={"info"} />
          </div>
          <div>
            {" "}
            <IconCard
              text={"federico.front.test@spherag.com"}
              variant={"user"}
            />
          </div>
        </div>
      </div>
      <Drawer
        isOpen={open}
        children={
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
        }
        onClose={() => setOpen(false)}
      ></Drawer>
    </div>
  );
};

export { BorderMenu };
