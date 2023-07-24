export const Brands = () => {
    return (
        <div className="bg-white px-8 py-12 flex w-screen justify-center items-center">
            <div className="flex flex-col justify-between">
                    <h5 className="text-stone-950 text-center text-xl px-8 mb-8 md:px-0 md:text-4xl font-bold">Industry leading brands we carry</h5>
                    <div className="flex flex-wrap justify-around w-screen gap-2 px-8 lg:max-w-[1700px] lg:gap-16">
                        <img className="p-2 h-10 md:h-12 lg:h-16" src="logos/logo-nikon.svg" alt="nikon logo" />
                        <img className="p-2 h-10 md:h-12 lg:h-16" src="logos/logo-canon.svg" alt="canon logo" />
                        <img className="p-2 h-10 md:h-12 lg:h-16" src="logos/logo-sony.svg" alt="sony logo" />
                        <img className="p-2 h-10 md:h-12 lg:h-16" src="logos/logo-panasonic.svg" alt="panasonic logo" />
                        <img className="p-2 h-10 md:h-12 lg:h-16" src="logos/logo-dji.svg" alt="dji logo" />
                    </div>
            </div>
        </div>
    )
}