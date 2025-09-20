import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactIcon from "../components/ContactIcon";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ContactIcon></ContactIcon>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;