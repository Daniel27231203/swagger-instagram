"use client";
import { FC, useState } from "react";
import scss from "./Forgot.module.scss";
import { useForgotMutation } from "@/redux/api/auth";

const Forgot: FC = () => {
  const [email, setEmail] = useState("");
  const [forgotMutation] = useForgotMutation();
  const forgotPassword = async () => {
    const userData: AUTH.ForgotRequest = {
      email: email,
      frontEndUrl: "http://localhost:3000/reset-password",
    };
    const data = await forgotMutation(userData);
    setEmail("");
    if (data.data) {
      return alert(
        "ваш email действителен, мы отправим ссылку на вашу почту. Подвердите отправку!"
      );
    } else {
      return alert(
        "зивените но ваш email недействителен. Пожалуйста введите коректный email"
      );
    }
  };
  return (
    <section className={scss.Forgot}>
      <div className="container">
        <div className={scss.content}>
          <h2>введите ваш Email</h2>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={forgotPassword}>tab</button>
        </div>
      </div>
    </section>
  );
};

export default Forgot;
