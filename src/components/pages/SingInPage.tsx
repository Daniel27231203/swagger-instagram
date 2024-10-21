"use client";

import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import scss from "./SignInPage.module.scss";
import { useSignInMutation } from "@/redux/api/auth";

// Интерфейс для данных формы
interface FormInputs {
  email: string;
  password: string;
}

const SignInPage: FC = () => {
  const router = useRouter();
  const [signInMutation] = useSignInMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await signInMutation(userInfo).unwrap();
      localStorage.setItem("tokens", JSON.stringify(res));
      router.push("/");
      reset();
    } catch (error) {
      console.error("Ошибка авторизации:", error);
      alert("Failed to sign in. Please check your credentials.");
    }
  };

  return (
    <section className={scss.SignInPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <h2>Instagram</h2>
            <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
              {/* Поле Email */}

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

              {/* Поле Password */}

              <input
                type="password"
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
              {errors.password && (
                <p className={scss.error}>{errors.password.message}</p>
              )}

              <button type="submit" className={scss.button}>
                Sign In
              </button>

              <div className={scss.links}>
                <a href="#">Forgot password?</a>
                <a href="/sing-up">Create an account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
