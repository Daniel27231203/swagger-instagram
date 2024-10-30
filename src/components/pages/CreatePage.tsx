"use client";
import { FC } from "react";
import scss from "./CreatePage.module.scss";
import { useCreatePostMutation } from "@/redux/api/posts";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUploadMutation } from "@/redux/api/upload";

const CreatePage: FC = () => {
  const [createPostMutation] = useCreatePostMutation();
  const [uploadMutation] = useUploadMutation();
  const { register, handleSubmit, reset } = useForm<ICreate>();

  const onSubmit: SubmitHandler<ICreate> = async (data) => {
    try {
      if (!data.file || data.file.length === 0) {
        throw new Error("Файл не выбран");
      }

      const selectedFile = data.file[0];
      const formData = new FormData();
      formData.append("file", selectedFile);

      const { data: media } = await uploadMutation(formData);

      const postData: ICreate = {
        mediaUrl: String(media?.url),
        caption: data.caption,
        mediaType: data.mediaType,
      };

      const response = await createPostMutation(postData).unwrap();
      console.log("Пост успешно создан", response);
      reset();
      window.location.reload();
    } catch (error) {
      console.error("Ошибка при создании поста:", error);
    }
  };

  return (
    <section className={scss.CreatePage}>
      <div className="container">
        <div className={scss.content}>
          <h2>Создайте свой пост!</h2>
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <input
              type="file"
              {...register("file", { required: true })}
              accept="image/*,video/*" // Ограничиваем типы файлов
            />
            <select {...register("mediaType", { required: true })}>
              <option value="PHOTO">PHOTO</option>
              <option value="VIDEO">VIDEO</option>
            </select>
            <input
              type="text"
              placeholder="Описание"
              {...register("caption", { required: true })}
            />
            <button type="submit">Добавить</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreatePage;
