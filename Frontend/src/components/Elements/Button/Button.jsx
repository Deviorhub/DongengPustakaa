import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { border, color, text, px, py, width, link } = props;
  return (
    <button
      type="submit"
      className={`${border} ${color} px-${px} py-${py} ${width} rounded-full text-[16px] text-white font-semibold`}
    >
      {/* <Link to={`${link}`}>{text}</Link> */}
      Kirim
    </button>
  );
};

export default Button;
