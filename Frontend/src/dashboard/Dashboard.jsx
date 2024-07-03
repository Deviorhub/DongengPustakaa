import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Card from "./component/Card";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";
import { dongengNusantara } from "./data";
import { Dropdown } from "flowbite-react";
import StarIcon from "@mui/icons-material/Star";

const Dashboard = () => {
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
  }, []);

  return (
    <>
      <Header />
      <div className="mt-10 mx-32">
        {/* <Dropdown label="Dropdown button" dismissOnClick={false}>
          <Dropdown.Item className="flex gap-x-5">
            <StarIcon sx={{ color: "yellow" }} />5
          </Dropdown.Item>
          <Dropdown.Item className="flex gap-x-5">
            <StarIcon sx={{ color: "yellow" }} />4
          </Dropdown.Item>
          <Dropdown.Item className="flex gap-x-5">
            <StarIcon sx={{ color: "yellow" }} />3
          </Dropdown.Item>
          <Dropdown.Item className="flex gap-x-5">
            <StarIcon sx={{ color: "yellow" }} />2
          </Dropdown.Item>
          <Dropdown.Item className="flex gap-x-5">
            <StarIcon sx={{ color: "yellow" }} />1
          </Dropdown.Item>
        </Dropdown> */}
        {/* <Dropdown
          className="bg-yellow-200 text-red-500"
          label="Dropdown button"
          dismissOnClick={false}
        >
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown> */}
      </div>
      <div className="flex flex-wrap justify-between items-center container mx-auto px-20 py-10">
        {datas.map((data, index) => (
          <Link key={index} to={`detail/${data.id}`} className="cursor-pointer">
            <Card judul={data.judul} img={data.image} rating={data.rating} />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
