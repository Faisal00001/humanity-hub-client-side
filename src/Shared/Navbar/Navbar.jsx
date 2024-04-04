import { useContext } from "react";
import { BiLogoMongodb } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error.message))
    }
    const navOptions = <>
        <li className="font-medium">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className="font-medium">
            <NavLink
                to="/reportIncident"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Report an Incident
            </NavLink>
        </li>
        <li>

        </li>
        <li className="font-semibold">
            {
                user?.email ? <>
                    <button onClick={handleLogout}>
                        LogOut
                    </button>

                </> : <>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Login
                    </NavLink>
                </>
            }

        </li>
    </>
    return (
        <div className="navbar fixed z-50 backdrop-blur-md bg-white/30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navOptions
                        }
                    </ul>
                </div>

                <div className="flex gap-2 items-center">
                    <BiLogoMongodb className="text-red-500 text-4xl"></BiLogoMongodb>
                    <div className="text-2xl font-semibold"> Humanity Hub</div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navOptions
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user?.email ? <>
                        <div className="avatar online">
                            <div className="w-12 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    </> : <>

                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;