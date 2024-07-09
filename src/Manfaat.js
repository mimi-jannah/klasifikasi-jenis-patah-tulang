import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Manfaat.css';

function Manfaat() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="py-12 px-5 bg-white">
      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold">
          <span className="text-black">Bone Cracking</span> <span className="text-blue-600">Classification</span>
        </h1>
      </div>
      <div className="flex justify-center">
        <Slider className="w-[1080px] flex" {...settings}>
          <div className="card p-5 bg-white border border-gray-300 rounded-lg shadow-md" style={{ margin: '0 10px' }}>
            <img src="ComminutedFracture.png" alt="Comminuted Fracture" />
            <h3 className="text-lg font-bold text-blue-600 mt-2">Comminuted Fracture</h3>
            <p className="text-sm text-gray-600">
              Comminuted fracture adalah kondisi ketika patah tulang patah atau hancur menjadi tiga bagian atau lebih
            </p>
          </div>
          <div className="card p-5 bg-white border border-gray-300 rounded-lg shadow-md" style={{ margin: '0 10px' }}>
            <img src="avulsionfracture.jpg" alt="Avulsion Fracture" />
            <h3 className="text-lg font-bold text-blue-600 mt-2">Avulsion Fracture</h3>
            <p className="text-sm text-gray-600">
              Avulsion fracture adalah kondisi patah tulang yang terjadi di dekat tendon atau ligamen, 
              sehingga tendon atau ligamen tersebut akan menarik potongan kecil yang patah menjauhi bagian tulang utama
            </p>
          </div>
          <div className="card p-5 bg-white border border-gray-300 rounded-lg shadow-md" style={{ margin: '0 10px' }}>
            <img src="compressioncrushfracture.jpg" alt="Compression Crush Fracture" />
            <h3 className="text-lg font-bold text-blue-600 mt-2">Compression Crush Fracture</h3>
            <p className="text-sm text-gray-600">
              Compression-crush fracture adalah kondisi ketika tulang mengalami tekanan atau gaya yang cukup besar sehingga menyebabkan tulang hancur atau remuk
            </p>
          </div>
          <div className="card p-5 bg-white border border-gray-300 rounded-lg shadow-md" style={{ margin: '0 10px' }}>
            <img src="fracturedislocation.png" alt="Fracture Dislocation" />
            <h3 className="text-lg font-bold text-blue-600 mt-2">Fracture Dislocation</h3>
            <p className="text-sm text-gray-600">
              Fracture dislocation adalah kondisi ketika tulang mengalami cedera yang mencakup patah tulang dan dislokasi sendi, 
              tulang mengalami patah di dekat sendi
            </p>
          </div>
          <div className="card p-5 bg-white border border-gray-300 rounded-lg shadow-md" style={{ margin: '0 10px' }}>
            <img src="longitudinalfracture.jpg" alt="Longitudinal Fracture" />
            <h3 className="text-lg font-bold text-blue-600 mt-2">Longitudinal Fracture</h3>
            <p className="text-sm text-gray-600">
              Longitudinal fracture adalah jenis patah tulang di mana garis patahan mengikuti arah panjang tulang, 
              biasanya sejajar dengan sumbu panjang tulang
            </p>
          </div>
          <div className="card p-5 bg-white border border-gray-300 rounded-lg shadow-md" style={{ margin: '0 10px' }}>
            <img src="obliquefracture.png" alt="Oblique Fracture" />
            <h3 className="text-lg font-bold text-blue-600 mt-2">Oblique Fracture</h3>
            <p className="text-sm text-gray-600">
              Oblique fracture adalah jenis patah tulang di mana garis patahannya berbentuk miring atau diagonal terhadap sumbu panjang tulang  .
            </p>
          </div>
          <div className="card p-5 bg-white border border-gray-300 rounded-lg shadow-md" style={{ margin: '0 10px' }}>
            <img src="spiralfracture.jpg" alt="Spiral Fracture" />
            <h3 className="text-lg font-bold text-blue-600 mt-2">Spiral Fracture</h3>
            <p className="text-sm text-gray-600">
              Spiral fracture adalah jenis patah tulang di mana garis patahannya berputar di sekitar sumbu panjang tulang mirip dengan bentuk spiral, 
              terjadi akibat rotasi pada tulang. 
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Manfaat;
