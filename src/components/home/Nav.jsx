import { useState } from "react";
import { Link } from "react-router-dom";
import logo from ".../assets/images/logo.png"

import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (

    <div
        className=" fixed top-0  w-full  flex bg-gray-50
        items-center justify-between py-3 mx-auto px-5  z-10 shadow-lg rounded-b-xl"
      >
        <div>
           <Link className="flex items-center w-25 gap-4 md:gap-8">
           <img src={logo} alt="" className="w-16"  />
            <p className="text-lg lg:text-3xl font-sans text-gray-700 cursor-pointer font-semibold">Fatima Specialist Hospital & Maternity</p>
           </Link> 
        </div>
        
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
          <Link to="about" className="textbase md:text-lg lg:text-xl text-gray-700 cursor-pointer hover:bg-gradient-to-r from-red-400 to-blue-500 hover:bg-clip-text hover:text-transparent">About</Link>
          <Link to="services" className="text-lg lg:text-xl text-gray-700 cursor-pointer hover:bg-gradient-to-r from-red-400 to-blue-500 hover:bg-clip-text hover:text-transparent">Services</Link>
          <Link to="contacts" className="text-lg lg:text-xl text-gray-700 cursor-pointer hover:bg-gradient-to-r from-red-400 to-blue-500 hover:bg-clip-text hover:text-transparent">Contacts</Link>
          
        </ul>

        
        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-gray-700"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />

        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-gray-100 h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />

          <ul className="pt-[60px] items-center flex flex-col gap-8">
            <Link to="about" className="text-lg text-black hover:text-white cursor-pointer hover:bg-gradient-to-r from-red-400 to-blue-500 w-full text-center rounded-md"  >
              About
            </Link>
            <Link to="services" className="text-lg text-black hover:text-white cursor-pointer hover:bg-gradient-to-r from-red-400 to-blue-500 w-full text-center rounded-md" >
              Services
            </Link>
            <Link to="contacts" className="text-lg text-black hover:text-white cursor-pointer hover:bg-gradient-to-r from-red-400 to-blue-500 w-full text-center rounded-md" >
              Contacts
            </Link>
           
          </ul>

          
        </div>
      </div>
    
     );
}
 
export default Nav;