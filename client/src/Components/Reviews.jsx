export const Reviews = () => {
    return (
        <div className="py-8 lg:py-44 bg-stone-50 flex-col lg:flex justify-center items-center shadow-[inset_0_-8px_500px_rgba(120,120,120,0.3)]">
                <div className="flex flex-col lg:gap-8">
                    <div className="text-center flex flex-col justify-center items-center">
                        <p className="text-2xl font-medium">Real Reviews</p>
                        <h5 className="text-[2.8rem] font-bold p-4">Customer Testimonials</h5>
                        <p className="text-md text-stone-600 font-medium p-4 lg:w-2/5">Our customers have experienced our service and results, and they're eager to share their positive experiences with you.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        <div className="bg-white p-8 flex flex-col m-8 my-8 max-w-[600px]">
                            <div>
                                <p className="text-stone-800 font-semibold md:text-2xl">"We rented a camera from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</p>
                            </div>
                            <div className="flex justify-between items-end mt-6">
                                <div className="flex gap-6 items-center">
                                    <img className="w-[80px] h-[80px] aspect-square object-cover rounded-full " src="images\360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" alt="" />
                                    <div className="flex flex-col">
                                        <p className="text-xl font-bold">Jake Smithers</p>
                                        <p className="text-medium">Los Aneles, CA</p>
                                    </div>
                                </div>
                                <i className="hidden md:flex fa-sharp fa-solid fa-quote-left fa-rotate-180 fa-5x"></i>
                            </div>
                        </div>
                        <div className="bg-white p-8 flex flex-col m-8 my-8 max-w-[600px]">
                            <div>
                                <p className="text-stone-800 font-semibold md:text-2xl">"Your products are always in excellent shape and work great. I'm very happy I found you guys. You are my go to for future electronics."</p>
                            </div>
                            <div className="flex justify-between items-end mt-6">
                                <div className="flex gap-6 items-center">
                                    <img className="w-[80px] h-[80px] aspect-square object-cover rounded-full " src="images\istockphoto-1144287292-612x612.jpg" alt="" />
                                    <div className="flex flex-col">
                                        <p className="text-xl font-bold">Ashley Miller</p>
                                        <p className="text-medium">Los Aneles, CA</p>
                                    </div>
                                </div>
                                <i className="hidden md:flex fa-sharp fa-solid fa-quote-left fa-rotate-180 fa-5x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}