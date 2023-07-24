import { useState } from "react"

export const SingleQuestion = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false)

    return(
        <div className="relative cursor-pointer w-full border shadow-sm"
            onClick={() => setShowInfo(!showInfo)}>
            <div className="z-20 relative w-full flex p-6 justify-between items-center hover:shadow-md hover:shadow-orange-600" id="question-box">
                <p className="text-xl h-10 flex items-center font-medium">{title}</p>
                <div>
                    {showInfo ? <i className="fa-solid fa-chevron-up"></i>
                        : <i className="fa-solid fa-chevron-down"></i>}
                </div>
            </div>
            { showInfo &&
                <div className="relative bottom-[88px] w-full flex p-11 justify-between items-center bg-orange-500">
                </div>
            }
            
            {showInfo && 
                <div id="answer-box" className="px-4 relative flex justify-start">
                    <p className="px-6 relative bottom-10 text-lg">{info}</p>
                </div>}
        </div>
    )
}