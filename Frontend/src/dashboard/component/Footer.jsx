import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const footerItems = [
    {
      name: "Tentang",
      items1: "Tentang Kami",
      items2: "devior@gmail.com",
      items3: "deviorcommunity.com",
    },
    {
      name: "Cerita",
      items1: "Sangkuriang",
      items2: "Malin Kundang",
      items3: "Nyai Roro Kidul",
    },
    {
      name: "Privacy",
      items1: "Privacy Policy",
      items2: "Terms & Conditions",
      items3: "",
    },
  ];
  return (
    <div
      id="kontak"
      className="px-16 py-16 flex justify-between"
      style={{ backgroundColor: "#8DAAE5" }}
    >
      <div className="flex flex-col w-3/6 gap-5">
        <div className="flex">
          <img src="src/img/logo.png" className="w-16" alt="" />
          <div className="ml-5 flex flex-col justify-center items-start">
            <p className="text-white">Dongeng</p>
            <p className="text-white">Pustaka</p>
          </div>
        </div>
        <p className="text-white max-w-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, ab
          cum nam architecto, animi exercitationem aliquam ullam dolor est
          similique repellat doloremque tenetur vel enim nobis illum iure
          fugiat. Sit.
        </p>
        <ul className="flex gap-3">
          <li>
            <InstagramIcon sx={{ color: "white" }} />
          </li>
          <li>
            <YouTubeIcon sx={{ color: "white" }} />
          </li>
          <li>
            <LinkedInIcon sx={{ color: "white" }} />
          </li>
        </ul>
      </div>
      <div className="flex justify-between w-3/6">
        {footerItems.map((item, index) => {
          return (
            <>
              <div className="flex flex-col gap-3 justify-center items-start text-white">
                <p className="font-bold">{item.name}</p>
                <ul className="flex flex-col gap-2">
                  <li>{item.items1}</li>
                  <li>{item.items2}</li>
                  <li>{item.items3}</li>
                </ul>
              </div>
              ;
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
