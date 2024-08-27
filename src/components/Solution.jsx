import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { WiCloudy } from "react-icons/wi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { LuRocket } from "react-icons/lu";
import { SlBulb } from "react-icons/sl";

function Solution() {
    return (
        <>
            <div className=" solution relative  text-white font-sans p-8">

                <span className=' hidden md:block absolute  -top-[50px] right-10'>
                    <img src="/images/solution-design.png" alt="" />
                </span>
                <section className="text-center container mx-auto py-[8rem] flex flex-col lg:flex-row justify-around items-center">
                    <div className="text-start mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold mb-4">Popular Pluralsight <br /> Skills topics to <br /> learn now</h2>
                        <div>
                            <a href="#" className="text-[#FF528E] text-lg font-bold group flex items-center my-2">
                                View all Skills topics
                                <MdKeyboardArrowRight fontSize={20} className="ml-1 mt-1 transition-transform duration-300 transform group-hover:translate-x-2" />
                            </a>
                        </div>
                    </div>
                    <div className=" grid grid-cols-3 gap-10 md:gap-0 md:flex flex-wrap justify-center lg:justify-around space-x-0 lg:space-x-4 space-y-4 lg:space-y-0">
                        <span className="max-w-[70px] cursor-pointer hover:transform hover:-translate-y-4 duration-300 ">
                            <img src="/images/python-solution.png" alt="" className='hover:border-[#EC008C] hover:border-2 rounded-[8px]' />
                        </span>
                        <span className="max-w-[70px] cursor-pointer hover:transform hover:-translate-y-4 duration-300 ">
                            <img src="/images/react-solution.png" alt="" className='hover:border-[#EC008C] hover:border-2 rounded-[8px]' />
                        </span>
                        <span className="max-w-[70px] cursor-pointer hover:transform hover:-translate-y-4 duration-300 ">
                            <img src="/images/java-solution.png" alt="" className='hover:border-[#EC008C] hover:border-2 rounded-[8px]' />
                        </span>
                        <span className="max-w-[70px] cursor-pointer hover:transform hover:-translate-y-4 duration-300 ">
                            <img src="/images/csharp-solution.png" alt="" className='hover:border-[#EC008C] hover:border-2 rounded-[8px]' />
                        </span>
                        <span className="max-w-[70px] cursor-pointer hover:transform hover:-translate-y-4 duration-300 ">
                            <img src="/images/ruby-solution.png" alt="" className='hover:border-[#EC008C] hover:border-2 rounded-[8px]' />
                        </span>
                        <span className="max-w-[70px] cursor-pointer hover:transform hover:-translate-y-4 duration-300 ">
                            <img src="/images/javascript-solution.png" alt="" className='hover:border-[#EC008C] hover:border-2 rounded-[8px]' />
                        </span>
                        <span className="max-w-[70px] cursor-pointer hover:transform hover:-translate-y-4 duration-300 ">
                            <img src="/images/aws-solution.png" alt="" className='hover:border-[#EC008C] hover:border-2 rounded-[8px]' />
                        </span>
                        <span className="max-w-[70px] cursor-pointer hover:transform hover:-translate-y-4 duration-300 ">
                            <img src="/images/azure-solution.webp" alt="" className='hover:border-[#EC008C] hover:border-2 rounded-[8px]' />
                        </span>
                        <span className="max-w-[70px] cursor-pointer hover:transform hover:-translate-y-4 duration-300 ">
                            <img src="/images/topic-kubernetes-solution.webp" alt="" className='hover:border-[#EC008C] hover:border-2 rounded-[8px]' />
                        </span>
                    </div>
                </section>

                <section className="main-banner container mx-auto p-12 rounded-xl overflow-hidden">
                    <div className="container mx-auto">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
                            <span className='flex justify-center mb-4'>
                                <img src="/images/cloud-icon-solution.webp" alt="" className='w-[50px] h-[30px] sm:w-[60px] sm:h-[35px] md:w-[70px] md:h-[40px]' />
                            </span>
                            <span>A Cloud Guru: <br className="block sm:hidden" /> Learn cloud like never before</span>
                        </h1>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div>
                                <p className="my-8 text-[1.1rem] sm:text-[1.2rem] md:text-[1.35rem] leading-7 font-semibold text-center md:text-left">
                                    <span className='font-bold'>The industry leader in learn-by-doing cloud skill training is now part of Pluralsight!</span> Master the skills you need to boost your career or accelerate your company’s cloud transformation. In fact, 96% of our business customers see improved results within six months. <span className='font-bold'>Now you can, too.</span>
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center md:place-items-start">
                                    <div className="flex items-center py-5 space-x-5">
                                        <span className="w-12 sm:w-14 bg-white rounded-full">
                                            <img src="/images/lightning-icon-solution.webp" alt="" />
                                        </span>
                                        <p className='text-[1rem] sm:text-[1.12rem] font-medium text-center md:text-left'>
                                            100s of courses and <br /> 1000s of hands-on labs
                                        </p>
                                    </div>

                                    <div className="flex items-center py-5 space-x-5">
                                        <span className="w-12 sm:w-14 bg-white rounded-full">
                                            <img src="/images/group-icon-solution.webp" alt="" />
                                        </span>
                                        <p className='text-[1rem] sm:text-[1.12rem] font-medium text-center md:text-left'>
                                            Coverage of all major <br /> cloud providers
                                        </p>
                                    </div>

                                    <div className="flex items-center py-5 space-x-5">
                                        <span className="w-12 sm:w-14 bg-white rounded-full">
                                            <img src="/images/cloud-gear-icon-solution.webp" alt="" />
                                        </span>
                                        <p className='text-[1rem] sm:text-[1.12rem] font-medium text-center md:text-left'>
                                            Real cloud development <br /> practice environments
                                        </p>
                                    </div>

                                    <div className="flex items-center py-5 space-x-5">
                                        <span className="w-12 sm:w-14 bg-white rounded-full">
                                            <img src="/images/lightbulb-icon-solution.webp" alt="" />
                                        </span>
                                        <p className='text-[1rem] sm:text-[1.12rem] font-medium text-center md:text-left'>
                                            Tailored-to-you learning <br /> paths for every skill level
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 py-8 items-center md:items-start">
                                    <button className="bg-[#242145] text-white py-4 px-8 rounded-full font-bold w-full md:w-auto">
                                        View Pricing
                                    </button>
                                    <button className="bg-transparent border border-white py-4 px-8 rounded-full text-white font-bold w-full md:w-auto">
                                        Tell Me More
                                    </button>
                                </div>
                            </div>

                            <div className='hidden md:block cloud-guru md:relative md:top-[3.3rem]'>
                            </div>
                            <span className='md:hidden block'>
                                <img src="/images/cloud-guru-culture.webp" alt="" />
                            </span>


                        </div>
                    </div>
                </section>

                <section className="mt-20 container mx-auto p-4 sm:p-12 future">
                    <h1 className='font-bold text-lg sm:text-xl'>Our Solutions</h1>
                    <h2 className="text-3xl sm:text-5xl font-bold my-4">Face the future with confidence</h2>
                    <p className="mb-8 text-base sm:text-xl">
                        Transform your technology workforce. One developer. One delivery. One success at a time. <br /> Here's how we enable you to conquer the challenges you're facing:
                    </p>

                    <button className='flex justify-center items-center mb-8 font-bold text-[#FF5297] hover:text-[#ec008c] text-sm sm:text-base'>
                        See all solutions <MdKeyboardArrowRight fontSize={20} className='mt-1' />
                    </button>

                    <div className='grid grid-cols-1 sm:grid-cols-2 pt-8'>

                        <div className="w-full sm:w-[90%]">
                            <div className="mb-4 border-t-4 border-[#FF166D]">
                                <div className="flex justify-between items-center cursor-pointer pb-4">
                                    <div className="flex items-center mt-5">
                                        <span><WiCloudy fontSize={30} className='text-[#FF166D] mr-5' /></span>
                                        <h3 className="text-white text-[1.2rem] sm:text-[1.4rem] font-bold">Cloud transformation</h3>
                                    </div>
                                    <div className="mt-5"><IoIosArrowUp fontSize={20} /></div>
                                </div>
                                <div className="mt-2 ps-6 sm:ps-12 text-white border-b border-[#89a4c780]">
                                    <p className="text-[0.9rem] sm:text-[1rem] font-semibold mb-2">
                                        Overcome complex cloud challenges and build cloud talent from within.
                                    </p>
                                    <a href="#" className="flex items-center text-[#FF5297] font-semibold group mb-8">
                                        <span className='group-hover:text-[#ec008c] font-bold'>Learn more</span> <span className="ml-1"><MdKeyboardArrowRight /></span>
                                    </a>
                                </div>
                            </div>

                            {[
                                { title: 'Upskilling/reskilling', icon: <LuRocket /> },
                                { title: 'Tech fluency', icon: <SlBulb /> },
                                { title: 'Engineering onboarding', icon: <img src='/images/solution-icon.png' /> },
                                { title: 'Software delivery', icon: <img src='/images/solution-icon-new.png' /> },
                                { title: 'Agile transformation', icon: <img src='/images/solution-icon-2.png' /> },
                            ].map((item, index) => (
                                <div key={index} className="mb-2">
                                    <div className="flex justify-between items-center cursor-pointer py-4 border-b border-[#89a4c780]">
                                        <div className="flex items-center text-lg sm:text-xl">
                                            <span className="mr-4 sm:mr-6 text-[#B6B9D8]">{item.icon}</span>
                                            <h3 className="text-white text-[1.2rem] sm:text-[1.4rem] font-bold">{item.title}</h3>
                                        </div>
                                        <span className="text-[#89a4c780]"><IoIosArrowDown fontSize={18} /></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 sm:mt-0">
                            <img src="/images/cloud-transformation-solution.webp" alt="" className="w-full" />
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}

export default Solution