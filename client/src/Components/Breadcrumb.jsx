export const Breadcrumb = ({page}) => {
    return (
        <div className="relative flex justify-center w-screen">
                <div className="opacity-20 grayscale">
                    <img src="images/Canon_EF_cameras (1).jpg" alt="" />
                </div>
                <h5 className="uppercase text-4xl md:text-8xl font-bold absolute bottom-[30%] md:bottom-[40%]">{page}</h5>
            </div>
    )
}