import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';

const Navbar = () => {


    // Dark Mode Start
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")
    }
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark"){
        setDarkMode();
    }
    else setLightMode();
    //setDarkMode()
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode()
    }

    // Dark Mode End



    const user = false


    const handleLogOut = () => {

    }

    const navLinks = <>
        <li className=""><NavLink to="/" className="mr-2 text-emerald-900">Home</NavLink></li>
        <li><NavLink to="/tours" className="mr-2">All Tourists Spot</NavLink></li>

        {user ? <>
                <li><NavLink to="/addtour" className="mr-2">Add Tourists Spot</NavLink></li>
                <li><NavLink to="/mylist" className="mr-2">My List</NavLink></li>
            </>
            :
            <>

            </>
        }


        <li><NavLink to="/about" className="mr-2">About</NavLink></li>
        <li><NavLink to="/contact" className="mr-2">Contact Us</NavLink></li>

        {/*<li><NavLink to="/contact" className={({ isActive }) => ["text-white", isActive ? "text-white bg-indigo-600" : "text-black "].filter(Boolean).join(" ")}*/}
        {/*>Contact Us</NavLink></li>*/}

        {/*<li><NavLink to="/login" className="mr-2">Login</NavLink></li>*/}
        {/*<li><NavLink to="/register" className="mr-2">Register</NavLink></li>*/}

    </>


    return (
        <div>
            <div className={'navbar bg-base-100 px-20'}>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <Link to="/">
                        <button className="btn btn-ghost text-xl hover:bg-emerald-600 hover:text-white">Happy Tour
                        </button>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button"
                                         className="btn btn-ghost btn-circle avatar lg:tooltip lg:tooltip-bottom"
                                         data-tip={user.displayName}>
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component"
                                                 src={user.photoURL}/>
                                        </div>
                                    </div>
                                    <ul tabIndex={0}
                                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                                        <li>
                                            <a className="justify-between">
                                                Hello! {
                                                user ? user.displayName : "User"
                                            }

                                            </a>
                                        </li>
                                        <li><Link to='/updateProfile'>Update Profile</Link></li>
                                        <li><a onClick={handleLogOut}>Logout</a></li>
                                    </ul>
                                </div>
                            </>
                            :
                            <Link to="/login">
                                <button className="ml-4 btn bg-emerald-600 text-white">Login</button>
                            </Link>
                    }


                    {/*  Dark mode Toggle  */}
                    <label className="flex cursor-pointer gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"/>
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                        </svg>
                        <input
                            type="checkbox"
                            id="darkmode-toggle"
                            onChange={toggleTheme}
                            defaultChecked={selectedTheme === "dark"}
                            className="toggle theme-controller"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>


                </div>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default Navbar;