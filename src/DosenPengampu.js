import React from 'react';

const DosenPengampu = () => {
  const dosenList = [
    {
      name: 'Muhammad Mahrus Zain, S.S.T., M.T.I.',
      role: 'Dosen Framework Lanjutan',
      image: 'pakmahrus.jpg',
    },
    {
      name: 'Mardhiah Fadli, S.T., M.T.',
      role: 'Dosen Manajemen Proyek',
      image: 'bukmardiah.jpg',
    },
    {
      name: 'Dini Nurmalasari, S.T., M.T',
      role: 'Dosen Data Mining',
      image: 'bukdini.jpg',
    },
  ];

  const handleClick = (dosen) => {
    alert(`Nama: ${dosen.name}\nRole: ${dosen.role}`);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Dosen Pengampu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          {dosenList.map((dosen, index) => (
            <div
              key={index}
              className="w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={() => handleClick(dosen)}
            >
              <img
                src={dosen.image}
                alt={dosen.name}
                className="w-full h-full"
              />
              <div className="p-4 bg-gray-800 text-white">
                <h3 className="font-semibold text-lg">{dosen.name}</h3>
                <p className="text-sm">{dosen.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">&copy; Kelompok 7 - Miftah & Rizqa</p>
        </div>
      </div>
    </div>
  );
};

export default DosenPengampu;
