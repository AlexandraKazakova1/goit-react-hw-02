import React from "react";
import s from "./Description.module.css";
const Description = () => {
  return (
    <div>
      <h1 className={s.title}>
        Sip Happens Café{" "}
        <img src="/public/free-icon-coffee-6191416.png" alt="cafe" width={50} />
      </h1>
      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
