import Link from "next/link";
import scss from "./Footer.module.scss";
import { linksFooter } from "@/constans/links";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          {linksFooter.map((el, index) => (
            <Link key={index} href={el.link}>
              <span>{el.icon}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
