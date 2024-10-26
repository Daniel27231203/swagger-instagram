import React, { FC } from "react";
import scss from "./EditProfile.module.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEditProfileMutation } from "@/redux/api/auth"; // Предполагается Mutation

interface UpdateProfile {
  username: string;
  photo: string;
}

interface EditProfileProps {
  userNameValue: string;
  userImageValue: string;
  setEditUi: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProfile: FC<EditProfileProps> = ({
  userNameValue,
  userImageValue,
  setEditUi,
}) => {
  const { register, handleSubmit, reset, setValue } = useForm<UpdateProfile>();

  // Используем `useEditProfileMutation`
  const [editProfile] = useEditProfileMutation();

  // Устанавливаем начальные значения
  React.useEffect(() => {
    setValue("username", userNameValue);
    setValue("photo", userImageValue);
  }, [userNameValue, userImageValue, setValue]);

  const onSubmit: SubmitHandler<UpdateProfile> = async (data) => {
    const newUser = {
      username: data.username,
      photo: data.photo,
    };
    try {
      await editProfile(newUser).unwrap(); // Ждём завершения мутации
      reset(); // Сбрасываем форму после успешного сохранения
      setEditUi(false); // Закрываем UI
    } catch (error) {
      console.error("Failed to update profile:", error); // Обрабатываем ошибку
    }
  };

  return (
    <div className={scss.EditProfile}>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        {/* Связываем handleSubmit */}
        <input
          type="text"
          placeholder="New username"
          {...register("username", { required: true })}
        />
        <input
          type="text"
          placeholder="New image"
          {...register("photo", { required: true })}
        />
        <button type="submit">Save</button>
      </form>
      <button onClick={() => setEditUi(false)} className={scss.close}>
        <IoCloseCircleOutline />
      </button>
    </div>
  );
};

export default EditProfile;
