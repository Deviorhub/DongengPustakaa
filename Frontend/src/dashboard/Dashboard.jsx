import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Card from "./component/Card";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";
import { dongengNusantara } from "./data";
import StarIcon from "@mui/icons-material/Star";
import { Dropdown } from "flowbite-react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import InputSearch from "./component/InputSearch";
import { SearchIcon } from "@heroicons/react/solid";

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
      <div className="container mx-auto mt-10 px-20">
        <div className="flex items-center justify-center gap-x-6">
          <div className="flex justify-center items-center gap-x-4 border border-gray-300 rounded-md px-3 w-3/5">
            <input
              type="text"
              className="flex-1 outline-none border-none"
              name="search"
              placeholder="Cari Cerita..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchIcon className="h-5 w-5 text-gray-500 mr-2" />
          </div>
          <Dropdown
            label={
              <div className="flex items-center text-[#282828]">
                <span className="mr-2">Kategori</span>
                <ChevronDownIcon className="w-5 h-5" />
              </div>
            }
            dismissOnClick={false}
          >
            <Dropdown.Item>Cerita Rakyat</Dropdown.Item>
            <Dropdown.Item>Kisah Dongeng</Dropdown.Item>
          </Dropdown>
          <Dropdown
            label={
              <div className="flex items-center text-[#282828]">
                <span className="mr-2">Rating</span>
                <ChevronDownIcon className="w-5 h-5" />
              </div>
            }
            dismissOnClick={false}
          >
            <Dropdown.Item>
              <StarIcon sx={{ color: "yellow" }} className="pr-3" />5 - 4
            </Dropdown.Item>
            <Dropdown.Item>
              <StarIcon sx={{ color: "yellow" }} className="pr-3" />3 - 1
            </Dropdown.Item>
          </Dropdown>
        </div>
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
