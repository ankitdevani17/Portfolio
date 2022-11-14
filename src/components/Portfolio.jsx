import React from "react";

import {useNavigate} from "react-router-dom"

const Portfolio = () => {
const Navigate = useNavigate();
  const portfolios = [
    {
      id: 1,
      
      demolink : "https://github.com/ankitdevani17/Sensegood",
      srclink : "https://github.com/ankitdevani17/Sensegood",
      title : "Sensegood Instruments",
      desc : "Sensegood is an ecommerce platform selling color measurement and management instruments. I worked on more than 90% of the features of the using ReactJS during my internship period."
    },
    {
      id: 2,
  
      demolink : "https://splendid-concha-bd9311.netlify.app/",
      srclink : "https://github.com/ankitdevani17/Resume-Builder",
      title : "Resume Builder",
      desc : "Resume Builder is a frontend based webapp which allows user to create his/her own Resume just by filling in basic details."
    },
    {
      id: 3,
      
      demolink : "https://github.com/ankitdevani17/Squaddle",
      srclink : "https://github.com/ankitdevani17/Squaddle",
      title : "Squaddle",
      desc : "A platform to connect developers. For instance, A frontendd developer can connect with backend developer for a particular project or any other help required if it seems best to both"
    },
    {
      id: 4,
   
      demolink : "https://github.com/vinaykakkad/Airline-management-system",
      srclink : "https://github.com/vinaykakkad/Airline-management-system",
      title : "Airline System",
      desc : " Airport Management System is an application of Database Management that deals with the management of Airport, Airlines, Employees & Passengers."

    },
    {
      id: 5,
      demolink : "https://github.com/ankitdevani17/admin-dashboard",
      srclink : "https://github.com/ankitdevani17/admin-dashboard",
      title : "React Admin Dashboard",
      desc : "This application is ready to use admin dashboard which consists of 4 different Charts, 3 different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
    },
    {
      id: 6,
 
      demolink : "https://github.com/ankitdevani17/Cryptography-Using-Linear-Algebra",
      srclink : "https://github.com/ankitdevani17/Cryptography-Using-Linear-Algebra",
      title : "Cryptography",
      desc:"Encryption and Decryption of text and image Using Linear Algebra. The project uses Hill Cipher and Advanced Hill Cipher for successful implementation"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid pb-40 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, title, desc, demolink, srclink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg h-full flex flex-col">

              {/* <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              /> */}
              <div className="flex items-center justify-center" style ={{}}>
              <h1 className = "py-3 font-bold text-xl text-decoration-line: underline">{title}</h1>
              </div>
              <div className = "px-2 py-3 flex flex-col justify-between flex-1">
                <p className = "text-sm">{desc}</p>
              </div>
            
              <div className="flex items-center justify-center">
              <a href={demolink}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
                
              
<a href = {srclink}>
                <button      type="button"
   className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
            </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
