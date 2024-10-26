// import { useRefreshTokenMutation } from "@/redux/api/auth";
// import { usePathname } from "next/navigation";
// import { FC, ReactNode, useEffect } from "react";

// interface SessionProviderProps {
//   children: ReactNode;
// }

// const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
//   const pathname = usePathname();
//   const [apiClient] = useRefreshTokenMutation();

//   const checkAccessToken = async () => {
//     const tokens = localStorage.getItem("tokens");
//     if (!tokens) return;

//     const { accessTokenExpiration, refreshToken } = JSON.parse(tokens);

//     if (accessTokenExpiration <= Date.now()) {
//       console.log("Токен истёк!");
//       try {
//         const { data } = await apiClient(refreshToken);
//         localStorage.setItem("tokens", JSON.stringify(data));
//         window.location.reload(); // Или navigate в нужный маршрут
//       } catch (error) {
//         console.error("Ошибка при обновлении токена:", error);
//         localStorage.removeItem("tokens");
//         window.location.replace("/login"); // Перенаправление на логин
//       }
//     } else {
//       console.log("Токен живой!");
//     }
//   };

//   useEffect(() => {
//     checkAccessToken();
//   }, [pathname]);

//   return <>{children}</>;
// };

// export default SessionProvider;
