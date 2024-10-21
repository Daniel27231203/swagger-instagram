"use client";
import { useGetMeQuery } from "@/redux/api/auth";
import scss from "./Welcom.module.scss";

const Welcom = () => {
  const { data } = useGetMeQuery();
  console.log("🚀 ~ Welcom ~ data:", data);
  return (
    <section className={scss.Welcom}>
      <div className="container">
        <div className={scss.content}>
          <img
            width={100}
            height={100}
            src={data?.profile.photo!}
            alt="daniel"
          />
          <h1>{data?.profile.email}</h1>
        </div>
      </div>
    </section>
  );
};

export default Welcom;
