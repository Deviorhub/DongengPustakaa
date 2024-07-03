import React, { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { dongengNusantara } from "../data";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(`http://localhost:4000/ceritas/${id}`);
        let data = await res.json();
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(`http://localhost:4000/ceritas`);
        let data = await res.json();
        setDatas(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <>
      {data.map((data, index) => (
        <>
          <div
            className="h-96 bg-cover bg-center bg-no-repeat w-full"
            style={{
              backgroundImage: `url(${data.banner})`,
              padding: "25px",
            }}
          >
            <Navbar />
          </div>
          <div className="px-32 w-full">
            <div className="absolute top-40">
              <Card img={data.image} />
            </div>
            <div className="flex w-full">
              <div className="w-52 pt-24 mb-20">
                <div className="flex flex-col gap-3">
                  <button
                    className="w-full rounded-md text-white font-medium h-10"
                    style={{ backgroundColor: "#B2AFE7" }}
                  >
                    Add Favorite
                  </button>
                  <div className="flex flex-col gap-1">
                    <button
                      className="w-full rounded-md flex justify-start px-5 gap-12 items-center text-white font-medium h-10"
                      style={{ backgroundColor: "#8DAAE5" }}
                    >
                      <StarIcon sx={{ color: "yellow" }} />
                      {data.rating}
                    </button>
                    <button
                      className="w-full rounded-md flex justify-start px-5 gap-12 items-center text-white font-medium h-10"
                      style={{ backgroundColor: "#8DAAE5" }}
                    >
                      <FavoriteIcon sx={{ color: "red" }} />
                      124
                    </button>
                    <div
                      className="w-full rounded-md p-5"
                      style={{ backgroundColor: "#8DAAE5" }}
                    >
                      <div className="flex flex-col gap-3 mb-5">
                        <h5 className="text-white text-sm font-bold">Jenis</h5>
                        <p className="text-sm text-gray-100">Cerita Rakyat</p>
                      </div>
                      <div className="flex flex-col gap-3 mb-5">
                        <h5 className="text-white text-sm font-bold">Asal</h5>
                        <p className="text-sm text-gray-100">{data.asal}</p>
                      </div>
                      <div className="flex flex-col gap-3 mb-5">
                        <h5 className="text-white text-sm font-bold">
                          Karakter
                        </h5>
                        <p className="text-sm text-gray-100">{data.karakter}</p>
                      </div>
                      <div className="flex flex-col gap-3 mb-5">
                        <h5 className="text-white text-sm font-bold">
                          Sinopsis
                        </h5>
                        <p className="text-sm text-gray-100">{data.sinopsis}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-4/5 pl-16 py-10">
                <h3 className="text-slate-700 font-semibold mb-4 text-xl">
                  Cerita Rakyat: {data.judul}
                </h3>
                <p className="text-justify">{data.isi}</p>
              </div>
            </div>
            <div>
              <h1 className="text-slate-800 text-3xl font-medium">
                Rekomendasi Lainnya:
              </h1>
              <div className="flex flex-wrap justify-between items-center container mx-auto py-10">
                {datas.map((data, index) => (
                  <Link
                    key={index}
                    to={`/dashboard/detail/${data.id}`}
                    className="cursor-pointer"
                  >
                    <Card
                      judul={data.judul}
                      img={data.image}
                      rating={data.rating}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      ))}

      <Footer />
    </>
  );
};

export default Detail;
