import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#8DAAE5] text-white mt-24 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center gap-8">
          <div className="col-span-2 lg:col-span-1">
            <h1 className="text-3xl font-bold mb-2">Dongeng Pustaka</h1>
            <p className="max-w-lg mx-auto mb-4">
              Lorem ipsum dolor sit amet consectetur. Odio quam lectus a porta
              lobortis etiam elit. Viverra fermentum aliquet ultricies vel
              aliquam egestas donec a aliquet.
            </p>
            <div className="flex gap-x-6 mb-5">
              <h5>Instagram</h5>
              <h5>Facebook</h5>
              <h5>Twitter</h5>
            </div>
            <h5 className="text-[13px]">Copyright © 2023 dongengpustaka.com</h5>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold mb-2">Tentang</h3>
            <ul className="space-y-2">
              <li>Tentang Kami</li>
              <li>Kebijakan Privasi</li>
              <li>Kontak</li>
              <li>Bantuan</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold mb-2">Cerita</h3>
            <ul className="space-y-2">
              <li>Cerita Rakyat</li>
              <li>Cerita Dongeng</li>
              <li>Cerita Horror</li>
              <li>Cerita Fabel</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold mb-2">Privacy</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
