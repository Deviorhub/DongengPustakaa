import React from "react";
import Button from "../../components/Elements/Button/Button";

const Navbar = () => {
  const navItems = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "Cerita Pilihan",
      link: "/dashboard",
    },
    {
      name: "Tentang",
      link: "#tentang",
    },
    {
      name: "Kontak",
      link: "#kontak",
    },
  ];
  return (
    <nav
      className="mx-20 rounded-full h-16 flex items-center justify-between px-10"
      style={{ backgroundColor: "#8DAAE5" }}
    >
      <div className="flex">
        <p className="font-bold text-white">Dongeng Pustaka</p>
        <ul className="flex gap-5 mx-10 text-white">
          {navItems.map((nav, index) => {
            return <a href={nav.link}>{nav.name}</a>;
          })}
        </ul>
      </div>
      <div className="flex gap-2">
        {/* <button
          className="h-8 text-white bg-yellow-100 rounded-full w-20"
          style={{ backgroundColor: "#B2AFE7" }}
        >
          Masuk
        </button>

        <button
          className="h-8 border-2 text-white bg-transparent rounded-full w-32"
          style={{ borderColor: "#B2AFE7" }}
        >
          Daftar Gratis
        </button> */}
        <Button color="bg-[#B2AFE7]" px="6" py="2" text="Masuk" link="/login" />
        <Button
          border="border-2"
          color="border-[#B2AFE7]"
          px="6"
          py="2"
          text="Daftar"
          link="/register"
        />
      </div>
    </nav>
  );
};

export default Navbar;
