"use client";
import Navbar from '../components/Navbar'
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Home() {
    const [transactions, setTransactions] = useState([]);

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
                                Recent Activity (Jun 11, 2023 - Today)
                            </p>
                            <FaChevronDown className='text-gray-500 ml-auto mr-3 inline mt-1' />
                        </button>
                        <div className='h-auto w-full bg-gray-100 rounded-xl'>
                            <button className='h-12 w-full flex bg-green-950 rounded-t-xl text-left p-3'>
                                <p className='text-white opacity-70 inline'>
                                    Recent Activity (June 11, 2023 - Today)
                                </p>
                                <div className='ml-auto'>
                                    <p className='text-white opacity-70 inline'>
                                        Sort by: Date (Descending)
                                    </p>
                                    <FaChevronDown className='text-white opacity-70 float-right inline mt-1 ml-3' />
                                </div>
                            </button>
                            <button className='h-24 w-full border-b-2 flex items-center p-4 opacity-70'>
                                <div className='w-2/12 text-md inline-block text-left'>Jun 28</div>
                                <div className='w-9/12 inline-block text-left'>
                                    <p className='font-semibold text-md mb-2'>
                                        ASDA
                                    </p>
                                    <p className='text-sm'>
                                        Grocery Stores/Supermarkets
                                    </p>
                                </div>
                                <div className='w-1/12 inline-block text-right'>
                                    <p className='mb-2 text-md'>
                                        $139.59
                                    </p>
                                    <p className='text-sm'>
                                        $377.76
                                    </p>
                                </div>

                            </button>
                            <button className='h-24 w-full border-b-2 flex items-center p-4 opacity-70'>
                                <div className='w-2/12 text-md inline-block text-left'>Jun 28</div>
                                <div className='w-9/12 inline-block text-left'>
                                    <p className='font-semibold text-md mb-2'>
                                        COMPANY SHOP LTD
                                    </p>
                                    <p className='text-sm'>
                                        Grocery Stores/Supermarkets
                                    </p>
                                </div>
                                <div className='w-1/12 inline-block text-right'>
                                    <p className='mb-2 text-md'>
                                        $20.68
                                    </p>
                                    <p className='text-sm'>
                                        $238.17
                                    </p>
                                </div>

                            </button>
                            <button className='h-24 w-full border-b-2 flex items-center p-4 opacity-70'>
                                <div className='w-2/12 text-md inline-block text-left'>Jun 25</div>
                                <div className='w-9/12 inline-block text-left'>
                                    <p className='font-semibold text-md mb-2'>
                                        WM MORRISON
                                    </p>
                                    <p className='text-sm'>
                                        Grocery Stores/Supermarkets
                                    </p>
                                </div>
                                <div className='w-1/12 inline-block text-right'>
                                    <p className='mb-2 text-md'>
                                        $60.92
                                    </p>
                                    <p className='text-sm'>
                                        $217.49
                                    </p>
                                </div>

                            </button>
                            <button className='h-24 w-full border-b-2 flex items-center p-4 opacity-70'>
                                <div className='w-2/12 text-md inline-block text-left'>Jun 18</div>
                                <div className='w-9/12 inline-block text-left'>
                                    <p className='font-semibold text-md mb-2'>
                                        WM MORRISON
                                    </p>
                                    <p className='text-sm'>
                                        Grocery Stores/Supermarkets
                                    </p>
                                </div>
                                <div className='w-1/12 inline-block text-right'>
                                    <p className='mb-2 text-md'>
                                        $54.62
                                    </p>
                                    <p className='text-sm'>
                                        $156.57
                                    </p>
                                </div>

                            </button>
                            <button className='h-24 w-full flex items-center p-4 opacity-70'>
                                <div className='w-2/12 text-md inline-block text-left'>Jun 14</div>
                                <div className='w-9/12 inline-block text-left'>
                                    <p className='font-semibold text-md mb-2'>
                                        WM MORRISON
                                    </p>
                                    <p className='text-sm'>
                                        Grocery Stores/Supermarkets
                                    </p>
                                </div>
                                <div className='w-1/12 inline-block text-right'>
                                    <p className='mb-2 text-md'>
                                        $101.95
                                    </p>
                                    <p className='text-sm'>
                                        $101.95
                                    </p>
                                </div>

                            </button>
                        </div>
                    </div>
                    {/* right side of main */}
                    <div className='col-span-2'>
                        <div className='h-auto w-full bg-gray-100 rounded-xl mt-16'>
                            <p className='font-semibold pt-4 pl-4 mb-2'>
                                Activity Summary
                            </p>
                            <p className='pl-4 text-sm opacity-70'>
                                Recent Activity (Jun 11, 2023 - Today)
                            </p>
                            <hr className='h-px mt-4 w-full'></hr>
                            <div className='opacity-70 w-full p-4'>
                                <div className='flex justify-between mb-2'>
                                    <p className='text-left text-sm '>Last Statement Balance</p>
                                    <p className=' text-right text-sm '>$585.23</p>
                                </div>
                                <div className='flex justify-between mb-2'>
                                    <p className='text-left text-sm '>Posted Transactions</p>
                                    <p className=' text-right text-sm '>+ $624.79</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-left text-sm '>Payments & Credits</p>
                                    <p className='text-green-800 text-right text-sm '>- $0.00</p>
                                </div>
                            </div>
                            <hr className='h-px mx-4'></hr>
                            <div className='opacity-70 w-full p-4'>
                                <div className='flex justify-between mb-2 text-base font-semibold'>
                                    <p className='text-left'>Current Balance</p>
                                    <p className=' text-right '>$377.76</p>
                                </div>
                                <div className='flex justify-between mb-2 text-sm'>
                                    <p className='text-left'>Pending Transactions</p>
                                    <p className=' text-right '>$0.00</p>
                                </div>
                                <div className='flex justify-between mb-2 text-sm'>
                                    <p className='text-left'>Next Statement Closing Date</p>
                                    <p className=' text-right '>Jul 10, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </main >
        </>
    );
}

// {transactions.map((transaction, index) => {
//     <div key={index} className={`p-4 rounded shadow ${transaction.className}`}>
//         <p>Date: {transaction.date}</p>
//         <p>Amount: ${transaction.amount.toFixed(2)}</p>
//         <p>Location: {transaction.location}</p>
//     </div>
// })}
