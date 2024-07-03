import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="bg-cover bg-center bg-blend-darken h-screen py-5"
      style={{ backgroundImage: 'url("src/img/hero2.png")' }}
    >
      <Navbar />
      <div className="flex flex-col gap-5 justify-center items-center my-32">
        <h1 className="text-white text-center w-3/5 text-4xl font-bold">
          Temukan Kisah Menakjubkan di Koleksi Buku Cerita Terbaru Kami!
        </h1>
        <p className="leading-6 text-sm text-white text-center w-2/5">
          Nikmati petualangan seru dan inspiratif dari koleksi buku terbaru
          kami. Temukan dunia penuh imajinasi dan keajaiban untuk semua usia.
          Mulai perjalanan membaca Anda dan temukan keajaiban di setiap cerita!
        </p>
        <button
          className="h-10 text-white bg-yellow-100 rounded-full w-36 my-5"
          style={{ backgroundColor: "#B2AFE7" }}
        >
          Baca Sekarang
        </button>
      </div>
    </div>
  );
};

export default Header;
