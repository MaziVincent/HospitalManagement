
import { Outlet } from "react-router-dom";
import Nav from "../home/Nav";
import Footer from "../shared/Footer";


const Layout = () => {
    return ( 
    
    <>

        <Nav />

        <Outlet />

        <Footer/>

        

    </> );
}
 
export default Layout;