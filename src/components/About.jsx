import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
Highly motivated and Enthusiastic Btech CSE Undergrad looking to fill a
position as a Web Developer in a productive team environment. Have
hands on experience of working with ReactJS and actively exploring
NodeJS and MongoDB. Wishing to use strong designing and problem-solving skills to contribute my best to the team.

        </p>

        <br />

        <p className="text-xl">
I have worked as a Web Development Intern in Sensegood Instuments. 
During the internship my task was to develop sensegoodinstruments.com from scratch. It is an
ecommerce platform selling color measurement and management
instruments. Techstack used in the website is ReactJS and Django
        </p>
      </div>
    </div>
  );
};

export default About;
