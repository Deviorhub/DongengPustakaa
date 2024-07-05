import Button from "../Elements/Button/Button";
import CardProduct from "../Fragments/CardProduct";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("http://localhost:4000/ceritas");
        let { data } = await res.json();
        setDatas(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });
  return (
    <>
      <div className="grid grid-cols-3 mt-8">
        {datas.map((data, id) => (
          <CardProduct width="md" flex="flex" center={"items-center"} key={id}>
            <CardProduct.Header image={data.image} w="72" h="72" />
            <CardProduct.Body judul={data.judul} desc="Cerita Rakyat" />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default Card;
