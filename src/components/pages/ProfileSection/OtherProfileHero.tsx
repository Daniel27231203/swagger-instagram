"use client";
import { FC } from "react";
import scss from "./ProfileHero.module.scss";
import { useParams } from "next/navigation";
import { useGetUserQuery } from "@/redux/api/getUser";

const OtherProfileHero: FC = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetUserQuery(+id);

  return (
    <section className={scss.ProfileHero}>
      <div className="container">
        {data && data.length > 0 && data[0].user && (
          <div className={scss.content}>
            <img src={data![0].user.photo} alt={data![0].user.username} />
            <div className={scss.profileAbout}>
              <div className={scss.profileBlock}>
                <h2>{data![0].user.email}</h2>
              </div>
              <div className={scss.followersAbout}>
                <h5>
                  <span>1</span> Публикация
                </h5>
                <h5>
                  <span>106</span> Подписчиков
                </h5>
                <h5>
                  <span>109</span> Подписок
                </h5>
              </div>

              <div className={scss.userAbout}>
                <h3>
                  {data![0].user.isActive ? (
                    <div className={scss.Isactive}></div>
                  ) : (
                    <div className={scss.noActive}></div>
                  )}
                  {data![0].user.username}
                </h3>
                <p>
                  <span>аккаунт создан в:</span>
                  {data![0].user.createdAt}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OtherProfileHero;
