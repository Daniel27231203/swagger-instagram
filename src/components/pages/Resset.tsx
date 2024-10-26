"use client";
import { FC, useState } from "react";

import scss from "./Resset.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { useResetMutation } from "@/redux/api/auth";

const Resset: FC = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const router = useRouter();
  const [resetMutation] = useResetMutation();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const resetPassword = async () => {
    const userData: AUTH.ResetRequest = {
      token: String(token),
      newPassword: passwordValue,
    };
    const data = await resetMutation(userData);
    console.log("��� ~ resetPassword ~ data:", data.data);
    if (data.data) {
      alert("пароль успешно изменен!");
      router.push("/sing-in");
    } else {
      alert("токен недействителен или устарел!");
      router.push("/auth/forgot");
    }
  };
  return (
    <section className={scss.Resset}>
      <div className="container">
        <div className={scss.content}>
          <h3>придумайте новый пароль</h3>
          <input
            minLength={6}
            type="text"
            placeholder="new password"
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <button
            onClick={() => {
              resetPassword();
              setPasswordValue("");
            }}
          >
            add
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resset;
