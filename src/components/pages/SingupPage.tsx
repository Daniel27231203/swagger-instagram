"use client";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import scss from "./SingupPage.module.scss";
import { useSignUpMutation } from "@/redux/api/auth";
import { useRouter } from "next/navigation";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Link from "next/link";

// Тип данных формы

const SignupPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignUp>();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [signUpMutation] = useSignUpMutation();

  // Обработчик отправки формы
  const onSubmit: SubmitHandler<ISignUp> = async (data) => {
    const userInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
      photo: data.photo,
    };
    try {
      const res = await signUpMutation(userInfo).unwrap();
      localStorage.setItem("tokens", JSON.stringify(res));
      router.push("/");
      reset();
    } catch (error) {
      console.error("Ошибка авторизации:", error);
      alert("Failed to sign in. Please check your credentials.");
    }
  };

  return (
    <section className={scss.SignupPage}>
      <div className="container">
        <div className={scss.content}>
          <h2>Sign Up</h2>
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className={scss.input}
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className={scss.error}>{errors.username.message}</p>
            )}

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={scss.input}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className={scss.error}>{errors.email.message}</p>
            )}

            <label htmlFor="password">Password</label>
            <div className={scss.inputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className={scss.input}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {showPassword ? (
                <button
                  onClick={() => {
                    setShowPassword(false);
                  }}
                >
                  <FaRegEyeSlash />
                </button>
              ) : (
                <button onClick={() => setShowPassword(true)}>
                  <FaRegEye />
                </button>
              )}
            </div>

            {errors.password && (
              <p className={scss.error}>{errors.password.message}</p>
            )}

            <label>Add Image</label>
            <input
              type="text"
              id="photo"
              placeholder="your Image"
              className={scss.input}
              {...register("photo", { required: "UserImage is required" })}
            />

            <button type="submit" className={scss.button}>
              Sign Up
            </button>

            <div className={scss.links}>
              <Link href={"/sing-in"}>Already have an account? Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
