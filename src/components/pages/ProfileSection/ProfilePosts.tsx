"use client";
import { useGetMeQuery } from "@/redux/api/auth";
import scss from "./ProfilePosts.module.scss";
import {
  useDeletePostMutation,
  useGetMyQuery,
  useGetUserQuery,
} from "@/redux/api/getUser";
import { useParams } from "next/navigation";

const ProfilePosts = () => {
  const { id } = useParams();
  const { data: users } = useGetUserQuery(+id);
  const { data: my } = useGetMyQuery();
  const { data: me } = useGetMeQuery();
  const [deletePost] = useDeletePostMutation();

  const myId = me?.profile.id;

  const user = users || my;
  return (
    <section className={scss.ProfilePosts}>
      <div className="container">
        <div className={scss.content}>
          {user?.map((el) => (
            <div key={el.id} className={scss.box}>
              <img src={el.mediaUrl} alt={el.updatedAt} />
              <video controls src={el.mediaUrl}></video>
              {+id == +myId! && (
                <button
                  onClick={() => {
                    deletePost(el.id);
                    window.location.reload();
                  }}
                >
                  удалить публикацию
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilePosts;
