"use client";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import scss from "./SingupPage.module.scss";
import { useSignUpMutation } from "@/redux/api/auth";
import { useRouter } from "next/navigation";

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
            {/* Username */}
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

            {/* Email */}
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

            {/* Password */}
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
              <button
                type="button"
                className={scss.eyeButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  src={
                    showPassword
                      ? "/images/eye-open.png"
                      : "/images/eye-closed.png"
                  }
                  alt={showPassword ? "Hide password" : "Show password"}
                  className={scss.eyeIcon}
                />
              </button>
            </div>
            {errors.password && (
              <p className={scss.error}>{errors.password.message}</p>
            )}

            {/* Image instead of Confirm Password */}
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
              <a href="#">Already have an account? Sign In</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
