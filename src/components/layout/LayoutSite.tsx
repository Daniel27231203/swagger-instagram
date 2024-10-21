"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import scss from "./LayoutSite.module.scss";
import { usePathname } from "next/navigation";
import ReduxProvider from "@/providers/ReduxProvider";
import SideBar from "./SideBar/SideBar";

interface LayoutProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutProps> = ({ children }) => {
  const [isAuthPage, setIsAuthPage] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsAuthPage(pathName === "/sing-in" || pathName === "/sing-up");
  }, [pathName]);

  return (
    <ReduxProvider>
      <div className={scss.side}>
        <SideBar />
        <div className={scss.LayoutSite}>
          {!isAuthPage && <Header />}

          <main>{children}</main>
          {!isAuthPage && <Footer />}
        </div>
      </div>
    </ReduxProvider>
  );
};

export default LayoutSite;