import React from "react";
import scss from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={scss.Load}>
      <div className={scss.loader}></div>
    </div>
  );
};

export default Loading;
