import React from "react";
import Button from "../Elements/Button/Button";
import CardProduct from "../Fragments/CardProduct";

const Card = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        <CardProduct width="md">
          <CardProduct.Header />
          <CardProduct.Body text="Malin Kundang" desc="Cerita Rakyat" />
        </CardProduct>
        <CardProduct width="md">
          <CardProduct.Header />
          <CardProduct.Body text="Gajah & Semut" desc="Cerita Dongeng" />
        </CardProduct>
        <CardProduct width="md">
          <CardProduct.Header />
          <CardProduct.Body text="Timun Emas" desc="Cerita Rakyat" />
        </CardProduct>
        <CardProduct width="md">
          <CardProduct.Header />
          <CardProduct.Body text="Nyi Roro Kidul" desc="Cerita Rakyat" />
        </CardProduct>
        <CardProduct width="md">
          <CardProduct.Header />
          <CardProduct.Body text="Asal Mula Danau Toba" desc="Cerita Rakyat" />
        </CardProduct>
        <CardProduct width="md">
          <CardProduct.Header />
          <CardProduct.Body text="Kancil & Buaya" desc="Cerita Dongeng" />
        </CardProduct>
      </div>
    </>
  );
};

export default Card;
