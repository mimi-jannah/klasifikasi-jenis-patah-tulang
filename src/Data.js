import React from "react";
import Image from "./images/tulang-image.png";

function AboutUs() {
  return (
    <section className="bg-[#F0F8FF]">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 order-1">
          <h1 className="text-black text-4xl font-bold mb-4">
            Patah Tulang Terbuka
          </h1>
          <p className="text-gray-500 mb-4">
            Kami adalah platform yang didedikasikan untuk membantu Anda mengetahui jenis patah tulang berdasarkan hasil radiografi. 
            Di sini, kami menyediakan informasi tentang jenis patah tulang yang anda alami, dari hasil radiografi.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 order-2">
          <img src={Image} alt="Medical Professional" className="w-3/4 rounded-lg shadow-lg" />
        </div>
      </div>
      
    </section>
    
  );
}

export default AboutUs;
