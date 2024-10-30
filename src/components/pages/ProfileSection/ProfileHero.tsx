"use client";
import { FC, useState } from "react";
import scss from "./ProfileHero.module.scss";
import Link from "next/link";
import { AiOutlineSetting } from "react-icons/ai";
import Loading from "@/components/ui/Loading";
import EditProfile from "@/components/ui/EditProfile/EditProfile";
import { useGetMeQuery } from "@/redux/api/auth";

const ProfileHero = () => {
  const [editUi, setEditUi] = useState(false);
  const { data, isLoading } = useGetMeQuery();

  return (
    <section className={scss.ProfileHero}>
      <div className="container">
        {isLoading ? (
          <Loading />
        ) : (
          <div className={scss.content}>
            {data ? (
              <>
                <img src={data?.profile.photo} alt={data?.profile.username} />
                <div className={scss.profileAbout}>
                  <div className={scss.profileBlock}>
                    <h2>{data?.profile.email}</h2>
                    <>
                      <button onClick={() => setEditUi(true)}>
                        редактировать профиль
                      </button>
                      <button>посмотреть архив</button>
                      <Link href={"/settings"}>
                        <AiOutlineSetting className={scss.icon} />
                      </Link>
                    </>
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
                      {data.profile.isActive ? (
                        <div className={scss.Isactive}></div>
                      ) : (
                        <div className={scss.noActive}></div>
                      )}
                      {data.profile.username}
                    </h3>
                    <p>
                      <span>аккаунт создан в:</span>
                      {data.profile.createdAt}
                    </p>
                  </div>
                </div>
                {editUi ? (
                  <div className={scss.ui}>
                    <EditProfile
                      userNameValue={data.profile.username}
                      userImageValue={data.profile.photo}
                      setEditUi={setEditUi}
                    />
                  </div>
                ) : null}
              </>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfileHero;
