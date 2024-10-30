import React, { FC } from "react";
import scss from "./EditProfile.module.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEditProfileMutation } from "@/redux/api/auth"; // Предполагается Mutation
import { useUploadMutation } from "@/redux/api/upload";

interface UpdateProfile {
  username: string;
  photo: string;
  file?: string;
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
  const [uploadMutation] = useUploadMutation();
  const [editProfile] = useEditProfileMutation();

  React.useEffect(() => {
    setValue("username", userNameValue);
    setValue("photo", userImageValue);
  }, [userNameValue, userImageValue, setValue]);

  const onSubmit: SubmitHandler<UpdateProfile> = async (data) => {
    try {
      if (!data.file || data.file.length === 0) {
        throw new Error("Файл не выбран");
      }

      const selectedFile = data.file[0];
      const formData = new FormData();
      formData.append("file", selectedFile);

      const { data: media } = await uploadMutation(formData);
      const newUser = {
        username: data.username,
        photo: String(media?.url),
      };

      await editProfile(newUser).unwrap();
      reset();
      setEditUi(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
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
          type="file"
          placeholder="New image"
          {...register("file", { required: true })}
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
