import React from "react";
import Navbar from "../../dashboard/component/Navbar";
import Button from "../Elements/Button/Button";
import WhyUs from "../layouts/WhyUs";
import Footer from "../../components/layouts/Footer";

const About = () => {
  return (
    <>
      {/* hero */}
      <section
        className="bg-cover bg-center bg-blend-darken relative"
        style={{
          backgroundImage: "url(/img/about.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "550px",
          paddingTop: "25px",
        }}
      >
        {/* navbar */}
        <Navbar />
        <div className="container mx-auto  mt-[150px]">
          <div className="text-white">
            <h1 className="text-6xl font-bold max-w-5xl mb-3">
              Lorem Ipsun Dolor Amet
            </h1>
            <p className="text-[18px] max-w-3xl mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto beatae obcaecati, voluptatum corrupti repudiandae perferendis nobis adipisci rem quisquam mollitia quae esse sunt iure corporis odit numquam voluptates quis quasi.
            </p>
            <Button
              color="bg-[#B2AFE7]"
              width="w-52"
              px="7"
              py="3"
              text="Lihat Selengkapnya"
            />
          </div>
        </div>
      </section>

      {/* kenapa kami? */}
      <WhyUs />

      {/* tentang kami */}
      

      {/* footer */}
      <Footer />
    </>
  );
};

export default About;
