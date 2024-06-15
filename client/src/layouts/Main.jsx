import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div>
            {/* Navbar */}
            <NavBar />
            {/* Outlet */}
            <div className="min-h-[calc(100vh-306px)]">
                <Outlet />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Main;