import React from "react";
import { Link } from "react-scroll";
import Image from "./images/dokter.png";
import CurveLine from "./images/Vector8.png"; // Adjust the path to your curve line image
import CircleShape from "./images/Ellipse16.png"; // Adjust the path to your circle shape image

function HeroSection() {
  return (
    <section id="home" className="bg-[#E7ECFF]">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 text-left">
          <h1 className="max-w-2xl text-[#091133] mb-4 text-2xl xl:pb-[22px] font-bold tracking-tight leading-[66px] xl:leading-[66px] md:text-5xl xl:text-4xl relative">
            <span className="text-[#0360D9]">Pemulihan Tulang</span> Optimal Untuk<br />
            Masa Depan yang Lebih Sehat
            <img src={CurveLine} alt="Curve Line" className="absolute my-5 left-0 w-[250px]" />
          </h1>
          <div className="w-[419px]">
          <p className="max-w-2xl text-gray-600 mb-8 text-[20px] leading-relaxed">
            Dengan teknologi canggih mengetahui jenis patah tulang dengan cepat dan akurat.
          </p>
          </div>
          <Link
            to="imageprocessing"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="inline-flex items-center w-[189px] h-[49px] justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#0360D9] hover:bg-[#0253B7] focus:ring-4 focus:ring-[#0360D9]/50 cursor-pointer"
          >
            Cek Hasil Radiologi
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center relative">
          <img src={CircleShape} alt="Circle Shape" className="absolute bottom-0 z-0" />
          <img src={Image} alt="Dokter" className="relative z-10" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;