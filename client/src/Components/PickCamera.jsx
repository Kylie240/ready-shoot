import { useState } from "react"
import { SingleCamera } from "./SingleCamera"
import cameras from "../CameraData"


export const PickCamera = () => {
    const [cameraData, setCameraData] = useState(cameras)
    const [camera, setCamera] = useState(cameraData[0])

    return (
        <div className="relative w-screen p-8 lg:mt-20 flex flex-col justify-center items-center gap-12">
                <div className="text-center flex flex-col items-center justify-center">
                <p className="p-2 text-xl font-bold">Browse Our Selection of</p>
                    <h5 className="p-2 text-5xl font-bold">Quality Rental Cameras</h5>
                    <p className="w-4/5 mt-4">Choose from a variety of our amazing cameras to rent for your next photoshoot or video gig.</p>
                </div>

                <div className="w-full flex flex-col justify-start items-center lg:flex-row lg:justify-center lg:items-start">
                    <div className="xl:w-[400px] flex flex-col">
                        {cameraData.map((camera) => (
                            <div key={camera.id} className="mt-4 cursor-pointer max-w-[310px]" onClick={() => setCamera(cameraData[camera.id-1])}>
                                <div className="py-4 px-6 bg-stone-200 flex justify-center items-center text-xl text-center font-medium">
                                        {camera.brand} {camera.name}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-10 md:p-0 lg:p-0 max-w-[500px]">
                            <img src={camera.img} alt="" />
                        </div>
                        <div className="flex justify-center">
                        <table class="w-[300px] table-auto border border-stone-800">
                            <tr className="py-8 bg-orange-500 text-white text-3xl">
                                <th colspan="2">${camera.price} / rental day</th>
                            </tr>
                            <tbody className="gap-4">
                                <tr className="p-4 items-center border border-stone-800">
                                <td className="items-center border border-stone-800">Brand</td>
                                <td>{camera.brand}</td>
                                </tr>
                                <tr className="items-center border border-stone-800">
                                <td className="items-center border border-stone-800">Model</td>
                                <td>{camera.name}</td>
                                </tr>
                                <tr className="items-center border border-stone-800">
                                <td className="items-center border border-stone-800"> Lens Compatability</td>
                                <td>{camera.lens}</td>
                                </tr>
                                <tr className="items-center border border-stone-800">
                                <td className="items-center border border-stone-800">Sensor</td>
                                <td>{camera.sensor}</td>
                                </tr>
                                <tr className="items-center border border-stone-800">
                                <td className="items-center border border-stone-800">File Size / Format</td>
                                <td>{camera.files}</td>
                                </tr>
                                <tr className="items-center border border-stone-800">
                                <td className="items-center border border-stone-800">Video Resolution</td>
                                <td>{camera.video.map((res, index) => (
                                                <p key={index}>- {res}</p>
                                            ))}</td>
                                </tr>
                                <tr className="items-center border border-stone-800">
                                <td className="items-center border border-stone-800">Weight</td>
                                <td>{camera.weight}</td>
                                </tr>
                                <tr className="items-center border border-stone-800">
                                <td className="items-center border border-stone-800">Dimensions</td>
                                <td>{camera.dimensions}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
        </div>
    )
}