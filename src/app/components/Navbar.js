"use client";
import Link from "next/link";
import React from 'react'

const Navbar = () => {
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
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
