import { Link } from 'react-router-dom';
import { getScroll } from './../hooks/getScroll';

const scroll = getScroll()

export const Footer = () => {
    return (
        <div className="bg-stone-100 px-4 border-t pt-8 border-t-stone-950 flex flex-col items-center md:flex-row md:justify-around">
            <div className='p-4 md:w-[30%] flex flex-col justify-start items-start'>
                <Link to={"/"} onClick={() => window.scrollTo(0,0)} className=" flex justify-center items-center">
                        <div className="flex flex-col justify-between items-center">
                            <span className="uppercase font-bold h-1/3 relative bottom-2 text-[10px]">easy</span>
                            <i className="fa-sharp fa-solid fa-camera-retro fa-lg"></i>
                        </div>
                        <div className="font-extrabold text-[30px] lg:text-[40px]">
                            SHOOT
                        </div>
                </Link>
                <p className='my-4 text-stone-600'>We offers a range of cameras for all your videography and photography needs. We have the perfect camera for your next project.</p>
                <div>
                    <div className="flex items-center gap-4">
                        <i class="fa-sharp fa-solid fa-phone"></i>
                        <p className="text-lg font-medium">{` (123) 456-789`}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <i class="fa-sharp fa-solid fa-envelope"></i>
                        <p className=" text-lg font-medium">{` shoot@shoot.com`}</p>
                    </div>

                </div>
            </div>
            <div className="flex p-4 justify-start">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    <ul className="flex flex-col gap-2">
                        <h6 className='font-semibold text-lg'>Company</h6>
                        <li className="text-stone-800 text-medium flex flex-col">
                            <a className="hover:text-orange-500"
                                href="#">News</a>
                            <a className="hover:text-orange-500"
                                href="#">Team</a>
                            <a className="hover:text-orange-500"
                                href="#">Careers</a>
                            <a className="hover:text-orange-500"
                                href="/about">About Us</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <h6 className='font-semibold text-lg'>Offerings</h6>
                        <li className="text-stone-800 text-medium flex flex-col">
                            <a className="hover:text-orange-500"
                                href="#">Top Products</a>
                            <a className="hover:text-orange-500"
                                href="#">Deals</a>
                            <a className="hover:text-orange-500"
                                href="#">Affiliate Program</a>
                            <a className="hover:text-orange-500"
                                href="#">Invite Friends</a>
                            <a className="hover:text-orange-500"
                                href="#">Student Discount</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <h6 className='font-semibold text-lg'>Locations</h6>
                        <li className="text-stone-800 text-medium flex flex-col">
                            <a className="hover:text-orange-500"
                                href="#">Atlanta</a>
                            <a className="hover:text-orange-500"
                                href="#">Los Angles</a>
                            <a className="hover:text-orange-500"
                                href="#">Miami</a>
                            <a className="hover:text-orange-500"
                                href="#">New York</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <h6 className='font-semibold text-lg'>Info</h6>
                        <li className=" text-stone-800 text-medium flex flex-col">
                            <a className="hover:text-orange-500"
                                href="#">How it Works</a>
                            <a className="hover:text-orange-500"
                                href="#">Customer Care</a>
                            <a className="hover:text-orange-500"
                                href="#">Legal</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}