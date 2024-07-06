import React, { useEffect, useState } from "react";
import Button from "../../components/Elements/Button/Button";
import { Dropdown } from "flowbite-react";

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

  const [isloggin, setIsloggin] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setIsloggin(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <nav
      className="mx-6 lg:mx-20 rounded-full h-16 flex items-center justify-between px-10"
      style={{ backgroundColor: "#8DAAE5" }}
    >
      <div className="flex items-center">
        <p className="font-bold text-white text-[24px]">Dongeng Pustaka</p>
        <ul className="lg:flex gap-5 mx-10 text-white hidden">
          {navItems.map((nav, index) => {
            return <a href={nav.link}>{nav.name}</a>;
          })}
        </ul>
        {/* mobile view */}
        <ul className="flex flex-col gap-5 mx-10 text-white lg:hidden">
          {navItems.map((nav, index) => {
            return <a href={nav.link}>{nav.name}</a>;
          })}
        </ul>
      </div>
      <div className="flex gap-2">
        {!isloggin ? (
          <>
            <Button
              color="bg-[#B2AFE7]"
              px="6"
              py="2"
              text="Masuk"
              link="/login"
            />
            <Button
              border="border-2"
              color="border-[#B2AFE7]"
              px="6"
              py="2"
              text="Daftar"
              link="/register"
            />
          </>
        ) : (
          <div>
            <Dropdown
              label={`Halo, ${localStorage.getItem("username")}`}
              dismissOnClick={false}
            >
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item className="text-red-500" onClick={handleLogout}>
                Logout
              </Dropdown.Item>
            </Dropdown>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
