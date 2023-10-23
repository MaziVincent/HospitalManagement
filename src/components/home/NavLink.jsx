import { Link } from "react-router-dom";

const NavLink = ({ children, to,  mobileMenu = false }) => {
    const className = mobileMenu
      ? "text-lg text-black hover:text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] w-full text-center"
      : "text-lg lg:text-xl text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent";
  
    return ( <>
    
    {/* <Link
      to={to}
      className={className}
    >
      {children}
    </Link> */}
    
    
    </> );
}
 
export default NavLink;