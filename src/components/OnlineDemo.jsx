import React from 'react'

function OnlineDemo() {
    return (
        <>
            <div className='mt-24 mx-auto container grid md:grid-cols-2 grid-cols-1 gap-4'>

                <div className='max-w-[100%]'>
                    <img src="/images/online-demo.webp" alt="" />
                </div>

                <div className='my-4 p-10 md:p-1'>
                    <h4 className='text-xl text-[#FF168B] font-bold  '>Online demo</h4>
                    <h2 className='text-[36px] font-bold text-[#130F25] my-6'>See our solutions in action</h2>
                    <p className='my-6 text-lg font-semibold'>Check out our demos to see in action the platform features that'll transform your teams, and get all the details straight from the experts who know your problems—and your solutions—best.</p>
                    <button className=" flex justify-center items-center bg-[#e7005e] hover:bg-[#FF1675] text-white px-7 py-3 rounded-full duration-150 font-semibold">
                        <span className='w-[24px] me-2'><img src="/images/play-icon.webp" alt="" /></span>
                        <span className='text-md font-bold'>Tour solutions</span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default OnlineDemo