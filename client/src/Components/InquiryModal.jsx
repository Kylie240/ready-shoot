import { useState } from "react"
import cameras from "../CameraData"
import { getUserID } from './../hooks/getUserID';
import axios from 'axios';

export const InquiryModal = ({setShowConfirmation, cameraId, startDate, endDate, showModal, setShowModal, location}) => {
    const userID = getUserID()
    const [cameraData, setCameraData] = useState(cameras)
    const [inquiry, setInquiry] = useState({
        firstname: "",
        lastname: "",
        address: "",
        email: "",
        city: "",
        age: "",
        zipcode: "",
        startdate: startDate,
        starttime: "",
        enddate: endDate,
        endtime: "",
        pickup: location,
        dropoff: "",
        userID: userID,
        cameraID: cameraId
    })

    document.body.style.overflow = "hidden"

    function handleClose () {
        setShowModal(false)
        document.body.style.overflow = ""
    }

    function handleChange (e) {
        const {name, value} = e.target
        setInquiry({...inquiry, [name] : value})
        console.log(inquiry);
    }

    const selectedCamera = cameraData.filter(function (camera) {
        return camera.id === parseInt(cameraId)
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/form-submission", {inquiry, userID})
            console.log(res);
            if (res.data.message = "success"){
                alert("form submitted successfully! Please check your email for a confirmation of your request.")
                setShowModal(false)
                setShowConfirmation(true)
                window.scrollTo(0,0)
            }
        } catch (error) {
            console.log(error);
        }
    }

    console.log(inquiry);
    
    return (
        <div className="absolute w-screen h-screen top-20 flex justify-center items-center">
            <span className="fixed w-screen h-screen top-0 flex justify-center items-center bg-gray-500 z-[99] opacity-80"></span>
            <form onSubmit={(e) => handleSubmit(e)} className="inquiry-modal fixed top-8 lg:top-12 z-[100] bg-white h-[90vh] max-w-[760px] overflow-y-scroll">
                <div className="border-b border-stone-500">
                    <div className="">
                        <div className="flex p-2 bg-orange-600 justify-between items-center">
                            <h3 className="px-4 text-white text-3xl font-bold">Inquiry Form</h3>
                            <i onClick={() => handleClose()}
                            className="text-white cursor-pointer top-8 right-8 fa-sharp fa-solid m-4 fa-x fa-xl"></i>
                        </div>
                        <div className="flex flex-col p-6 bg-orange-100">
                            <div className="flex text-orange-600 text-xl font-bold items-start gap-2 justify-start">
                                <i class="relative top-2 fa-sharp fa-solid fa-circle-info"></i>
                                <h6>Upon completion of this form, you will receive:</h6>
                            </div>
                            <p className="font-medium text-stone-500 p-4">A confirmation email about your inquiry. Once we receive your form, you will be contacted about our decision. Please allow 24 hours for your approval email.</p>
                        </div>
                    </div>
                    <div className="bg-white flex items-center flex-col md:flex-row gap-6 p-6">
                        <div className="md:w-1/2 flex flex-col gap-6">
                            <h5 className="text-xl font-bold text-orange-600">Location & Date</h5>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <i className="fa-sharp fa-solid fa-clock mr-1 text-stone-500"></i>
                                    <label className="text-md font-bold" htmlFor="pickup">Rental Start Date & Time<span className="font-bold text-orange-600">*</span></label>
                                </div>
                                <div className="ml-4">
                                    <p>{startDate} / 
                                    <input onChange={(e) => handleChange(e)} 
                                    className="border border-stone-400 ml-2" 
                                    type="time" 
                                    name="starttime"
                                    required/></p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <i className="fa-sharp fa-solid fa-clock mr-1 text-stone-500"></i>
                                    <label className="text-md font-bold" htmlFor="pickup">Rental End Date & Time<span className="font-bold text-orange-600">*</span></label>
                                </div>
                                <div className="ml-4">
                                    <p> {endDate} / 
                                    <input onChange={(e) => handleChange(e)} 
                                    className="border border-stone-400 ml-2" 
                                    type="time" 
                                    name="endtime"
                                    required/></p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <i className="fa-sharp fa-solid fa-location-dot mr-1 text-stone-500"></i>
                                    <label className="text-md font-bold" htmlFor="pickup">Pick Up Location<span className="font-bold text-orange-600">*</span></label>
                                </div>
                                <p className="ml-4">{location}</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <i className="fa-sharp fa-solid fa-location-dot mr-1 text-stone-500"></i>
                                    <label className="text-md font-bold" htmlFor="pickup">Dropoff Location<span className="font-bold text-orange-600">*</span></label>
                                </div>
                                <div className="ml-4 flex">
                                    <select name="dropoff" required onChange={(e) => handleChange(e)}>
                                        <option value="">same as pick up</option>
                                        <option value="Miami">Miami</option>
                                        <option value="Los Angeles">Los Angeles</option>
                                        <option value="Atlanta">Atlanta</option>
                                        <option value="NewYork">New York</option>
                                        <option value="Ship">Ship it Back</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:w-1/2 items-center justify-start">
                            <div className="flex">
                                <h5 className="text-xl font-bold ">Camera:</h5>
                                <h5 className="pl-2 text-xl font-bold text-orange-600">{selectedCamera[0].brand} {selectedCamera[0].name}</h5>
                            </div>
                            <img className="w-4/5 max-w-[400px]" src={selectedCamera[0].img} alt="" />
                        </div>
                    </div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                    <h5 className="text-xl font-bold p-2 text-orange-600">Personal Information</h5>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg text-stone-500 font-bold" htmlFor="firstname">First Name <span className="font-bold text-orange-600">*</span></label>
                            <input placeholder="Enter your first name" 
                                    className="bg-stone-200 text-black p-4" 
                                    type="string" 
                                    required
                                    value={inquiry.firstname}
                                    onChange={(e) => handleChange(e)}
                                    name="firstname"/>
                            <p className="text-xs">This field is required.</p>
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg text-stone-500 font-bold" htmlFor="lastname">Last Name <span className="font-bold text-orange-600">*</span></label>
                            <input placeholder="Enter your last name" 
                                    className="bg-stone-200 text-black p-4" 
                                    type="sting" 
                                    required
                                    value={inquiry.lastname}
                                    onChange={(e) => handleChange(e)}
                                    name="lastname"/>
                            <p className="text-xs">This field is required.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg text-stone-500 font-bold" htmlFor="phone">Phone<span className="font-bold text-orange-600">*</span></label>
                            <input placeholder="Enter your phone number" 
                                    className="bg-stone-200 text-black p-4" 
                                    type="phone" 
                                    required
                                    value={inquiry.phone}
                                    onChange={(e) => handleChange(e)}
                                    name="phone"/>
                            <p className="text-xs">This field is required.</p>
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg text-stone-500 font-bold" htmlFor="age">Age<span className="font-bold text-orange-600">*</span></label>
                            <input placeholder="24" 
                                    className="bg-stone-200 text-black p-4" 
                                    type="number" 
                                    required
                                    value={inquiry.age}
                                    onChange={(e) => handleChange(e)}
                                    name="age"/>
                            <p className="text-xs">This field is required.</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg text-stone-500 font-bold" htmlFor="email">Email<span className="font-bold text-orange-600">*</span></label>
                        <input placeholder="Enter your email address" 
                                className="bg-stone-200 text-black p-4" 
                                type="email" 
                                required
                                value={inquiry.email}
                                onChange={(e) => handleChange(e)}
                                name="email"/>
                        <p className="text-xs">This field is required.</p>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg text-stone-500 font-bold" htmlFor="address">Address<span className="font-bold text-orange-600">*</span></label>
                        <input placeholder="Enter your street address" 
                                className="bg-stone-200 text-black p-4" 
                                type="string" 
                                required
                                value={inquiry.address}
                                onChange={(e) => handleChange(e)}
                                name="address"/>
                        <p className="text-xs">This field is required.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg text-stone-500 font-bold" htmlFor="city">City<span className="font-bold text-orange-600">*</span></label>
                            <input placeholder="Enter your city" 
                                    className="bg-stone-200 text-black p-4" 
                                    type="string" 
                                    required
                                    value={inquiry.city}
                                    onChange={(e) => handleChange(e)}
                                    name="city"/>
                            <p className="text-xs">This field is required.</p>
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg text-stone-500 font-bold" htmlFor="zipcode">Zip Code<span className="font-bold text-orange-600">*</span></label>
                            <input placeholder="Enter your zip code" 
                                    className="bg-stone-200 text-black p-4" 
                                    type="number" 
                                    required
                                    value={inquiry.zipcode}
                                    onChange={(e) => handleChange(e)}
                                    name="zipcode"/>
                            <p className="text-xs">This field is required.</p>
                        </div>
                    </div>
                    <div className="my-2"> 
                        <input type="checkbox" /> Please send me latest news and updates
                    </div>
                        <button type="submit" className="text-2xl font-semibold gap-2 flex justify-center items-center w-full py-4 px-3 cursor-pointer bg-orange-600 shadow-orange-700 shadow-sm hover:shadow-md text-white">
                            <i className="fa-sharp fa-solid fa-envelope-open-text"></i>
                            Reserve Now
                        </button>
                </div>
            </form>
        </div>
    )
}