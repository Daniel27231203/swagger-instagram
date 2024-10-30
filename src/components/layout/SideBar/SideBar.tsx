"use client";
import { FC, useState } from "react";
import scss from "./SideBar.module.scss";
import Link from "next/link";
import { links } from "@/constans/links";
import { IoIosMenu } from "react-icons/io";
import { FaBookOpenReader } from "react-icons/fa6";
import logo from "../../../assets/logo2.png";
import Image from "next/image";
import SideBarUi from "@/components/ui/SideBarUi";

const SideBar: FC = () => {
  const [sideBarMenu, setSideBarMenu] = useState(false);

  return (
    <section className={scss.SideBar}>
      <div className={scss.content}>
        <div className={scss.logo}>
          <Image src={logo} alt="logo" />
          <h3>Instagram</h3>
        </div>
        <nav>
          {links.map((el, index) => (
            <div key={index} className={scss.navBox}>
              <Link href={el.link}>
                <span>{el.icon}</span>
              </Link>
              <Link className={scss.link} href={el.link}>
                {el.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className={scss.down}>
          <div className={scss.navBox}>
            <Link href={"/the-reads"}>
              <span>
                <FaBookOpenReader />
              </span>
            </Link>

            <Link className={scss.link} href={"/the-reads"}>
              Threads
            </Link>
          </div>
          <div
            className={scss.another}
            onClick={() => setSideBarMenu(!sideBarMenu)}
          >
            <span>
              <IoIosMenu />
            </span>
            <h4>Ещё</h4>
          </div>
          {sideBarMenu ? (
            <div className={scss.menu}>
              <SideBarUi />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
