import { useState } from "react";
import { BookingBanner } from "../Components/BookingBanner"
import { Breadcrumb } from "../Components/Breadcrumb"

export const Contact = () => {
    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [messageInput, setMessageInput] = useState("")
    const [showConfirmation, setShowConfirmation] = useState(false)

    console.log(nameInput);

    function handleSubmit (e) {
        e.preventDefault();
        alert('Contact form submitted!')
        setShowConfirmation(true)
        setNameInput("")
        setEmailInput("")
        setMessageInput("")
    }

    return (
        <div className="bg-stone-100 relative flex flex-col items-center">
            <Breadcrumb page="Contact" />

            <div className="grid grid-cols-1 md:gap-8 lg:gap-44 p-8 md:grid-cols-2">
                <div className="flex p-4 flex-col justify-start items-start gap-4 md:gap-14 max-w-[400px]">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-4xl md:text-5xl font-bold">Need additional information?</h4>
                        <p className="text-stone-700 font-sm">A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                    </div>
                    <div className="flex flex-col max-w-[600px] py-4 md:gap-2 justify-center">
                        <div className="flex items-center gap-4">
                            <i class="fa-sharp fa-solid fa-phone"></i>
                            <p className="text-lg font-medium">{` (123) 456-789`}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <i class="fa-sharp fa-solid fa-envelope"></i>
                            <p className=" text-lg font-medium">{` readyshoot@shoot.com`}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                            <p className="text-lg font-medium">{` Atlanta, GA`}</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6 p-4">
                    {showConfirmation && <div className="bg-red-300 flex text-grey-500 p-2 gap-2 justify-center items-start">
                        <p className="text-red-900 font-bold">Contact form submitted successfully!</p>
                        <i onClick={() => setShowConfirmation(false)} className="fa-sharp fa-solid fa-xmark text-red-900 py-3 fa-lg cursor-pointer"></i>
                    </div>}
                    <div className="flex flex-col">
                        <label className="text-lg font-bold" htmlFor="name">Full name <span className="font-bold text-orange-600">*</span></label>
                        <input placeholder="Joe Smith" 
                                value={nameInput}
                                className="bg-white p-4" 
                                type="text" 
                                required
                                onChange={(e) => setNameInput(e.target.value)}
                                name="name"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-bold" htmlFor="email">Email <span className="font-bold text-orange-600">*</span></label>
                        <input placeholder="youremail@example.com"
                                value={emailInput} 
                                className="bg-white p-4" 
                                type="email" 
                                required
                                onChange={(e) => setEmailInput(e.target.value)}
                                name="email"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-bold" htmlFor="textarea">Tell us about it <span className="font-bold text-orange-600">*</span></label>
                        <textarea placeholder="Write here..."
                                value={messageInput} 
                                className="bg-white p-4" 
                                type="text" 
                                required
                                onChange={(e) => setMessageInput(e.target.value)}
                                name="textarea"/>
                    </div>
                    <button type="submit" className="text-2xl font-semibold gap-2 flex justify-center items-center w-full py-4 px-3 cursor-pointer bg-orange-600 shadow-orange-700 shadow-sm hover:shadow-md text-white">
                        <i className="fa-sharp fa-solid fa-envelope-open-text"></i>
                        Send Message
                    </button>
                </form>
            </div>
            
            <BookingBanner />
        </div>
    )
}