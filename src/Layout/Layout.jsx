import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout;

/* 
    blue: {
        100: "#cce6cc",
        200: "#99cc99",
        300: "#66b366",
        400: "#339933",
        500: "#008000",
        600: "#006600",
        700: "#004d00",
        800: "#003300",
        900: "#001a00"
},
*/