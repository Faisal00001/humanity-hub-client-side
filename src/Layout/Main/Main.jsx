import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster
                position="top-center"
            />
        </div>
    );
};

export default Main;