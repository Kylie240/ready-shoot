import { useEffect, useState } from "react"
import cameras from "../CameraData"
import { CameraCard } from "../Components/CameraCard"
import { Breadcrumb } from "../Components/Breadcrumb"
import { getUserID } from "../hooks/getUserID"
import axios from "axios"
import { useCookies } from 'react-cookie';

export const OurCameras = () => {

    const [cameraData, setCameraData] = useState(cameras)
    const [filterData, setFilterData] = useState(cameras)
    const [savedCameras, setSavedCameras] = useState([])

    const [cookies, _] = useCookies(["access_token"])

    const userID = getUserID()

    useEffect(()=> {
        const fetchSaves = async () => {
            try {
                const res = await axios.get(`https://ready-shoot.onrender.com/saves/${userID}`)
                setSavedCameras(res.data.saves);
            } catch (error) {
                console.log(error);
            }
        }
        if (cookies.access_token) fetchSaves()
    }, [])
    
    const saveCamera = async (cameraName) => {
        if (!userID) {
            alert("Please login or create an account to start saving.")
        } else {
            try {
                const res = await axios.put("https://ready-shoot.onrender.com/saves", {cameraName, userID})
                setSavedCameras(res.data.saves);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const removeCamera = async (cameraName) => {
        try {
            const res = await axios.put("https://ready-shoot.onrender.com/remove-save", {cameraName, userID})
            console.log(res.data);
            setSavedCameras(res.data.saves);
        } catch (error) {
            console.log(error);
        }
    }

    function handleFilter (e) {
        const brand = e.target.dataset.brand;
        const res = cameraData.filter( function (item) {
            if ( item.brand === brand || brand === "All") {
                return item
            }
        })
        setFilterData(res)
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
        console.log(res);
    }
    const isSaved = (cameraName) => savedCameras.includes(cameraName)
    return (
        <div className="bg-stone-100">
            <Breadcrumb page="cameras"/>

            <div className="relative flex justify-around py-12 ">
                <div className="flex flex-col items-center gap-4 text-md md:text-xl lg:text-2xl">
                    <h4>Sort by brand</h4>
                    <button onClick={(e) => handleFilter(e)} 
                        id="filter-btn" 
                        className="w-28 md:w-44 p-2 md:p-4 bg-white"
                        data-brand="All">All
                    </button>
                    <button onClick={(e) => handleFilter(e)} 
                        id="filter-btn" 
                        className="w-28 md:w-44 p-2 md:p-4 bg-white"
                        data-brand="Canon">Canon
                    </button>
                    <button onClick={(e) => handleFilter(e)} 
                        id="filter-btn" 
                        className="w-28 md:w-44 p-2 md:p-4 bg-white"
                        data-brand="Sony">Sony
                    </button>
                    <button onClick={(e) => handleFilter(e)} 
                        id="filter-btn" 
                        className="w-28 md:w-44 p-2 md:p-4 bg-white"
                        data-brand="Panasonic">Panasonic
                    </button>
                    <button onClick={(e) => handleFilter(e)} 
                        id="filter-btn" 
                        className="w-28 md:w-44 p-2 md:p-4 bg-white"
                        data-brand="Nikon">Nikon
                    </button>
                    <button onClick={(e) => handleFilter(e)} 
                        id="filter-btn" 
                        className="w-28 md:w-44 p-2 md:p-4 bg-white"
                        data-brand="DJI">DJI
                    </button>
                    <button onClick={(e) => handleFilter(e)} 
                        id="filter-btn" 
                        className="w-28 md:w-44 p-2 md:p-4 bg-white"
                        data-brand="Blackmagic">Blackmagic
                    </button>
                    <h4 className="mt-6">View Saves</h4>
                    <button onClick={displaySaved} 
                        id="filter-btn" 
                        className="w-28 md:w-44 p-2 md:p-4 bg-white"
                        data-brand="Saved">Saved
                    </button>
                </div>

                {filterData.length > 0 ? <div className="flex justify-center items-start">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
                        {filterData.map((camera) => (
                        <CameraCard 
                            cameraId={camera.id}
                            brand={camera.brand} 
                            name={camera.name} 
                            price={camera.price}                         
                            img={camera.img} 
                            isSaved={isSaved}                   
                            key={camera.id}      
                            saveCamera={saveCamera}                   
                            removeCamera={removeCamera}                   
                            />
                        ))}
                    </div>
                </div>   
                :
                <div className="w-2/5">no saves yet</div>
                }
            </div>
        </div>
    )
}