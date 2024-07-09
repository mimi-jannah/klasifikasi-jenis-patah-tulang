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
      description: "Patah tulang yang terjadi ketika sepotong kecil tulang terlepas dari bagian utama tulang karena tarikan kuat dari otot atau ligamen yang melekat pada tulang tersebut",
    },
    1: {
      label: "Comminuted Fracture",
      description: "Patah tulang yang terjadi menjadi beberapa bagian kecil atau serpihan.Ini biasanya disebabkan oleh trauma dengan energi tinggi, seperti kecelakaan kendaraan bermotor.",
    },
    2: {
      label: "Compression Crush Fracture",
      description: "Patah tulang ini biasanya terjadi pada tulang belakang (vertebrae) ketika tulang mengalami tekanan yang berlebihan, sehingga tulang tersebut hancur atau tertekan.",
    },
    3: {
      label: "Fracture Dislocation",
      description: "Jenis ini terjadi ketika tulang patah dan sendi terlepas dari tempatnya. Ini adalah kombinasi antara patah tulang dan dislokasi sendi.",
    },
    4: {
      label: "Longitudinal Fracture",
      description: "Pada patah tulang ini, garis patahan terjadi sejajar dengan sumbu panjang tulang. Ini sering kali terjadi akibat trauma langsung pada tulang.",
    },
    5: {
      label: "Oblique Fracture",
      description: "Jenis ini terjadi ketika garis patahan membentuk sudut terhadap sumbu panjang tulang. Ini bisa terjadi akibat trauma dari sudut atau kekuatan rotasional.",
    },
    6: {
      label: "Spiral Fracture",
      description: "Patah tulang ini memiliki garis patahan yang melingkar atau berputar di sepanjang tulang. Biasanya disebabkan oleh gaya torsi atau putaran yang kuat pada tulang, seperti yang mungkin terjadi pada kecelakaan olahraga atau aktivitas fisik berat lainnya",
    },
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setUploadedFile(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://6d33-104-196-2-64.ngrok-free.app/predict",
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
