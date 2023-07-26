import { useEffect, useState } from "react"
import cameras from "../CameraData"
import { CameraCard } from "../Components/CameraCard"
import { Breadcrumb } from "../Components/Breadcrumb"
import axios from "axios"
import { useCookies } from 'react-cookie';
import { getUserID } from "../hooks/getUserID"
import { useNavigate } from "react-router-dom"

export const Account = () => {

    const [cameraData, setCameraData] = useState(cameras)
    const [filterData, setFilterData] = useState(cameras)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [savedCameras, setSavedCameras] = useState([])
    const [inquiries, setInquiries] = useState([])

    const [cookies, _] = useCookies(["access_token"])
    const userID = getUserID()
    const nav = useNavigate()
    
    useEffect(()=> {
        const fetchSaves = async () => {
            try {
                const res = await axios.get(`https://ready-shoot.onrender.com/saves/${userID}`)
                setSavedCameras(res.data.saves);
            } catch (error) {
                console.log(error);
            }
        }

        const fetchInquiries = async () => {
            try {
                const res = await axios.get(`https://ready-shoot.onrender.com/inquiries/${userID}`, {
                    headers: { authorization: cookies.access_token}
                })
                setInquiries(res.data)
            } catch (error) {
                console.log(error);
            }
        }

        function displaySaved () {
            const res = savedCameras.map((cameraName) => (
                cameraData.find(function (camera) {
                    if (camera.name === cameraName) {
                        return camera
                    }
                })
            ))
            setFilterData(res)
        }

        if (cookies.access_token) fetchSaves()
        if (cookies.access_token) fetchInquiries()
        if (cookies.access_token) displaySaved()
    }, [])

    function handleCancel () {
        setShowConfirmation(true)
        window.scrollTo(0,0)
    }

    const handleDelete = async (inquiryID) => {
        try {
            const res = axios.put("https://ready-shoot.onrender.com/inquiries/delete", {inquiryID, userID})
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-stone-200 flex flex-col items-center justify-center">
            <Breadcrumb page="Account"/>

            <div className="relative lg:left-18 flex flex-col items-center lg:items-center justify-center mx-4 my-8 lg:my-32">
            {showConfirmation && <div className="bg-red-300 my-8 mx-4 flex text-grey-500 p-2 gap-2 justify-center items-start">
                <p className="text-red-900 font-bold">Request to cancel has been sent. Please check your email to confirm.</p>
                <i onClick={() => setShowConfirmation(!showConfirmation)} className="fa-sharp fa-solid fa-xmark text-red-900 py-3 fa-lg cursor-pointer"></i>
            </div>}
            <h4 className="text-4xl md:text-5xl md:p-2 font-bold">My Requests ({inquiries.length})</h4>
                {inquiries.length > 0 ? <div>
                    {inquiries.map((inquiry, index) => (
                        <div key={index} className="bg-white my-12 lg:w-[800px] flex flex-col">
                            <div className="bg-orange-600 text-xl flex justify-between items-center p-3 text-white font-bold">
                                <h5 className="w-2/5">Pending Request</h5>
                                <button onClick={() => handleCancel()} className="bg-white text-orange-500 px-2 py-1 hover:text-white hover:bg-orange-700">Cancel</button>
                            </div>
                            <div className="flex flex-col border border-gray-600">
                                    <div className="border-b border-gray-600 p-2 flex-wrap md:flex-row items-center gap-4">
                                        <h5 className="text-orange-600 text-2xl font-bold p-4 lg:w-2/5">Rental Date & Times:</h5>
                                        <div className="grid grid-cols-2 gap-2 px-4 pb-4">
                                            <div className="">
                                                <h6 className="font-semibold">Start Date & Time</h6>
                                                <p>{inquiry.startdate} / {inquiry.starttime}</p>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold">End Date & Time</h6>
                                                <p>{inquiry.enddate} / {inquiry.endtime}</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="border-b border-gray-600 p-4 flex-wrap md:flex-row  items-center gap-4">
                                        <h5 className="text-orange-600 text-2xl font-bold p-4 lg:w-2/5">Pick Up / Drop Off:</h5>
                                        <div className="grid grid-cols-2 gap-2 px-4 pb-4">
                                            <div>
                                                <h6 className="font-semibold">Pick Up Location</h6>
                                                <p>{inquiry.pickup}</p>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold">Drop off Location</h6>
                                                <p>{inquiry.dropoff}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex-wrap md:flex-row  items-center gap-4">
                                        <h5 className="text-orange-600 text-2xl font-bold p-4 lg:w-2/5">Contact Information:</h5>
                                        <div className="flex flex-wrap px-4 pb-4 justify-between gap-8 md:gap-8">
                                            <div>
                                                <h6 className="font-semibold">Name</h6>
                                                <p>{inquiry.firstname} {inquiry.lastname}</p>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold">Addres</h6>
                                                <p>{inquiry.address} {inquiry.lastname}</p>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold">Email</h6>
                                                <p clas>{inquiry.email}</p>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold">Phone</h6>
                                                <p>{inquiry.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
                :
                <div className="text-xl p-8 flex">no inquiries yet</div>
                }
            </div>
        </div>
        
    )
}