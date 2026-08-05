import { useState } from "react"

export default function Footer() {

    let [toggle1, setToggle1] = useState(false)
    let [toggle2, setToggle2] = useState(false)
    let [toggle3, setToggle3] = useState(false)
    let [toggle4, setToggle4] = useState(false)
    let [toggle5, setToggle5] = useState(false)

    return (
        <>
            <div className="w-full lg:h-[400px] bg-[#f6f6f8] flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">

                {/* Section 1 */}
                <div className={`w-full lg:w-[300px] flex ${toggle1 ? "flex-col" : "flex"} justify-between lg:justify-start lg:flex-col px-5 lg:px-0`}>

                    {
                        toggle1 ? <>
                            <div className="w-full h-auto flex justify-between">
                                <h1 className="text-xl lg:hidden">Get in touch</h1>

                                <button className="text-[20px] lg:hidden" onClick={() => setToggle1(!toggle1)}>
                                    {toggle1 ? <i class="ri-subtract-line"></i> : <i class="ri-add-line"></i>}
                                </button>
                            </div>
                        </> : <>
                            <h1 className="text-xl lg:hidden">Get in touch</h1>

                            <button className="text-[20px] lg:hidden" onClick={() => setToggle1(!toggle1)}>
                                {toggle1 ? <i class="ri-subtract-line"></i> : <i class="ri-add-line"></i>}
                            </button>
                        </>
                    }

                    <h1 className={`text-3xl font-extrabold mb-3 ${toggle1 ? "block" : "hidden"} lg:block`}>Kalles</h1>

                    <div className={`flex gap-2 ${toggle1 ? "block" : "hidden"} lg:flex`}>
                        <span className="text-gray-500 text-[25px]"><i class="ri-map-pin-line"></i></span>
                        <h1 className="text-gray-500 text-[15px]">
                            184 Main Rd E, St Albans VIC 3021, <br />Australia
                        </h1>
                    </div>

                    <div className={`flex gap-2 ${toggle1 ? "block" : "hidden"} lg:flex`}>
                        <span className="text-gray-500 text-[25px]"><i class="ri-mail-line"></i></span>
                        <h1 className="text-gray-500 text-[15px] self-center">contact@company.com</h1>
                    </div>

                    <div className={`flex gap-2 ${toggle1 ? "block" : "hidden"} lg:flex`}>
                        <span className="text-gray-500 text-[25px]"><i class="ri-phone-line"></i></span>
                        <h1 className="text-gray-500 text-[15px] self-center">+001 2233 456</h1>
                    </div>

                    <div className="flex gap-3 hidden lg:flex">
                        <span className="text-[25px] text-gray-500 hover:text-blue-500"><i class="ri-facebook-circle-fill"></i></span>
                        <span className="text-[25px] text-gray-500 hover:text-black"><i class="ri-twitter-x-fill"></i></span>
                        <span className="text-[25px] text-gray-500 hover:text-pink-500"><i class="ri-instagram-line"></i></span>
                        <span className="text-[25px] text-gray-500 hover:text-red-500"><i class="ri-youtube-fill"></i></span>
                        <span className="text-[25px] text-gray-500 hover:text-red-500"><i class="ri-pinterest-fill"></i></span>
                    </div>
                </div>

                {/* Section 2 */}
                <div className={`w-full lg:w-[130px] ${toggle2 ? "flex-col" : "flex"} justify-between lg:flex-col px-5 lg:px-0`}>
                    {
                        toggle2 ? <>
                            <div className="w-full h-auto flex justify-between">
                                <h1 className="text-xl mb-5">Categories</h1>

                                <button className="text-[20px] lg:hidden" onClick={() => setToggle2(!toggle2)}>
                                    {toggle2 ? <i class="ri-subtract-line"></i> : <i class="ri-add-line"></i>}
                                </button>
                            </div>
                        </> : <>
                            <h1 className="text-xl mb-5">Categories</h1>
                            <button className="text-[20px] lg:hidden" onClick={() => setToggle2(!toggle2)}>
                                {toggle2 ? <i class="ri-subtract-line"></i> : <i class="ri-add-line"></i>}
                            </button>
                        </>
                    }

                    <ul className={`${toggle2 ? "flex" : "hidden"} flex-col gap-3 lg:flex transition-all`}>
                        <li className="text-gray-500 hover:text-[#C91F28]">Men</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">Women</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">Accessories</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">Shoes</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">Watch</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">Dress</li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div className={`w-full lg:w-[150px]  ${toggle3 ? "flex-col" : "flex"} justify-between lg:flex-col px-5 lg:px-0`}>

                    {
                        toggle3 ? <>
                            <div className="w-full h-auto flex justify-between">
                                <h1 className="text-xl mb-5">Information</h1>

                                <button className="text-[20px] lg:hidden" onClick={() => setToggle3(!toggle3)}>
                                    {toggle3 ? <i class="ri-subtract-line"></i> : <i class="ri-add-line"></i>}
                                </button>
                            </div>
                        </> : <>
                            <h1 className="text-xl mb-5">Information</h1>

                            <button className="text-[20px] lg:hidden" onClick={() => setToggle3(!toggle3)}>
                                {toggle3 ? <i class="ri-subtract-line"></i> : <i class="ri-add-line"></i>}
                            </button>
                        </>
                    }

                    <ul className={`${toggle3 ? "flex" : "hidden"} flex-col gap-3 lg:flex transition-all`}>
                        <li className="text-gray-500 hover:text-[#C91F28]">About us</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">Contact us</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">Privacy Policy</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">Shipping & Delivery</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">Terms & Conditions</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">Returns & Exchanges</li>
                    </ul>
                </div>

                {/* Section 4 */}
                <div className={`w-full lg:w-[130px]  ${toggle4 ? "flex-col" : "flex"} justify-between lg:flex-col px-5 lg:px-0`}>

                    {
                        toggle4 ? <>
                            <div className="w-full h-auto flex justify-between">
                                <h1 className="text-xl mb-5">Useful links</h1>

                                <button className="text-[20px] lg:hidden" onClick={() => setToggle4(!toggle4)}>
                                    {toggle4 ? <i class="ri-subtract-line"></i> : <i class="ri-add-line"></i>}
                                </button>
                            </div>
                        </> : <>
                            <h1 className="text-xl mb-5">Useful links</h1>

                            <button className="text-[20px] lg:hidden" onClick={() => setToggle4(!toggle4)}>
                                {toggle4 ? <i class="ri-subtract-line"></i> : <i class="ri-add-line"></i>}
                            </button>
                        </>
                    }

                    <ul className={`${toggle4 ? "flex" : "hidden"} flex-col gap-3 lg:flex transition-all`}>
                        <li className="text-gray-500 hover:text-[#C91F28]">Store Location</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">Latest Posts</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">My Account</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">Size Guide</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">FAQs</li>
                        <li className="text-gray-500 hover:text-[#C91F28]">FAQs 2</li>
                    </ul>
                </div>

                {/* Section 5 */}
                <div className={`w-full lg:w-[200px]  ${toggle5 ? "flex-col" : "flex"} justify-between lg:flex-col px-5 lg:px-0`}>

                    {
                        toggle5 ? <>
                            <div className="w-full h-auto flex justify-between">
                                <h1 className="text-xl">Newsletter Signup</h1>

                                <button className="text-[20px] lg:hidden" onClick={() => setToggle5(!toggle5)}>
                                    {toggle5 ? <i class="ri-subtract-line"></i> : <i class="ri-add-line"></i>}
                                </button>
                            </div>
                        </> : <>
                            <h1 className="text-xl">Newsletter Signup</h1>

                            <button className="text-[20px] lg:hidden" onClick={() => setToggle5(!toggle5)}>
                                {toggle5 ? <i class="ri-subtract-line"></i> : <i class="ri-add-line"></i>}
                            </button>
                        </>
                    }

                    <p className={`text-gray-500 ${toggle5 ? "block" : "hidden"} lg:block`}>
                        Subscribe to our newsletter and get <br /> 10% off your first purchase
                    </p>

                    <div className={`w-[330px] lg:w-[300px] p-2 border mt-2 rounded-full ${toggle5 ? "block" : "hidden"} lg:flex`}>
                        <input type="text" placeholder="Enter Email Address" className="flex-1 outline-none" />
                        <button className="p-2 lg:p-3 text-white bg-black rounded-full">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center p-3 text-center">
                <p>All Rights Reserved © 2025 <span className="text-[#C91F28]">Kalles</span> - Developed by <span className="font-bold">AFRIL</span></p>
                <ul className="flex gap-3">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </div>
        </>
    )
}