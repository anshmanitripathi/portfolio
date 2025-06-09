import React, { useEffect } from 'react'
import { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // check scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sectionOffsets = menuItems.map(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return { id, offsetTop: rect.top };
        }
        return null;
      }).filter(Boolean);

      // find the section closest to top (within view)
      const currentSection = sectionOffsets.find(
        section => section.offsetTop >= 0 && section.offsetTop < window.innerHeight / 2
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    {id:"testimonials", label:"Testimonials"},
    { id: "education", label: "Education" },
    {id:"contact", label:"Contact"}
    
  ];


  return (
    <nav className={`fixed top-0 w-full z-50 transition-duration-300 px-[7vw]  md:px-[7vw] lg:px-[7vw] ${isScrolled ? "bg-[white] bg-opacity-50 backdrop-blur-md shadow-md border-b-[2px] border-[gray]" : 'bg-[white] border-b-[2px] border-[gray]'}`} >
      <div className=' py-5 flex justify-between items-center'>
        {/* logo */}
        <div className='text-lg font-bold cursor-pointer'>
          <span className='text-[gray]'>&lt; </span>
          <span className='text-[black]'> Ansh </span>
          <span className='text-[black]'>Mani </span>
          <span className='text-[black]'>Tripathi</span>
          <span className='text-[gray]'> /&gt;</span>
        </div>

        {/* Desktop menu */}
        <ul className='hidden md:flex space-x-8 text-[#374151]-400 font-semibold'>
          {menuItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-[#030712] hover:font-bold ${activeSection === item.id ? "text-[black] font-bold" : ""
              }`} >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>


        {/* social media icons  */}

        <div className='hidden md:flex space-x-4'>
          <a
            href="https://github.com/anshmanitripathi"
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray hover:text-black'
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ansh-mani-tripathi-58a3b3288/"
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray hover:text-black'
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/anshmanitripathi7?igsh=MThwdWJzM2R3MWJjdA=="
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray hover:text-black'
          >
            <FaInstagram size={24} />
          </a>

        </div>

        {/* Mobile menu icons */}

        <div className='md:hidden'>
          {
            isOpen ? (
              <FiX className='text-3xl text-[black] cursor-pointer'
                onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className='text-3xl text-[black] cursor-pointer'
                onClick={() => setIsOpen(true)} />
            )
          }

        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full bg-[gray] bg-opacity-30 backdrop-filter backdrop-blur-md z-50 shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-[black]">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[black] hover:font-semibold ${activeSection === item.id ? "text-[black] font-semibold" : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/anshmanitripathi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ansh-mani-tripathi-58a3b3288/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}
