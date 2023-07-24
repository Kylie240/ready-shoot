export const Easy = () => {
    return (
        <div className="px-8 pt-12 pb-28 flex justify-center items-center">
                <div className="flex py-12 flex-col justify-between gap-12">
                    <div className="text-center">
                        <p className="p-2 text-2xl font-medium">Easy as 1, 2, 3</p>
                        <h5 className="p-2 text-5xl font-bold">Hassle free camera rentals</h5>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
                        <div className="relative flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="m-9 stroke-orange-600 w-16 h-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                            </svg>
                            <span className="bottom-40 absolute bg-orange-500 w-[100px] h-[70px] rounded-full blur-2xl opacity-50"></span>
                            <h6 className="text-2xl font-bold my-4">1. Pick Camera</h6>
                            <p className="text-center w-4/5">Choose a camera from our competitive selection of top-quality devices for your professional or personal use.</p>
                        </div>

                        <div className="relative flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="m-9 stroke-orange-600 w-16 h-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                            <span className="bottom-40 absolute bg-orange-500 w-[100px] h-[70px] rounded-full blur-2xl opacity-50"></span>
                            <h6 className="text-2xl font-bold my-4">2. Approval</h6>
                            <p className="text-center w-4/5">After placing your order, we run a credit check and email you the result and shipping details within 24 hours.</p>
                        </div>

                        <div className="relative flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="m-9 stroke-orange-600 w-16 h-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            <span className="bottom-40 absolute bg-orange-500 w-[100px] h-[70px] rounded-full blur-2xl opacity-50"></span>
                            <h6 className="text-2xl font-bold my-4">3. Enjoy</h6>
                            <p className="text-center w-4/5">Use your new camera to the fullest, and return when finished. We'll be sure to wipe the device of any data.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}