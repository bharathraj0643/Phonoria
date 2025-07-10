import { Outlet } from "react-router-dom";
import Header from "./components/Home page/Header";
import Footer from "./components/Home page/Footer";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout