"use client";
import scss from "./Header.module.scss";
import Image from "next/image";
import user1 from "../../../assets/user1.jpeg";
import user2 from "../../../assets/user2.webp";
import user3 from "../../../assets/user3.jpeg";
import user4 from "../../../assets/user4.jpeg";
import user5 from "../../../assets/user5.jpg";
import user6 from "../../../assets/user7.jpg";
import user7 from "../../../assets/user6.jpg";
import user8 from "../../../assets/user8.jpg";
import user9 from "../../../assets/user9.webp";
import user10 from "../../../assets/user10.jpeg";
import user11 from "../../../assets/user11.jpeg";
import user12 from "../../../assets/user12.jpg";
import user13 from "../../../assets/user13.jpeg";
import user14 from "../../../assets/user14.jpeg";
import user15 from "../../../assets/user15.jpg";
import user16 from "../../../assets/user16.jpeg";
import { useGetMeQuery } from "@/redux/api/auth";

const Header = () => {
  const historyProfile = [
    {
      profileImage: user1,
      name: "aisha.k",
      status: true,
    },
    {
      profileImage: user2,
      name: "daniel_muh",
      status: true,
    },
    {
      profileImage: user3,
      name: "bek_98",
      status: true,
    },
    {
      profileImage: user4,
      name: "aliya.zhan",
      status: true,
    },
    {
      profileImage: user5,
      name: "temir.007",
      status: true,
    },
    {
      profileImage: user6,
      name: "amina_kz",
      status: true,
    },
    {
      profileImage: user7,
      name: "rakhimov_23",
      status: true,
    },
    {
      profileImage: user8,
      name: "zhanel.b",
      status: true,
    },
    {
      profileImage: user9,
      name: "artur_king",
      status: true,
    },
    {
      profileImage: user10,
      name: "galiya_mua",
      status: true,
    },
    {
      profileImage: user11,
      name: "samurai.kz",
      status: true,
    },
    {
      profileImage: user12,
      name: "azamat.94",
      status: true,
    },
    {
      profileImage: user13,
      name: "luna_rose",
      status: true,
    },
    {
      profileImage: user14,
      name: "dinara_fit",
      status: true,
    },
    {
      profileImage: user15,
      name: "tim_urban",
      status: true,
    },
    {
      profileImage: user16,
      name: "miras_khan",
      status: true,
    },
  ];

  const { data } = useGetMeQuery();

  return (
    <header className={scss.header}>
      <div className="container">
        {data ? (
          <div className={scss.content}>
            {historyProfile.map((el, index) => (
              <div key={index} className={scss.box}>
                <div className={scss.borderImage}>
                  <Image src={el.profileImage} alt={el.name} />
                </div>
                <p>{el.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>вы ещё не заригестрированы! или не вошли в аккаунт!</p>
        )}
      </div>
    </header>
  );
};

export default Header;
