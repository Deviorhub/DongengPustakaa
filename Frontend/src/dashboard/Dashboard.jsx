import React, { useState } from "react";
import Header from "./component/Header";
import Card from "./component/Card";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";
import { dongengNusantara } from "./data";
import { Dropdown } from "flowbite-react";
import StarIcon from "@mui/icons-material/Star";

const Dashboard = () => {
  // State untuk dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // Handler untuk toggle dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
        {dongengNusantara.map((data, index) => (
          <Link key={index} to={`detail/${data.id}`} className="cursor-pointer">
            <Card judul={data.judul} img={data.cover} rating={data.rating} />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
