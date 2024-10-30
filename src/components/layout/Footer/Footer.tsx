import Link from "next/link";
import scss from "./Footer.module.scss";
import { linksFooter } from "@/constans/links";
import { useGetMeQuery } from "@/redux/api/auth";

const Footer = () => {
  const { data } = useGetMeQuery();
  return data ? (
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
  ) : null;
};

export default Footer;
