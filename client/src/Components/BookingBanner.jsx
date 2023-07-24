export const BookingBanner = () => {
    return (
        <div className="bg-stone-800 w-screen px-8 py-4 md:py-8 lg:mt-12">
            <div className="flex flex-col md:flex-row items-center justify-around lg:gap-28">
                <h5 className="text-white p-2 text-xl md:text-3xl lg:text-4xl font-bold">Book your next rental today</h5>
                <h5 className="text-orange-500 p-2 text-3xl lg:text-4xl font-bold">
                    <i class="fa-sharp fa-solid fa-phone"></i>
                    {` (123) 456-789 `}
                </h5>
        </div>
    </div>
    )
}