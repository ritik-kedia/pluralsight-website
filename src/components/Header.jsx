import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";


function Header() {
    return (
        <>
            <header className="bg-[#242145] text-white sticky top-0 z-[99999]">

                <div className="md:block hidden bg-[#1B1834] py-2">
                    <div className="container mx-auto py-2 px-4 flex justify-end items-center">
                        <nav className="text-[0.9rem] space-x-6 flex items-center">
                            <div className="flex space-x-6">
                                <a
                                    href="/"
                                    className="text-[#a5aacf] hover:text-white relative group"
                                >
                                    Pluralsight
                                    <span className="absolute left-0 bottom-0 w-full h-[3px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </a>
                                <a href="/" className="text-[#a5aacf] hover:text-white">Skills</a>
                                <a href="/" className="text-[#a5aacf] hover:text-white">A Cloud Guru</a>
                                <a href="/" className="text-[#a5aacf] hover:text-white">Flow</a>
                                <a href="/" className="text-[#a5aacf] hover:text-white">Blog</a>
                            </div>
                            <span className="text-gray-500 border h-6"></span>

                            <button className="flex items-center text-[#a5aacf] hover:text-white space-x-1">
                                <img src="/images/sign.svg" alt="Sign In Icon" className="h-6 w-6 me-2" />
                                <span>Sign In</span>
                                <MdKeyboardArrowDown className="ml-1" />
                            </button>
                        </nav>
                    </div>
                </div>


                <div className="container mx-auto px-4 py-5 flex justify-between items-center">
                    <div className="flex items-center space-x-12">
                        <img
                            src="/images/pluralsight-color-full-logo.png"
                            alt="Pluralsight Logo"
                            className="h-10 w-auto"
                        />

                        <nav className="hidden md:flex space-x-8 text-white font-semibold">
                            <div>
                                <a href="/" className=" text-[#a5aacf] hover:text-white flex items-center">
                                    Solutions <MdKeyboardArrowDown className="ml-1" />
                                </a>

                            </div>
                            <div className="relative group">
                                <a href="/" className="text-[#a5aacf] hover:text-white  flex items-center">
                                    Products <MdKeyboardArrowDown className="ml-1" />
                                </a>

                            </div>
                            <a href="/" className="text-[#a5aacf] hover:text-white flex items-center ">
                                Resources <MdKeyboardArrowDown className="ml-1" />
                            </a>
                        </nav>

                    </div>


                    <div className="flex items-center space-x-12 font-semibold">

                        <div className='hidden md:flex items-center gap-4 mr-6'>
                            <IoSearchSharp className="text-white w-6 h-6 cursor-pointer hover:text-pink-500" />

                            <button className="hidden md:inline-block border border-white text-white px-6 py-2 rounded-full hover:bg-[#6f63f8] hover:text-[white]">
                                Contact Sales
                            </button>

                        </div>

                        <button className="hidden md:inline-block bg-[#e7005e] hover:bg-[#FF1675] text-white px-7 py-2 rounded-full">
                            View Plans
                        </button>
                        <div className=' flex md:hidden items-center justify-end'>
                            <IoMenu fontSize={30} />
                        </div>

                    </div>
                </div>
            </header >
        </>
    )
}

export default Header