import Navbar from '../components/Navbar'
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col p-10">
                <h1 className='text-5xl font-bold mb-10'>
                    Activity & Statements
                </h1>
                <div className='grid grid-cols-5 gap-5'>
                    {/* left side of main */}
                    <div className=' col-span-3'>
                        <button className='h-12 w-full flex bg-gray-100 rounded-xl text-left mb-4 pl-3 items-center'>
                            <p className='opacity-50 inline'>
                                Show me
                            </p>
                            <div className='h-full border-l-2 border-gray-300 inline mx-3'></div>
                            <p className='opacity-50 inline'>
                                Recent Activity (Jun 11, 2024 - Today)
                            </p>
                            <FaChevronDown className='text-gray-500 ml-auto mr-3 inline mt-1' />
                        </button>
                        <div className='h-48 w-full bg-gray-100 rounded-xl'>
                            <button className='h-12 w-full flex bg-green-950 rounded-t-xl text-left p-3'>
                                <p className='text-white opacity-70 inline'>
                                    Recent Activity (June 11, 2024 - Today)
                                </p>
                                <div className='ml-auto'>
                                    <p className='text-white opacity-70 inline'>
                                        Sort by: Date (Descending)
                                    </p>
                                    <FaChevronDown className='text-white opacity-70 float-right inline mt-1 ml-3' />
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* right side of main */}
                    <div className='col-span-2'>
                        <div className='h-48 w-full bg-gray-100 rounded-xl mt-16 p-3'>
                            <p className='font-semibold'>
                                Activity Summary
                            </p>
                            <p>
                                Recent Activity (Jun 11, 2024 - Today)
                            </p>
                            <hr className='bg-gray-100 my-3 w-full'></hr>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
}
