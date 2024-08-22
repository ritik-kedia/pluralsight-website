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

                <div className='container mb-5 flex flex-col md:flex-row justify-center items-center gap-8 mt-24 mx-auto'>
                    <div className='w-full md:w-[500px] p-5 bg-white rounded-xl shadow-md'>
                        <img src="/images/product-badges-.webp" alt="Skills" className='w-full h-60 object-cover rounded-xl' />
                        <div className='p-4'>
                            <img src="/images/skills-product.png" alt="" className='w-[160px] h-[35px] my-7' />
                            <p className='text-lg text-black mt-2'>
                                Empower yourself or your team to develop the skills critical to delivering on your career goals and initiatives with our tech skills platform.
                            </p>
                            <ul className='mt-4 space-y-2 font-semibold'>
                                <li className='py-3 px-4 rounded-md hover:bg-blue-100 cursor-pointer'>
                                    <a href='#' className='flex justify-between text-gray-500'>
                                        <span>View all courses</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                                <li className='py-2 px-4 rounded-md hover:bg-blue-100 cursor-pointer'>
                                    <a href='#' className='flex justify-between text-gray-500'>
                                        <span>For individuals</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                                <li className='py-2 px-4 rounded-md hover:bg-blue-100 cursor-pointer'>
                                    <a href='#' className='flex justify-between text-gray-500'>
                                        <span>Take a skill assessment</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                                <li className='py-2 px-4 rounded-md hover:bg-blue-100 cursor-pointer'>
                                    <a href='#' className='flex justify-between text-gray-500'>
                                        <span>View plans</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                            </ul>

                            <div className='flex justify-start mt-6'>
                                <a href='#' className='bg-[#e7005e] hover:bg-[#FF1675] text-white px-7 py-3 rounded-full duration-150 font-semibold'>
                                    Explore Skills
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-[500px] py-8 p-5 bg-white rounded-xl shadow-md'>
                        <img src="/images/product-img.webp" alt="Skills" className='w-full h-60 object-cover rounded-xl' />
                        <div className='p-4'>
                            <img src="/images/cloud-product.webp" alt="" className='w-[190px] h-[35px] my-7' />
                            <p className='text-lg text-black mt-2'>
                                Develop deep cloud expertise and production-ready cloud talent and skills.
                            </p>
                            <ul className='mt-4 space-y-2 font-semibold'>
                                <li className='py-3 px-4 rounded-md hover:bg-blue-100 cursor-pointer'>
                                    <a href='#' className='flex justify-between text-gray-500'>
                                        <span>View all courses</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                                <li className='py-2 px-4 rounded-md hover:bg-blue-100 cursor-pointer'>
                                    <a href='#' className='flex justify-between text-gray-500'>
                                        <span>For individuals</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                                <li className='py-2 px-4 rounded-md hover:bg-blue-100 cursor-pointer'>
                                    <a href='#' className='flex justify-between text-gray-500'>
                                        <span>Cloud transformation in action</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                                <li className='py-2 px-4 rounded-md hover:bg-blue-100 cursor-pointer'>
                                    <a href='#' className='flex justify-between text-gray-500'>
                                        <span>View plans</span>
                                        <MdKeyboardArrowRight />
                                    </a>
                                </li>
                            </ul>

                            <div className='flex justify-start mt-8'>
                                <a href='#' className='bg-[#e7005e] hover:bg-[#FF1675] text-white px-7 py-3 rounded-full duration-150 font-semibold'>
                                    Explore A Cloud Guru
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Product