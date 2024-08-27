import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";


function Product() {
    return (
        <>
            <div className='bg-[#F4F7FA] mt-28 product pb-6'>
                <div className='hidden md:block ml-7 relative bottom-[70px] -left-[0px]'>
                    <img src="/images/product-logo.png" className='w-[100px] h-[140px]' alt="Product Logo" />
                </div>
                <h2 className='text-5xl font-bold text-[#130F25] flex justify-center'>
                    Products
                </h2>

                <div className='container mb-5 flex flex-col md:flex-row justify-center items-center gap-36 mt-24 mx-auto'>
                    <div className='w-full md:w-[500px] p-5 bg-white rounded-xl shadow-md'>
                        <img src="/images/product-badges-.webp" alt="Skills" className='w-full h-60 object-cover rounded-xl' />
                        <div className='p-4'>
                            <img src="/images/skills-product.png" alt="" className='w-[160px] h-[35px] my-7' />
                            <p className='text-lg text-black mt-2'>
                                Empower yourself or your team to develop the skills critical to delivering on your career goals and initiatives with our tech skills platform.
                            </p>
                            <ul className='mt-5'>
                                <li className='py-[10px] px-4  hover:bg-blue-100 cursor-pointer border-b'>
                                    <a href='#' className='flex justify-between  text-[#404376]'>
                                        <span className='text-[17px]'>View all courses</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                                <li className='py-[10px] px-4  hover:bg-blue-100 cursor-pointer border-b'>
                                    <a href='#' className='flex justify-between  text-[#404376]'>
                                        <span className='text-[17px]'>For individuals</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                                <li className='py-[10px] px-4  hover:bg-blue-100 cursor-pointer border-b'>
                                    <a href='#' className='flex justify-between  text-[#404376]'>
                                        <span className='text-[17px]'>Take a skill assessment</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                                <li className='py-[10px] px-4  hover:bg-blue-100 cursor-pointer border-b'>
                                    <a href='#' className='flex justify-between  text-[#404376]'>
                                        <span className='text-[17px]'>View plans</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                            </ul>

                            <div className='flex justify-start mt-6'>
                                <a href='#' className='bg-[#e7005e] hover:bg-[#FF1675] text-white px-8 py-4 rounded-full duration-150 font-semibold'>
                                    Explore Skills
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-[500px] py-7 p-5 bg-white rounded-xl shadow-md'>
                        <img src="/images/product-img.webp" alt="Skills" className='w-full h-60 object-cover rounded-xl' />
                        <div className='p-4'>
                            <img src="/images/cloud-product.webp" alt="" className='w-[190px] h-[35px] my-7' />
                            <p className='text-lg text-black mt-2'>
                                Develop deep cloud expertise and production-ready cloud talent and skills.
                            </p>
                            <ul className='mt-5'>
                                <li className='py-[10px] px-4  hover:bg-blue-100 cursor-pointer border-b'>
                                    <a href='#' className='flex justify-between  text-[#404376]'>
                                        <span className='text-[17px]'>View all courses</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                                <li className='py-[10px] px-4  hover:bg-blue-100 cursor-pointer border-b'>
                                    <a href='#' className='flex justify-between  text-[#404376]'>
                                        <span className='text-[17px]'>For individuals</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                                <li className='py-[10px] px-4  hover:bg-blue-100 cursor-pointer border-b'>
                                    <a href='#' className='flex justify-between  text-[#404376]'>
                                        <span className='text-[17px]'>Cloud transformation in action</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                                <li className='py-[10px] px-4  hover:bg-blue-100 cursor-pointer border-b'>
                                    <a href='#' className='flex justify-between  text-[#404376]'>
                                        <span className='text-[17px]'>View plans</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                            </ul>

                            <div className='flex justify-start mt-8'>
                                <a href='#' className='bg-[#e7005e] hover:bg-[#FF1675] text-white px-8 py-4 rounded-full duration-150 font-semibold'>
                                    Explore A Cloud Guru
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 bg-white text-gray-800 rounded-xl py-4 px-6 block md:flex items-center shadow-lg md:w-[1000px] w-[400px] mx-auto transform translate-y-14">

                    <div className="w-1/2 md:mb-0 mb-6">
                        <img
                            src="/images/product-flow.webp"
                            alt="Flow Dashboard"
                            className="rounded-lg w-[300px]"
                        />
                    </div>

                    <div className="w-[90%] md:mb-0 mb-5 ">
                        <span><img src="images/product-flow-icon.webp" alt="" className='w-[140px] h-[35xpx]' /></span>
                        <p className="my-4 text-[17px] ">
                            Unlock your team’s potential and upgrade your processes with our software <br /> delivery intelligence platform.
                        </p>
                        <div className=" block md:flex md:gap-7 md:space-x-4 items-center text-lg font-semibold">
                            <a href="#" className="text-[#e7005e] font-bold group flex items-center my-2">
                                Take a Tour <MdKeyboardArrowRight fontSize={20} className="ml-1 transition-transform duration-300 transform group-hover:translate-x-2" />
                            </a>
                            <a href="#" className="text-[#e7005e] font-bold flex items-center group my-3">
                                View plans <MdKeyboardArrowRight fontSize={20} className="ml-1 transition-transform duration-300 transform group-hover:translate-x-2" />
                            </a>
                            <button className=" text-white md:py-3 md:px-8  px-6 py-2 rounded-full transition bg-[#e7005e] hover:bg-[#FF1675]">
                                Explore Flow
                            </button>
                        </div>
                    </div>


                </div>

            </div>


        </>
    )
}

export default Product