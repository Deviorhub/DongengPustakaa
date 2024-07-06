import React from "react";

const WhyUs = () => {
  return (
    <section>
      <div className="container mx-auto px-8 mt-20 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Kenapa Kami?</h1>
          <p className="text-[18px] max-w-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            reprehenderit cumque sint eos ipsam officiis?
          </p>
          <div className="flex flex-col justify-center items-center lg:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="bg-[#F2F2F2] rounded-md w-80 lg:w-96">
              <img
                src=""
                alt=""
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Lorem, ipsum dolor.</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="bg-[#F2F2F2] rounded-md w-80 lg:w-96">
              <img
                src=""
                alt=""
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Lorem, ipsum dolor.</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="bg-[#F2F2F2] rounded-md w-80 lg:w-96">
              <img
                src=""
                alt=""
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Lorem, ipsum dolor.</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
