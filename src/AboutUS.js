import React from "react";
import Image from "./images/data.png";

function AboutUs() {
  return (
    <section id="AboutUs" className="bg-[#E1EEFF]">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:flex lg:items-center">
        <div className="lg:w-1/2 flex justify-center lg:justify-start order-1">
          <img src={Image} alt="Medical Professional" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="lg:w-1/2 order-2 lg:pl-12">
          <h1 className="text-[#0360D9] text-4xl font-bold mb-4 text-left">
            <span className="text-black">Bone Cracking</span> Detector
          </h1>
          <p className="text-gray-700 text-lg text-left">
            Kami adalah platform yang didedikasikan untuk membantu Anda mengetahui jenis patah tulang berdasarkan hasil radiografi. Di sini, kami menyediakan informasi tentang jenis patah tulang yang anda alami dari hasil radiografi.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
