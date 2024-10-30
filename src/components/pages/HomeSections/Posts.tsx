"use client";
import { FC } from "react";
import scss from "./Posts.module.scss";
import { useGetAllPostQuery } from "@/redux/api/posts";
import Loading from "@/components/ui/Loading";
import Post from "@/components/modals/Post/Post";

const Posts: FC = () => {
  const { data, isLoading } = useGetAllPostQuery();
  console.log("🚀 ~ data:", data);
  return (
    <section className={scss.Posts}>
      <div className="container">
        <div className={scss.content}>
          {isLoading ? <Loading /> : <Post data={data!} />}
        </div>
      </div>
    </section>
  );
};

export default Posts;
