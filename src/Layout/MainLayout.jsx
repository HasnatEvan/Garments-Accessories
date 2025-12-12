import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";   // ⭐ Import

const MainLayout = () => {
    return (
        <div>

            <ScrollToTop />   {/* ⭐ Route change হলে top এ যাবে */}

            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
