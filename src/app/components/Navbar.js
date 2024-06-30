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
                                    CARDECO
                                </a>
                            </div>
                        </div>
                        <div className=' md:block'>
                            <div className='ml-4 flex items-center space-x-4'>
                                <Link href='/activity' className='text-black rounded-lg p-2'>
                                    Activity
                                </Link>
                                <Link href='/rewards' className='text-black rounded-lg p-2'>
                                    Rewards
                                </Link>
                                <Link href='/sustainability' className='text-black rounded-lg p-2'>
                                    Sustainability
                                </Link>
                                <Link href='/' className='text-black rounded-lg p-2'>
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
