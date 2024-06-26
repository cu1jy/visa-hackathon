"use client";
import React from 'react'

const Navbar = () => {
    // const [isClick, setisClick] = useState(false);

    // const toggleNavbar = () => {
    //     setisClick(!isClick)
    // }

    return (
        <>
            <nav>
                <div className='max-w-9l mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-16'>
                        <div className='flex items-center'>
                            <div className='flex-shrink-0'>
                                <a href='/' className='text-green-900 font-bold'>
                                    ECOCARD
                                </a>
                            </div>
                        </div>
                        <div className=' md:block'>
                            <div className='ml-4 flex items-center space-x-4'>
                                <a href='/' className='text-black rounded-lg p-2'>
                                    Activity
                                </a>
                                <a href='/' className='text-black rounded-lg p-2'>
                                    Rewards
                                </a>
                                <a href='/' className='text-black rounded-lg p-2'>
                                    Sustainability
                                </a>
                                <a href='/' className='text-black rounded-lg p-2'>
                                    Logout
                                </a>
                            </div>
                        </div>
                        {/* <div className='md:hidden flex items-center'>
                            <button className='inline-flex items-center justify-center p-2 rounded-md text-black
                            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                onClick={toggleNavbar}>

                            </button>
                        </div> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
