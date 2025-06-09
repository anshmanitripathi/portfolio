import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profilePic from './assets/profile.jpg';




export const About = () => {
  return (
    <section
      id="about"
      className="pt-4 px-[7vw] md:px-[7vw] lg:px-[14vw] font-sans mt-16 md:mt-24 lg:mt-16"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[gray] mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[black] mb-4 leading-tight">
            Ansh Mani Tripathi
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-[gray]">I am a </span>
            <TypeAnimation
              sequence={[
                'Fullstack Developer',
                2000,
                'Problem Solver',
                2000,
                'AI Enthusiast',
                2000,
                'Freelancer',
                2000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              style={{ display: 'inline-block', color: 'black' }}
            />

          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-700 mb-10 mt-8 leading-relaxed">
            I'm a passionate developer focused on building impactful tech solutions at the intersection of 
            full-stack development and artificial intelligence.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1RUMPq6ZWcC54mYFt1Gez_wBzMDTRh60u/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, gray, black)',
              boxShadow: '0 0 2px #gray, 0 0 2px #gray, 0 0 40px gray',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[24rem] md:h-[24rem] border-1 border-gray-700 rounded-full"
            tiltMaxAngleX={0}
            tiltMaxAngleY={0}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profilePic}
              alt="Ansh Mani Tripathi"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(114,114,114,0.7)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};
