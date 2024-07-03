import React from "react";
import Button from "../Elements/Button/Button";

const CardProduct = (props) => {
  const { children, border, width } = props;
  return (
    <div className={`w-full max-w-${width} my-3 ${border} rounded-lg p-4 flex items-center space-x-4 mx-4 mt-8`}>
      {children}
    </div>
  );
};

CardProduct.Header = () => {
  return <img src="/img/malinkundang.png" alt="Gambar Malin Kundang" />;
};

CardProduct.Body = (props) => {
  const { text, desc } = props;
  return (
    <div>
      <h3 className="text-2xl font-medium">{text}</h3>
      <p className="text-[14px] mb-3">{desc}</p>
      <Button color="bg-[#565656]" px="2" py="1" text="Detail Buku" />
    </div>
  );
};

export default CardProduct;
