import { FC } from "react";
import {
  AiOutlineSetting,
  AiOutlineHeart,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { MdOutlineAccountCircle, MdOutlineSaveAlt } from "react-icons/md";
import scss from "./SideBarUi.module.scss";
import Link from "next/link";

const SideBarUi: FC = () => {
  const logout = () => {
    JSON.parse(localStorage.getItem("tokens")!) || [];
    localStorage.removeItem("tokens");
  };
  return (
    <div className={scss.SideBarUi}>
      <div className={scss.menuItem}>
        <AiOutlineSetting className={scss.icon} />
        <span>Настройки</span>
      </div>
      <div className={scss.menuItem}>
        <MdOutlineAccountCircle className={scss.icon} />
        <span>Ваши действия</span>
      </div>
      <div className={scss.menuItem}>
        <MdOutlineSaveAlt className={scss.icon} />
        <span>Сохраненное</span>
      </div>
      <div className={scss.menuItem}>
        <AiOutlineHeart className={scss.icon} />
        <span>Переключить режим</span>
      </div>
      <div className={scss.menuItem}>
        <AiOutlineExclamationCircle className={scss.icon} />
        <span>Сообщение о проблеме</span>
      </div>
      <div className={scss.separator}></div>
      <div className={scss.menuItem}>
        <Link href={"/sing-in"}>
          <span>Переключение между аккаунтами...</span>
        </Link>
      </div>
      <div onClick={() => logout()} className={scss.menuItem}>
        <span>Выйти</span>
      </div>
    </div>
  );
};

export default SideBarUi;
