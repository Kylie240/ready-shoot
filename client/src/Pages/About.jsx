import { BookingBanner } from "../Components/BookingBanner"
import { Breadcrumb } from "../Components/Breadcrumb"
import { Easy } from "../Components/Easy"

export const About = () => {
    return (
        <div className="w-screen bg-stone-100">
            <Breadcrumb page={"About"} />

            <div className="flex flex-col lg:my-32 lg:gap-20">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="p-8 max-w-[700px]">
                        <h4 className=" my-6 text-4xl md:text-5xl font-bold">The global leader in tech rentals</h4>
                        <p className="text-stone-600 text-lg font-medium">We believe that access to technology is a human right. By making exceptional technology accessible to everyone, we help empower people to live the lives how they want and explore new horizons, both personally and professionally.</p>
                    </div>
                    <div className="px-8 pb-8 md:pb-0 max-w-[600px]">
                        <img className="" src="images/Melbourne-videographer-focusing-lens.jpg" alt="" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="px-8 max-w-[600px]">
                        <img src="images/camera-man-shooting-talk-show_t20_pRX3YO-281dac0d88874218bfd71c7314fc3047.jpg" alt="" />
                    </div>
                    <div className="px-8 max-w-[700px]">
                        <h4 className=" my-6 text-4xl md:text-5xl font-bold">Try instead of buy</h4>
                        <p className="text-stone-600 placeholder:backdrop:text-lg font-medium">Our rental equiptment service enables people to try to tech devices on a flexible day-by-day basis instead of purchasing them. With Grover, customers gain access to quality products allowing them to keep, switch, return, or buy, depending on their individual needs and budget.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="p-8 max-w-[700px]">
                        <h4 className=" my-6 text-4xl md:text-5xl font-bold">Own the tech experience</h4>
                        <p className="text-stone-600 text-lg font-medium">Renting out tech products to several users across their life cycle allows for maximum value to be extracted from each product and reduces e-waste.</p>
                    </div>
                    <div className="px-8 max-w-[600px]">
                        <img src="images/Why-Videography-May-Bring-an-End-to-Event-Photography-800x420.webp" alt="" />
                    </div>
                </div>
            </div>
            <Easy />
            <BookingBanner />
        </div>
    )
}