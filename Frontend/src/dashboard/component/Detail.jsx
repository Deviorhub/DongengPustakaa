import React, { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <>
      {dongengNusantara
        .filter((data) => data.id == id)
        .map((data, index) => (
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
                <Card img={data.cover} />
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
                          <h5 className="text-white text-sm font-bold">
                            Jenis
                          </h5>
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
                          <p className="text-sm text-gray-100">
                            {data.karakter}
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 mb-5">
                          <h5 className="text-white text-sm font-bold">
                            Sinopsis
                          </h5>
                          <p className="text-sm text-gray-100">
                            {data.sinopsis}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-4/5 pl-16 py-10">
                  <h3 className="text-slate-700 font-semibold mb-4 text-xl">
                    Cerita Rakyat: {data.judul}
                  </h3>
                  {/* <p className="text-justify">{data.isi}</p> */}
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam illo quasi accusantium illum nam, doloremque sit quae
                    harum officiis asperiores. Sunt, neque? Harum itaque
                    cupiditate magni repudiandae assumenda, corporis, illum
                    architecto perferendis distinctio minima consequuntur,
                    tempora voluptatum pariatur culpa vero nobis ad dignissimos
                    soluta laborum autem temporibus. Sunt eaque dolore culpa
                    exercitationem nostrum consequatur voluptas, esse
                    accusantium ratione sed quis libero officia obcaecati ea
                    nulla, cum quas rerum, veritatis amet sapiente ullam quo. At
                    impedit rerum iusto repudiandae sit reprehenderit numquam
                    animi recusandae soluta doloremque, autem, commodi iste
                    natus distinctio voluptatibus, nobis consectetur culpa ullam
                    temporibus maxime! Soluta nesciunt, culpa adipisci at dolor
                    corporis natus harum accusantium, asperiores vitae,
                    exercitationem minima? Itaque cupiditate voluptatibus
                    obcaecati ullam. Inventore fugiat amet nostrum harum
                    sapiente! Autem quisquam recusandae aut vero delectus, eum
                    asperiores, velit itaque architecto iste soluta odio illum.
                    Eveniet velit tempora id minus, eligendi illum amet
                    veritatis autem voluptates. Doloremque quasi magni
                    cupiditate laboriosam, in quibusdam laudantium facilis totam
                    ipsum voluptatum? Eveniet labore aliquid iusto quidem
                    incidunt reiciendis harum aperiam ullam voluptatem sapiente
                    odio illo autem est quam iste nostrum dolores consequuntur
                    alias cum, sunt consectetur! Reprehenderit et, quia
                    provident aspernatur atque iure consectetur autem eveniet in
                    nobis ipsam, nemo perferendis quod animi. Velit fuga
                    possimus nulla odit nam necessitatibus nobis voluptate
                    delectus amet similique tempore officiis, provident nostrum
                    earum deleniti temporibus aspernatur hic! Sunt vitae, saepe
                    natus, distinctio excepturi expedita consequuntur qui soluta
                    magni eligendi sed veniam vel, beatae pariatur suscipit
                    doloremque quos laudantium modi ex nemo alias. Corporis
                    necessitatibus quas delectus eius ab illo veniam dicta
                    ducimus, magni rem! Amet quas dolorum tenetur adipisci ea
                    doloremque! Suscipit ipsa, asperiores illo eaque ipsam
                    tempora debitis harum beatae accusantium dolore voluptatum
                    ab sint! Atque eaque architecto ut esse vel in nesciunt
                    accusamus repudiandae dolorum aperiam, aliquam similique
                    alias eveniet temporibus voluptates excepturi nemo quasi
                    nostrum tempore aut! Beatae, minima adipisci fuga dolorum
                    quibusdam aspernatur perferendis dolorem est repudiandae
                    sed, quod quia alias rem harum accusantium velit obcaecati
                    animi dolor omnis tenetur aperiam labore eligendi
                    architecto. Distinctio quisquam quas, omnis ratione incidunt
                    sunt maiores repellendus placeat maxime aperiam? Aliquid
                    quasi sequi voluptates? Maxime odit cumque similique sequi
                    eaque mollitia sit, omnis voluptatum distinctio vitae
                    dolores quam praesentium autem nemo facilis, voluptate
                    voluptas, a aspernatur maiores molestias recusandae iste
                    enim accusamus dolorem. Voluptates minima quibusdam
                    sapiente, maxime beatae tempore ullam? Nulla exercitationem
                    distinctio vero maxime id quaerat assumenda, adipisci,
                    accusantium quidem impedit quibusdam?
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-slate-800 text-3xl font-medium">
                  Rekomendasi Lainnya:
                </h1>
                <div className="flex flex-wrap justify-between items-center container mx-auto py-10">
                  {dongengNusantara.map((data, index) => (
                    <Link
                      key={index}
                      to={`/dashboard/detail/${data.id}`}
                      className="cursor-pointer"
                    >
                      <Card
                        judul={data.judul}
                        img={data.cover}
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
