import { Outlet } from "react-router-dom";
import Navber from "../Pages/Home/Navber/Navber";
import Footer from "../Pages/Home/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;