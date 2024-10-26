import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { MdExplore, MdOutlineVideoLibrary } from "react-icons/md";
import { BsFillChatDotsFill, BsFillHeartFill } from "react-icons/bs";
import { RiAddCircleLine, RiAccountCircleLine } from "react-icons/ri";

export const links = [
  { name: "Главная", link: "/", icon: <AiFillHome /> },
  { name: "Поисковый запрос", link: "/search", icon: <AiOutlineSearch /> },
  { name: "Интересное", link: "/explore", icon: <MdExplore /> },
  { name: "Reels", link: "/reels", icon: <MdOutlineVideoLibrary /> },
  { name: "Сообщения", link: "/messages", icon: <BsFillChatDotsFill /> },
  { name: "Уведомления", link: "/notifications", icon: <BsFillHeartFill /> },
  { name: "Создать", link: "/create", icon: <RiAddCircleLine /> },
  { name: "Профиль", link: "/profile", icon: <RiAccountCircleLine /> },
];

export const linksFooter = [
  { name: "Главная", link: "/", icon: <AiFillHome /> },
  { name: "Поисковый запрос", link: "/search", icon: <AiOutlineSearch /> },
  { name: "Reels", link: "/reels", icon: <MdOutlineVideoLibrary /> },
  { name: "Создать", link: "/create", icon: <RiAddCircleLine /> },
  { name: "Сообщения", link: "/messages", icon: <BsFillChatDotsFill /> },
  { name: "Уведомления", link: "/notifications", icon: <BsFillHeartFill /> },
  { name: "Профиль", link: "/profile", icon: <RiAccountCircleLine /> },
];
