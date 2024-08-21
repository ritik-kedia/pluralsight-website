import React from 'react'

function Pluralintro() {
    return (
        <>
            <div className='mt-24 mx-auto container grid md:grid-cols-2 grid-cols-1'>
                <div className='my-4 p-10 md:p-1'>
                    <h2 className='text-5xl font-bold text-[#130F25] my-6'>Why Pluralsight?</h2>
                    <p className='my-6 text-lg font-semibold'>Whether you’re an individual looking to learn Python to advance your career <br /> or an enterprise team looking to cut cycle times, speed up onboarding, or <br /> give your teams the skills to realize your strategies, we remove the <br /> challenges and roadblocks slowing you down. We’re advancing the world’s <br /> tech workforce, and that starts with making your work more efficient and <br /> effective—and giving you more to celebrate.</p>
                    <button className=" bg-[#e7005e] hover:bg-[#FF1675] text-white px-7 py-3 rounded-full duration-150 font-semibold">
                    See our solutions
                    </button>
                </div>

                <div>
                    <img src="/images/pluralsight-puzzle-piece.webp" alt="" />
                </div>
            </div>
        </>
    )
}

export default Pluralintro