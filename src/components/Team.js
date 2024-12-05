import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tria from "../assets/tria.jpg";
import puji from "../assets/puji.jpg"; 
import ezar from "../assets/ezar.jpg"; 
import kurnia from "../assets/kurnia.jpg"; 
import iqra from "../assets/iqra.jpg"; 
import nadia from "../assets/nadia.jpg"; 
import '../../src/components/Team'; // Jika ada CSS global
import Header from "../components/Header";
import Footer from "../components/Footer";





const teamMembers = [
  {
    name: "Tria Novitri",
    role: "Writer",
    contact: "xxxx1233",
    imageUrl:tria,
  },
  {
    name: "Puji Rachmawati",
    role: "Data Engineer",
    contact: "xxxx1233",
    imageUrl:puji,
  },
  {
    name: "Ezar Satria Pramana",
    role: "Machine Learning",
    contact: "xxxx1233",
    imageUrl:ezar,

  },
  {
    name: "Kurnia Anggie Oktiriana",
    role: "UI/UX Designer",
    contact: "xxxx1233",
    imageUrl:kurnia,
  },
  {
    name: "Nadia Nur Ismalia",
    role: "Frontend Developer",
    contact: "xxxx1233",
    imageUrl:nadia,
  },
  {
    name: "Iqra Manaqibal Atiqya",
    role: "Backend Developer",
    contact: "xxxx1233",
    imageUrl:iqra,
  },
];

const Team = () => {
  const settings = {
    dots: true, // Menampilkan navigasi titik
    infinite: false, // Slider terus berputar
    speed: 500, // Kecepatan transisi
    slidesToShow: 3, // Jumlah kartu yang ditampilkan
    slidesToScroll: 1, // Jumlah kartu yang digeser
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-blue-500 py-12">
      <Header />
      <div className="text-center text-white">
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <p className="mt-2 text-lg">
          Developers, researchers, and designers who built this system to help
          and recommend your medication.
        </p>
      </div>
      <div className="w-64 h-64 mt-10 max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <img
                className="mx-auto rounded-full w-24 h-24"
                src={member.imageUrl}
                alt={member.name}
              />
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-blue-500">{member.role}</p>
              <p className="text-sm text-gray-500 mt-2">{member.contact}</p>
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
