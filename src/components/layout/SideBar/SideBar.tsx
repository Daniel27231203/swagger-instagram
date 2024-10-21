import { FC } from "react";
import scss from "./SideBar.module.scss";
import Link from "next/link";
import links from "@/constans/links";
import { IoIosMenu } from "react-icons/io";
import { FaBookOpenReader } from "react-icons/fa6";
import logo from "../../../assets/logo2.png";
import Image from "next/image";

const SideBar: FC = () => {
  return (
    <section className={scss.SideBar}>
      <div className={scss.content}>
        <div className={scss.logo}>
          <Image src={logo} alt="logo" />
          <h3>Instagram</h3>
        </div>
        <nav>
          {links.map((el) => (
            <div className={scss.navBox}>
              <span>{el.icon}</span>
              <Link href={el.link}>{el.name}</Link>
            </div>
          ))}
        </nav>
        <div className={scss.down}>
          <div className={scss.navBox}>
            <FaBookOpenReader />

            <Link href={"/the-reads"}>Threads</Link>
          </div>
          <div className={scss.another}>
            <IoIosMenu />
            <h4>Ещё</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
