import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Card from "./component/Card";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";
import { dongengNusantara } from "./data";
import StarIcon from "@mui/icons-material/Star";
import { Dropdown } from "flowbite-react";
import { ChevronDownIcon } from '@heroicons/react/outline';

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
      <div className="container mx-auto mt-10">
        <Dropdown label={
          <div className="flex items-center text-[#282828]">
            <span className="mr-2">Dropdown button</span>
            <ChevronDownIcon className="w-5 h-5" />
          </div>
        } dismissOnClick={false}>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
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
