"use client";
import { useGetMeQuery } from "@/redux/api/auth";
import scss from "./Welcom.module.scss";

const Welcom = () => {
  return (
    <section className={scss.Welcom}>
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </section>
  );
};

export default Welcom;
