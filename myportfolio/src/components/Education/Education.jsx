import React from 'react';
import { education } from "../../constants";

export const Education = () => {
  return (
    <section
      id="education"
      className="pt-24 px-[12vw] md:px-[7vw] lg:px-[14vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black">EDUCATION</h2>
        <div className="w-56 h-1 bg-gray-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="hidden sm:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-black h-full z-0"></div>

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className={`relative z-10 flex flex-col sm:flex-row items-center mb-16 ${isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
            >
              {/* Timeline Dot */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black border-4 border-white rounded-full z-10"></div>

              {/* Card */}
              <div
                className={`w-full sm:w-[45%] p-6 rounded-2xl border border-gray-300 bg-white shadow-xl transition-transform duration-300 hover:scale-105 ${isLeft ? "sm:ml-0 sm:mr-auto" : "sm:ml-auto sm:mr-0"
                  }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-16 bg-black rounded overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black">{edu.degree}</h3>
                    <p className="text-sm text-gray-600">{edu.school}</p>
                    <p className="text-sm text-gray-400 mt-1">{edu.date}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-500 font-semibold">Grade: {edu.grade}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
