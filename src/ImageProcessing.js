import React, { useState } from "react";
import axios from "axios";
import Image from "./images/tulang-image.png";

export default function ImageProcessing() {
  const [predictedLabel, setPredictedLabel] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [status, setStatus] = useState("");
  const [confidence, setConfidence] = useState("");

  const labelDescriptions = {
    0: {
      label: "Avulsion Fracture",
      description: "Patah tulang yang terjadi ketika sepotong kecil tulang terlepas dari bagian utama tulang karena tarikan kuat dari otot atau ligamen yang melekat pada tulang tersebut.Pengobatan avulsion fracture bervariasi tergantung pada tingkat keparahan cedera. Beberapa kasus mungkin memerlukan hanya istirahat dan imobilisasi, sementara yang lain mungkin memerlukan intervensi bedah.",
    },
    1: {
      label: "Comminuted Fracture",
      description: "Patah tulang yang terjadi menjadi beberapa bagian kecil atau serpihan.Ini biasanya disebabkan oleh trauma dengan energi tinggi, seperti kecelakaan kendaraan bermotor.Pengobatan comminuted fracture melibatkan imobilisasi menggunakan gips atau belat untuk menjaga fragmen tulang tetap pada posisinya, dan sering kali diperlukan pembedahan untuk menstabilkan fragmen tulang dengan pelat logam, sekrup, atau batang logam. Setelah tulang mulai sembuh, terapi fisik dilakukan untuk memulihkan fungsi dan kekuatan anggota tubuh yang terkena. Traksi mungkin juga digunakan dalam beberapa kasus untuk mengatur fragmen tulang melalui tarikan yang terus-menerus.",
    },
    2: {
      label: "Compression Crush Fracture",
      description: "Patah tulang ini biasanya terjadi pada tulang belakang (vertebrae) ketika tulang mengalami tekanan yang berlebihan, sehingga tulang tersebut hancur atau tertekan.Pengobatan compression crush fracture melibatkan istirahat dan imobilisasi untuk mengurangi tekanan pada tulang yang terkena, penggunaan brace atau korset untuk mendukung tulang belakang, serta medikasi untuk mengelola nyeri dan menguatkan tulang dengan suplemen kalsium dan vitamin D. Terapi fisik diperlukan untuk memperkuat otot-otot penyangga dan meningkatkan fleksibilitas. Dalam kasus yang parah, pembedahan seperti vertebroplasty atau kyphoplasty mungkin diperlukan untuk menstabilkan tulang belakang dan mengurangi nyeri.",
    },
    3: {
      label: "Fracture Dislocation",
      description: "Jenis ini terjadi ketika tulang patah dan sendi terlepas dari tempatnya. Ini adalah kombinasi antara patah tulang dan dislokasi sendi.Pengobatan fracture dislocation biasanya memerlukan reposisi (mengembalikan posisi tulang dan sendi ke tempatnya semula), imobilisasi, dan dalam beberapa kasus, pembedahan. Proses pemulihan juga sering melibatkan fisioterapi untuk memulihkan fungsi sendi dan kekuatan otot.",
    },
    4: {
      label: "Longitudinal Fracture",
      description: "Pada patah tulang ini, garis patahan terjadi sejajar dengan sumbu panjang tulang. Ini sering kali terjadi akibat trauma langsung pada tulang.Pengobatan longitudinal fracture melibatkan imobilisasi dengan gips atau belat untuk menjaga fragmen tulang tetap pada posisinya dan memungkinkan penyembuhan. Obat pereda nyeri dapat diberikan untuk mengelola rasa sakit, dan terapi fisik mungkin diperlukan setelah penyembuhan awal untuk memulihkan kekuatan dan fungsi anggota tubuh yang terkena.",
    },
    5: {
      label: "Oblique Fracture",
      description: "Jenis ini terjadi ketika garis patahan membentuk sudut terhadap sumbu panjang tulang. Ini bisa terjadi akibat trauma dari sudut atau kekuatan rotasional.Pengobatan oblique fracture melibatkan reposisi tulang yang patah (jika diperlukan) dan imobilisasi menggunakan gips atau belat.",
    },
    6: {
      label: "Spiral Fracture",
      description: "Patah tulang ini memiliki garis patahan yang melingkar atau berputar di sepanjang tulang. Biasanya disebabkan oleh gaya torsi atau putaran yang kuat pada tulang, seperti yang mungkin terjadi pada kecelakaan olahraga atau aktivitas fisik berat lainnya.Pengobatan spiral fracture sering kali memerlukan reposisi tulang yang patah dan imobilisasi dengan gips atau belat. Jika fragmen tulang tidak stabil, pembedahan dengan pelat logam atau sekrup mungkin diperlukan. Setelah fase awal penyembuhan, terapi fisik dilakukan untuk mengembalikan kekuatan dan fungsi anggota tubuh yang terkena.",
    },
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setUploadedFile(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://b2f9-34-23-244-11.ngrok-free.app/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;
      if (data.success) {
        setStatus("File berhasil diproses!");
        const labelData = labelDescriptions[data.label];
        if (labelData) {
          setPredictedLabel(labelData.label);
          setDescription(labelData.description);
          setConfidence(data.confidence.toFixed(2));
        }
      } else {
        setStatus("File gagal diproses!");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Terjadi kesalahan saat memproses file!");
    }
  };

  return (
    <div className="mx-[204px]">
      <section className="bg-[#0360D9] py-12  flex justify-center items-center" id="process">
        <div className="container mx-auto flex flex-col items-center px-4">
          <div className="w-full md:w-1/2 bg-white p-4 rounded shadow-md mt-8 mb-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#1E174C] mb-4 text-center">
              Upload Files
            </h2>
            <input
              type="file"
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Max file size: 10MB. Supported file types: JPG, PNG.
            </p>
            <div id="status" className="text-sm text-gray-700 mt-2 text-center">
              {status}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 order-1">
          {predictedLabel && (
            <>
              <h1 className="text-black text-4xl font-bold mb-4 text-left">
                {predictedLabel}
              </h1>
              <p className="text-black-500 mb-4 text-left">
                {description}
              </p>
              <p className="text-black-500 mb-4 text-left">
                <div className="text-2xl font-bold font-dm-serif-text text-[#1E174C]">
                  Akurasi
                </div>
                {confidence}
              </p>
            </>
          )}
        </div>
        {uploadedFile && (
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 order-2">
            <img src={uploadedFile} alt="Medical Professional" className="w-3/4 rounded-lg shadow-lg" />
          </div>
        )}
      </div>
    </div>
  );
}
