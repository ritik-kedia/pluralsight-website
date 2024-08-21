import React from 'react'

function HeroSection() {
    return (
        <>
            <div className="w-full h-full pt-4 bg-gradient-to-l from-[#242145] via-[#DD1874] to-[#242145]">
                <main className="pt-20 mt-8 mx-auto max-w-[1340px] rounded-xl bg-gradient-to-r from-[#1C1835] via-[#6B154C] to-[#551853]">
                    <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] font-bold text-center text-white mb-4">
                        Pluralsight empowers you to <br /> deliver faster
                    </h1>
                    <p className="text-white text-center text-[1rem] sm:text-[1.25rem] md:text-[1.5rem]">
                        Develop critical tech skills. Cut cycle times. Build happier, healthier tech teams. <br />
                        And innovate smarter using AI. All with Pluralsight.
                    </p>
                    <div className="mt-8 text-center">
                        <button className="bg-[#FF1675] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mr-2 sm:mr-4 hover:bg-pink-600">
                            Get started
                        </button>
                        <button className="border border-[#6f63f8] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#6f63f8]">
                            Learn AI
                        </button>
                    </div>

                    <div className="mt-8 text-xl sm:text-2xl">
                        <div className="flex justify-center mt-10 md:mb-14">
                            <img src="/images/hero-logo.svg" alt="" className='w-[200px] h-[40px]' />
                        </div>
                        <img src="/images/heroSection.webp" alt="" className="w-full p-6 md:p-20 rounded-lg" />
                    </div>
                </main>

                <div className='max-w-[1170px] mx-auto text-center py-8 font-bold'>
                    <span className='text-white text-xl'>Organizations we’ve helped:</span>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-8 mt-4 items-center'>
                        <img src="/images/dell-logo.webp" alt="" className='w-[210px] h-[25px] mx-auto' />
                        <img src="/images/ge-logo.webp" alt="" className='w-[210px] h-[65px] mx-auto' />
                        <img src="/images/fedex-logo.webp" alt="" className='w-[130px] h-[35px] mx-auto' />
                        <img src="/images/ford-logo.webp" alt="" className='w-[170px] h-[64px] mx-auto' />
                        <img src="/images/bt-logo.webp" alt="" className='w-[66px] h-[66px] mx-auto' />
                    </div>
                </div>
            </div>


        </>
    )
}

export default HeroSection
