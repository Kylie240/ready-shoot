import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { getUserID } from "../hooks/getUserID";
import axios from 'axios';

export const CameraCard = ({brand, name, price, img, cameraId, saveCamera, removeCamera, isSaved}) => {
    const nav = useNavigate()
    const userID = getUserID()

    const displaySaved = isSaved(name)

    function removeSave (id) {
        const res = savedItems.filter((item) => item !== id)
        setSavedItems(res);
    }

    function handleRentNow () {
        nav("/")
    }

    return (
        <div className="m-4 md:w-[275px] lg:w-[325px] bg-white border border-stone-300 p-2 cursor-pointer hover:shadow-stone-400 hover:shadow-md">
            <div className="cursor-pointer h-12 px-4 flex items-center justify-end">
                {displaySaved ? <i onClick={() => removeCamera(name)}
                    className="fa-sharp fa-solid fa-bookmark fa-lg"></i> 
                :
                    <i onClick={() => saveCamera(name)}
                    className="fa-sharp fa-regular fa-bookmark fa-lg"></i>
                }
                
            </div>
            <div className="mx-8 max-w-[250px] p-4 md:p-0 md:pb-2 flex justify-start items-center">
                <img src={img} alt="" />
            </div>
            <div className="flex flex-col md:mb-6 px-6">
                <p className="text-md">{brand}</p>
                <p className="text-xl font-bold">{brand} {name}</p>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between px-6 pt-2 text-xl">
                    <p className="">${price}</p>
                    <p>Per Day</p>
                </div>
                <div className="p-4">
                    <button onClick={handleRentNow} className="w-full text-lg py-2 md:py-4 px-3 cursor-pointer bg-orange-600 shadow-orange-700 shadow-sm hover:shadow-md text-white">RENT NOW</button>
                </div>
            </div>
        </div>
    )
}