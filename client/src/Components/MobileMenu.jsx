import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { getUserID } from "../hooks/getUserID"

export const MobileMenu = ({setShowMobileMenu}) => {
    const [cookies, setCookies] = useCookies(["access_token"])
    const nav = useNavigate()
    
    function handleLogout () {
        window.localStorage.removeItem("userID")
        setCookies("access_token", "");
        nav("/login")
        setShowMobileMenu(false)
    }

    const userID = getUserID()
    return(
        <div className="fixed lg:hidden flex flex-col justify-center items-center left-0 top-0 h-screen w-screen z-40 bg-white text-black text-7xl">
                <i onClick={() => setShowMobileMenu(false)}
                    className="absolute cursor-pointer top-8 right-8 fa-sharp fa-solid m-4 fa-x fa-2xs"></i>
            <div className="relative p-8">
                <ul className="p-5 text-md flex flex-col items-center"> 
                    <li>
                        <Link to={'/'} 
                        onClick={() => setShowMobileMenu(false)}
                        className="hover:text-orange-500 text-black text-[26px]">Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'} 
                        onClick={() => setShowMobileMenu(false)}
                        className="hover:text-orange-500 text-black text-[26px]">About</Link>
                    </li>
                    <li>
                        <Link to={'/our-cameras'} 
                        onClick={() => setShowMobileMenu(false)}
                        className="hover:text-orange-500 text-black text-[26px]">Our Cameras</Link>
                    </li>
                    <li>
                        <Link to={'/contact'} 
                        onClick={() => setShowMobileMenu(false)}
                        className="hover:text-orange-500 text-black text-[26px]">Contact</Link>
                    </li>
                    {userID ? 
                        <ul>
                            <li>
                                <Link to={'/account'} 
                                onClick={() => setShowMobileMenu(false)}
                                className="hover:text-orange-500 text-black text-[26px]">Account</Link>
                            </li>
                            
                            <li>
                                <Link 
                                onClick={() => handleLogout()}
                                className="hover:text-orange-500 text-black text-[26px]">Logout</Link>
                            </li>
                        </ul>
                        :
                        <li>
                            <Link to={'/login'} 
                            onClick={() => setShowMobileMenu(false)}
                            className="hover:text-orange-500 text-black text-[26px]">Login</Link>
                        </li>
                        }
                </ul>
            </div>
        </div>
    )
}