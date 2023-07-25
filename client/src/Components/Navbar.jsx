import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { getUserID } from "../hooks/getUserID"
import { useState } from "react"
import { MobileMenu } from "./MobileMenu"

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"])
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const userID = getUserID()

    const nav = useNavigate()

    function handleLogout () {
        window.localStorage.removeItem("userID")
        setCookies("access_token", "");
        nav("/login")
    }

    return (
        <nav className="flex h-16 lg:h-26 px-4 z-20 justify-between items-center w-100%">
                <div className="flex justify-between items-center h-[30px]">
                    <Link to={"/"} className=" flex justify-center items-center">
                        <div className="flex flex-col justify-between items-center">
                            <span className="uppercase font-bold h-1/3 relative bottom-2 text-[10px]">easy</span>
                            <i className="fa-sharp fa-solid fa-camera-retro fa-lg"></i>
                        </div>
                        <div className="font-extrabold text-[40px]">
                            SHOOT
                        </div>
                    </Link>
                </div>
                <ul className="hidden lg:flex gap-10 font-medium">
                    <Link to={"/"} className="cursor-pointer hover:text-orange-600">
                        <p>Home</p>
                    </Link>
                    <Link to={"/about"} className="cursor-pointer hover:text-orange-600">
                        <p>About</p>
                    </Link>
                    <Link to={"/our-cameras"} className="cursor-pointer hover:text-orange-600">
                        <p>Our Cameras</p>
                    </Link>
                    <Link to={"/contact"} className="cursor-pointer hover:text-orange-600">
                        <p>Contact</p>
                    </Link>
                </ul>
                <div className="hidden lg:flex justify-around items-center font-bold">
                    {userID ? <Link to={"/account"} className="mx-2 py-2 px-3 cursor-pointer hover:text-orange-600">Account</Link>
                    :
                    <Link to={"/login"} className="mx-2 py-2 px-3 cursor-pointer hover:text-orange-600">Sign In</Link>
                }
                    {userID ? <button onClick={handleLogout} className="mx-2 py-2 px-3 cursor-pointer bg-orange-600 shadow-orange-700 shadow-sm hover:shadow-md text-white">Logout</button>
                    :
                    <Link to={"/register"} className="mx-2 py-2 px-3 cursor-pointer bg-orange-600 shadow-orange-700 shadow-sm hover:shadow-md text-white">Regster</Link>
                }
                </div>
                <i onClick={() => setShowMobileMenu(!showMobileMenu)} className="lg:hidden fa-solid fa-bars fa-xl"></i>
                {showMobileMenu && <MobileMenu handleLogout={handleLogout} setShowMobileMenu={setShowMobileMenu}/>}
            </nav>
    )
}