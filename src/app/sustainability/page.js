import React from 'react'
import Navbar from '../components/Navbar'
import { FaUserCircle } from "react-icons/fa";

const page = () => {
    return (
        <>
            <Navbar>
            </Navbar>
            <main className="flex flex-col p-10">
                <h1 className='text-5xl font-bold mb-10'>
                    Sustainability Analysis
                </h1>
                <div className="grid gap-5 justify-end mt-5 text-left grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-full lg:mb-0">
                    <div
                        className="group h-96 w-96 rounded-3xl border border-transparent px-5 py-4 bg-green-950 relative"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold text-white opacity-50`}>
                            Sustainability Score:{" "}
                        </h2>
                        <hr className="h-px my-4 bg-gray-300 border-0 opacity-50"></hr>
                    </div>

                    <div
                        // href="/activity"
                        className="group h-96 w-96 rounded-3xl border border-transparent px-5 py-4 bg-gray-100"
                    //rel="noopener noreferrer"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Your CO2 Emissions:{" "}
                        </h2>
                        <hr className="h-px my-4 bg-gray-300 border-0"></hr>
                    </div>

                    <div
                        className="group h-96 w-96 rounded-3xl border border-transparent px-5 py-4 bg-green-950 relative"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold text-white text-opacity-50`}>
                            Cash Earned from Sustainable Purchases:{" "}
                        </h2>
                        <hr className="h-px my-4 bg-gray-300 border-0  opacity-50"></hr>
                    </div>

                </div>
                <h2 className='text-3xl font-bold mt-10 mb-5'>
                    Sustainability Leaderboard
                </h2>
                <p className='text-sm text-gray-400 mb-5'>
                    Earn points for every sustainable purchase you make. First, second, and third place receive double their cash back on sustainble purchases for the rest of the quarter.
                </p>
                <div className='h-auto w-full bg-gray-200 rounded-xl p-1'>
                    <div className='h-16 w-full flex items-center p-4 bg-gray-100 rounded-full mb-1'>
                        <div className='w-2/12 text-md inline-block text-left'>
                            147
                        </div>
                        <FaUserCircle></FaUserCircle>
                        <div>You</div>
                        <div>35 pts</div>
                    </div>
                    <div className='h-16 w-full flex items-center p-4 bg-gray-100 rounded-full mb-1'></div>
                    <div className='h-16 w-full flex items-center p-4 bg-green-950 rounded-full mb-1'></div>
                    <div className='h-16 w-full flex items-center p-4 bg-gray-100 rounded-full mb-1'></div>
                    <div className='h-16 w-full flex items-center p-4 bg-gray-100 rounded-full mb-1'></div>
                </div>
            </main>
        </>
    )
}

export default page
