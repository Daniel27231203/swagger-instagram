import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { MdExplore, MdOutlineVideoLibrary } from "react-icons/md";
import { BsFillChatDotsFill, BsFillHeartFill } from "react-icons/bs";
import { RiAddCircleLine, RiAccountCircleLine } from "react-icons/ri";
import { FiLogIn, FiUserPlus } from "react-icons/fi";

const links = [
  { name: "Главная", link: "/", icon: <AiFillHome /> },
  { name: "Поисковый запрос", link: "/search", icon: <AiOutlineSearch /> },
  { name: "Интересное", link: "/explore", icon: <MdExplore /> },
  { name: "Reels", link: "/reels", icon: <MdOutlineVideoLibrary /> },
  { name: "Сообщения", link: "/messages", icon: <BsFillChatDotsFill /> },
  { name: "Уведомления", link: "/notifications", icon: <BsFillHeartFill /> },
  { name: "Создать", link: "/create", icon: <RiAddCircleLine /> },
  { name: "Профиль", link: "/profile", icon: <RiAccountCircleLine /> },
  //   { name: "Sign In", link: "/sign-in", icon: <FiLogIn /> },
  //   { name: "Sign Up", link: "/sign-up", icon: <FiUserPlus /> },
];

export default links;
