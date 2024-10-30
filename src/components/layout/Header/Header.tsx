"use client";
import scss from "./Header.module.scss";
import { useGetMeQuery } from "@/redux/api/auth";
import { useGetAllPostQuery } from "@/redux/api/posts";
import Loading from "@/components/ui/Loading";

const Header = () => {
  // const historyProfile = [
  //   {
  //     profileImage: user1,
  //     name: "aisha.k",
  //     status: true,
  //   },
  //   {
  //     profileImage: user2,
  //     name: "daniel_muh",
  //     status: true,
  //   },
  //   {
  //     profileImage: user3,
  //     name: "bek_98",
  //     status: true,
  //   },
  //   {
  //     profileImage: user4,
  //     name: "aliya.zhan",
  //     status: true,
  //   },
  //   {
  //     profileImage: user5,
  //     name: "temir.007",
  //     status: true,
  //   },
  //   {
  //     profileImage: user6,
  //     name: "amina_kz",
  //     status: true,
  //   },
  //   {
  //     profileImage: user7,
  //     name: "rakhimov_23",
  //     status: true,
  //   },
  //   {
  //     profileImage: user8,
  //     name: "zhanel.b",
  //     status: true,
  //   },
  //   {
  //     profileImage: user9,
  //     name: "artur_king",
  //     status: true,
  //   },
  //   {
  //     profileImage: user10,
  //     name: "galiya_mua",
  //     status: true,
  //   },
  //   {
  //     profileImage: user11,
  //     name: "samurai.kz",
  //     status: true,
  //   },
  //   {
  //     profileImage: user12,
  //     name: "azamat.94",
  //     status: true,
  //   },
  //   {
  //     profileImage: user13,
  //     name: "luna_rose",
  //     status: true,
  //   },
  //   {
  //     profileImage: user14,
  //     name: "dinara_fit",
  //     status: true,
  //   },
  //   {
  //     profileImage: user15,
  //     name: "tim_urban",
  //     status: true,
  //   },
  //   {
  //     profileImage: user16,
  //     name: "miras_khan",
  //     status: true,
  //   },
  // ];

  const { data: users, isLoading } = useGetAllPostQuery();
  const user = users?.map((el) => el.user);
  // const filterUser = user?.filter(el => el.id !== el.id)

  const { data } = useGetMeQuery();

  return data ? (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          {isLoading ? (
            <Loading />
          ) : (
            user?.map((el, index) => (
              <div key={index} className={scss.box}>
                <div className={scss.borderImage}>
                  <img src={el.photo} alt={el.username} />
                </div>
                <p>{el.username}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </header>
  ) : null;
};

export default Header;
