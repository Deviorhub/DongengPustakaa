import React, { useEffect, useState } from "react";
import Header from "./dashboard/component/Navbar";
import Button from "./components/Elements/Button/Button";
import Card from "./components/pages/Card";
import Footer from "./dashboard/component/Footer";
import CardProduct from "./components/Fragments/CardProduct";

function App() {
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
      {/* hero */}
      <section
        className="bg-cover bg-center relative"
        style={{
          backgroundImage: "url(/img/hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "730px",
          paddingTop: "26px",
        }}
      >
        {/* navbar */}
        <Header />
        <div className="container mx-auto  mt-[150px]">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold max-w-5xl mx-auto mb-3">
              Temukan Kisah Menakjubkan di Koleksi Buku Cerita Terbaru Kami!
            </h1>
            <p className="text-[18px] max-w-3xl mx-auto mb-6">
              Nikmati petualangan seru dan inspiratif dari koleksi buku terbaru
              kami. Temukan dunia penuh imajinasi dan keajaiban untuk semua
              usia. Mulai perjalanan membaca Anda dan temukan keajaiban di
              setiap cerita!
            </p>
            <Button
              color="bg-[#B2AFE7]"
              width="w-1/6"
              px="12"
              py="3"
              text="Mulai Sekarang"
            />
          </div>
        </div>
      </section>

      {/* cerita */}
      <section>
        <div className="container mx-auto mt-[107px]">
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold">Koleksi Cerita Pilihan</h1>
            <p>
              Kami menyediakan rekomendasi kumpulan cerita yang menginspirasi
              dan menghibur untuk anda
            </p>
            <Card />
          </div>
        </div>
      </section>

      {/* tentang */}
      <section className="bg-[#F2F2F2]" id="tentang">
        <div className="container mx-auto mt-[107px]">
          <div className="flex justify-between items-center p-28 space-x-8">
            <img src="/img/about.png" alt="" />
            <div>
              <h1 className="text-5xl font-semibold mb-3">
                Lebih Dari 100+ Pengguna Telah Membaca di Dongeng Pustaka{" "}
              </h1>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur. Odio quam lectus a porta
                lobortis etiam elit. Viverra fermentum aliquet ultricies vel
                aliquam egestas donec a aliquet. Hendrerit vitae neque quam
                ornare orci cursus pharetra. Elementum mattis turpis pharetra
                pulvinar sit sit pellentesque aliquet porttitor. Egestas cras ac
                pretium risus eu fermentum sed.
              </p>
              <Button
                color="bg-[#B2AFE7]"
                px="6"
                py="2"
                text="Jelajahi Sekarang"
              />
            </div>
          </div>
        </div>
      </section>

      {/* update cerita */}
      <section>
        <div className="container mx-auto mt-[107px] mb-10">
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold">Cerita Baru Terupdate</h1>
            <p>
              Kami menyediakan rekomendasi kumpulan cerita yang menginspirasi
              dan menghibur untuk anda
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {datas.map((data, id) => (
                <CardProduct
                  key={id}
                  border="border-2 border-[#B4F4FA]"
                  width="w-full"
                >
                  <CardProduct.Header image={data.image} w="full" h="72" />
                  <CardProduct.Body
                    judul={data.judul}
                    sinopsis={data.sinopsis}
                  />
                </CardProduct>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
