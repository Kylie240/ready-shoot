import { useState } from "react";
import { BookingBanner } from "../Components/BookingBanner"
import { Breadcrumb } from "../Components/Breadcrumb"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [_, setCookies] = useCookies(['access_token']);

    const nav = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:3000/login",{email, password})
            if (res.data.message) {
                return alert(res.data.message)
            }
            setCookies("access_token", res.data.token)
            window.localStorage.setItem("userID", res.data.userID)
            alert("Login successful!")
            nav("/")
            window.scrollTo(0,0)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="relative">
            <Breadcrumb page="Sign In" />
            <div className="flex flex-col justify-center items-center mb-8 lg:m-32">
                <h4 className="text-3xl md:text-5xl font-bold p-8 text-center">Login To Your Account</h4>
                <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6 w-3/4 max-w-[600px]">
                    <div className="flex flex-col">
                        <label className="text-lg font-bold" htmlFor="email">Email<span className="font-bold text-orange-500">*</span></label>
                        <input placeholder="youremail@example.com" 
                                value={email}
                                className="bg-stone-200 p-4" 
                                type="email" 
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-bold" htmlFor="password">Password <span className="font-bold text-orange-500">*</span></label>
                        <input placeholder="password"
                                value={password} 
                                className="bg-stone-200 p-4" 
                                type="password" 
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"/>
                    </div>
                    <button type="submit" className="text-2xl font-semibold gap-2 flex justify-center items-center w-full py-4 px-3 cursor-pointer bg-orange-600 shadow-orange-700 shadow-sm hover:shadow-md text-white">
                        Sign In
                    </button>
                </form>
                <div className="flex md:flex-row flex-col mt-6 gap-2 text-lg font-semibold">
                    <p>Don't have an account?</p> 
                    <Link className="text-orange-500" to={'/register'}>Create one now.</Link>
                </div>
            </div>
            
            <BookingBanner />
        </div>
    )
}