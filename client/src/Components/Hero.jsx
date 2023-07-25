import { useState } from "react"
import cameras from "../CameraData"
import { InquiryModal } from "./InquiryModal"

export const Hero = () => {
    const [cameraData, setCameraData] = useState(cameras)
    const [cameraId, setCameraId] = useState()
    const [location, setLocation] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false)

    function handleSubmit (e) {
        e.preventDefault()
        setShowModal(!showModal)
    }

    return (
        <section className="flex justify-center items-center py-6 md:py-16 lg:pt-16 lg:pb-60 bg-orange-600 overflow-clip">
                <div className="bg-white m-4 p-2 max-w-[900px] flex flex-col justify-center items-center">
                    {showConfirmation && <div className="bg-green-300 flex text-grey-500 p-2 gap-2 justify-center items-center">
                        <p className="text-green-900 font-bold">Form submitted successfully! Check your email to confirm your request.</p>
                        <i onClick={() => setShowConfirmation(false)} className="fa-sharp fa-solid fa-xmark text-green-900 fa-lg cursor-pointer"></i>
                    </div>}
                    <div className="p-8 text-center uppercase font-bold md:w-[70%] text-3xl md:text-5xl">
                        Rent our gear for your next shoot
                    </div>
                    
                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-wrap justify-center py-6 md:justify-between items-center gap-4">
                        <div className="flex flex-col items-start">
                            <div>
                                <i className="fa-sharp fa-solid fa-camera-retro fa-sm mr-1"></i>
                                <label className="text-md font-bold" htmlFor="camera">Camera <span className="font-bold text-orange-500">*</span></label>
                            </div>
                            <select value={cameraId} onChange={(e) => setCameraId(e.target.value)} className="p-2 w-32 border-b border-b-orange-500" required name="camera" id="camera">
                                <option value="">select</option>
                                {cameraData.map((camera) => (
                                    <option key={camera.id} value={camera.id}>{camera.brand} {camera.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <i className="fa-sharp fa-solid fa-location-dot mr-1"></i>
                                <label className="text-md font-bold" htmlFor="pickup">Pick Up <span className="font-bold text-orange-500">*</span></label>
                            </div>
                            <select value={location} onChange={(e) => setLocation(e.target.value)} className="p-2 w-32 border-b border-b-orange-500" required name="pickup" id="pickup">
                                <option value="">select</option>
                                <option value="Los Angeles">Los Angeles</option>
                                <option value="Miami">Miami</option>
                                <option value="New York">New York</option>
                                <option value="Atlanta">Atlanta</option>
                                <option value="Ship">Ship to me</option>
                            </select>
                        </div>

                        <div>
                            <div className="flex flex-col">
                                <div>
                                    <i className="fa-sharp fa-solid fa-calendar-days fa-sm mr-1"></i>
                                    <label className="text-md font-bold" htmlFor="start">Start Date <span className="font-bold text-orange-500">*</span></label>
                                </div>
                                <input className="p-2 border-b border-b-orange-500"
                                    value={startDate}
                                    type="date" 
                                    id="start-date"
                                    name="start"
                                    required
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex flex-col">
                                <div>
                                    <i className="fa-sharp fa-solid fa-calendar-days fa-sm mr-1"></i>
                                    <label className="text-md font-bold" htmlFor="start">End Date <span className="font-bold text-orange-500">*</span></label>
                                </div>
                                <input className="p-2 border-b border-b-orange-500" 
                                    value={endDate}
                                    type="date" 
                                    id="end-date"
                                    name="end"
                                    required
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit" className="relative top-2 font-bold mx-2 px-3 h-10 cursor-pointer bg-orange-600 shadow-orange-700 shadow-sm hover:shadow-md text-white">Rent now</button>
                    </form>

                </div>
                { showModal && <InquiryModal 
                    startDate={startDate} 
                    endDate={endDate} 
                    showModal={showModal} 
                    location={location}
                    cameraId={cameraId}
                    setShowConfirmation={setShowConfirmation}
                    setShowModal={setShowModal}/>}
                <img className="hidden lg:flex absolute -bottom-20 xl:bottom-12 left-0 h-2/5"
                    src="\images\[removal.ai]_859e1066-e807-4456-8e01-6fe92d97c4e56541689_rd.png" alt="canon camcorder" />
                <img className="hidden lg:flex absolute -bottom-20 xl:bottom-12 lg:w-[500px] xl:w-[540px] object-cover right-0 h-2/5"
                    src="/images/[removal.ai]_800b4688-7982-4e21-9ddb-faf90020e361category-dslr-lg.png" alt="canon camcorder" />
            </section>
    )
}