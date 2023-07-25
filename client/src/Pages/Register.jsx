import { useState } from "react";
import { BookingBanner } from "../Components/BookingBanner"
import { Breadcrumb } from "../Components/Breadcrumb"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

export const Register = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const nav = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("https://ready-shoot.onrender.com/register",
             {username, lastname, firstname, password, email});
             if (res.data.message !== "User registered successfully!") {
                return alert(res.data.message)
            }
            if (res.data.message === "User registered successfully!") {
                nav("/login") 
            }
            
        } catch (error) {
            console.log(error);
        }

    } 

    return (
        <div className="relative">
            <Breadcrumb page="Register" />
            <div className="flex flex-col justify-center items-center mb-8 lg:m-32">
                <h4 className="text-3xl md:text-5xl font-bold p-8">Create An Account</h4>
                <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6 w-3/4 max-w-[600px]">
                    <div className="flex flex-col">
                        <label className="text-lg font-bold" htmlFor="name">First Name <span className="font-bold text-orange-500">*</span></label>
                        <input placeholder="Joe" 
                                value={firstname}
                                className="bg-stone-200 p-4" 
                                type="text" 
                                required
                                onChange={(e) => setFirstname(e.target.value)}
                                name="name"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-bold" htmlFor="lastName">Last Name</label>
                        <input placeholder="Smith" 
                                value={lastname}
                                className="bg-stone-200 p-4" 
                                type="text" 
                                required
                                onChange={(e) => setLastname(e.target.value)}
                                name="lastName"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-bold" htmlFor="username">Username <span className="font-bold text-orange-500">*</span></label>
                        <input placeholder="Joe Smith" 
                                value={username}
                                className="bg-stone-200 p-4" 
                                type="text" 
                                required
                                onChange={(e) => setUsername(e.target.value)}
                                name="username"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-bold" htmlFor="email">Email <span className="font-bold text-orange-500">*</span></label>
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
                        Register
                    </button>
                </form>
                <div className="flex mt-6 gap-2 text-lg font-semibold">
                    <p>Already have an account?</p> 
                    <Link className="text-orange-500" to={'/login'}>Login</Link>
                </div>
            </div>
            
            <BookingBanner />
        </div>
    )
}