import { FC, useState } from "react";
import scss from "./Post.module.scss";
import { GoHeart } from "react-icons/go";
import { FaRegComments } from "react-icons/fa";
import { SlPaperPlane } from "react-icons/sl";
import { useRouter } from "next/navigation";

interface PostProps {
  data: IMedia[];
}

const Post: FC<PostProps> = ({ data }) => {
  const [desc, setDesc] = useState(true);
  const route = useRouter();
  return (
    <>
      {data?.map((el, index) => (
        <div key={index} className={scss.user}>
          <div
            className={scss.userAcount}
            onClick={() => {
              route.push(`/profile/${el.userId}`);
            }}
          >
            <div className={scss.borderImage}>
              <img src={el.user.photo} alt="" />
            </div>
            <h2>{el.user.username}</h2>
          </div>
          <div className={scss.userPost}>
            {el.mediaType === "PHOTO" ? (
              <img src={el.mediaUrl} alt="" />
            ) : (
              <video controls src={el.mediaUrl}></video>
            )}
          </div>
          <div className={scss.userAdvence}>
            <button>
              <GoHeart />
            </button>
            <button>
              <FaRegComments />
            </button>
            <button>
              <SlPaperPlane />
            </button>
          </div>
          <div className={scss.userDescription}>
            <p>
              {desc ? el.caption.slice(0, 50) : el.caption}{" "}
              <span onClick={() => setDesc(!desc)}>
                {desc ? "more..." : "close"}
              </span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
