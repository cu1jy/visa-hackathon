"use client";
import React from 'react'
import Navbar from '../components/Navbar'
import { Chart } from 'chart.js/auto'
import { FaUserCircle } from "react-icons/fa";
import { useRef, useEffect } from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

const page = () => {
    const canvas1 = useRef();
    const canvas2 = useRef();

    useEffect(() => {
        const ctx1 = canvas1.current;

        let chartStatus1 = Chart.getChart(ctx1);
        if (chartStatus1 != undefined) {
            chartStatus1.destroy();
        }

        const xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
        const yValues = [24, 23, 34, 38, 34, 37];

        const scorechart = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(255,255,255,1.0)", // Point fill color
                    borderColor: "rgba(255,255,255,1.0)",     // Line color
                    pointBackgroundColor: "rgba(255,255,255,1.0)", // Point border color
                    pointBorderColor: "rgba(255,255,255,1.0)",
                    data: yValues,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: 'white',
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)',
                        },
                    },
                    y: {
                        ticks: {
                            color: 'white',
                            min: 20,
                            max: 40,
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)',
                        },
                    },
                },
            }
        });

        const ctx2 = canvas2.current;

        let chartStatus2 = Chart.getChart(ctx2);
        if (chartStatus2 != undefined) {
            chartStatus2.destroy();
        }

        const yValues2 = [307, 295, 325, 340, 302, 270];

        const emissionschart = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,0,0,1.0)", // Point fill color
                    borderColor: "rgba(0,0,0,1.0)",     // Line color
                    pointBackgroundColor: "rgba(0,0,0,1.0)", // Point border color
                    pointBorderColor: "rgba(0,0,0,1.0)",
                    data: yValues2,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: 'black',
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                        },
                    },
                    y: {
                        ticks: {
                            color: 'black',
                            min: 20,
                            max: 40,
                        },
                        grid: {
                            color: 'rgba(0,0,0, 0.1)',
                        },
                    },
                },
            }
        });
    }, []);

    return (
        <>
            <Navbar>
            </Navbar>
            <main className="flex flex-col p-10">
                <h1 className='text-5xl font-bold mb-10'>
                    Sustainability Report
                </h1>
                <div className="grid gap-5 justify-end mt-5 text-left grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-full lg:mb-0">
                    <div
                        className="group h-[25rem] w-96 rounded-3xl border border-transparent px-5 py-4 bg-green-950 relative"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold text-white`}>
                            Sustainability Score:{" "}
                        </h2>
                        <hr className="h-px my-4 bg-gray-300 border-0 opacity-50"></hr>
                        <div className="mb-7">
                            <p className="text-lg font-semibold text-white opacity-60 mb-1">
                                Your Sustainability Score:
                            </p>
                            <p className="text-3xl font-bold text-white inline mr-2">
                                37
                            </p>
                            <FaArrowUp className="text-white opacity-50 inline text-sm mr-1"></FaArrowUp>
                            <p className="text-sm text-white opacity-50 inline">5 points from last month</p>
                        </div>
                        <div className='h-80 w-80 '>
                            <p className="text-lg font-semibold text-white opacity-60 mb-3">
                                Your Score This Year:
                            </p>
                            <canvas id='myChart' ref={canvas1}></canvas>
                        </div>
                    </div>

                    <div
                        // href="/activity"
                        className="group h-[25rem] w-96 rounded-3xl border border-transparent px-5 py-4 bg-gray-100"
                    //rel="noopener noreferrer"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Your CO2 Emissions:{" "}
                        </h2>
                        <hr className="h-px my-4 bg-gray-300 border-0"></hr>
                        <div className='mb-7'>
                            <p className="text-lg font-semibold opacity-60 mb-1">
                                Your Current Emissions:
                            </p>
                            <p className="text-3xl font-bold inline mr-2">
                                270 kg
                            </p>
                            <FaArrowDown className="opacity-50 inline text-sm mr-1"></FaArrowDown>
                            <p className="text-sm  opacity-50 inline">15% from last month</p>
                        </div>
                        <div className='h-80 w-80 '>
                            <p className="text-lg font-semibold opacity-60 mb-3">
                                Your Emissions This Year:
                            </p>
                            <canvas id='myChart' ref={canvas2}></canvas>
                        </div>
                    </div>

                    <div
                        className="group h-[25rem] w-96 rounded-3xl border border-transparent px-5 py-4 bg-green-950 relative"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold text-white`}>
                            Cash Earned from Sustainable Purchases:{" "}
                        </h2>
                        <hr className="h-px my-4 bg-gray-300 border-0  opacity-50"></hr>
                        <p className="text-3xl font-bold text-white inline mr-2">
                            $5.42
                        </p>
                        <p className='text-sm opacity-50 absolute bottom-4 text-white break-words'>
                            Earn an additional 1% cash back from any <br></br>sustainable purchase.
                        </p>
                    </div>

                </div>
                <h2 className='text-3xl font-bold mt-10 mb-5 text-center'>
                    Sustainability Leaderboard
                </h2>
                <p className='text-sm text-gray-400 mb-5 text-center'>
                    Earn points for every sustainable purchase you make. First, second, and third place receive double their cash back earned at the end of the year.
                </p>
                <div className='w-full flex justify-center align-middle'>
                    <div className='h-auto w-1/2 bg-gray-200 rounded-xl p-1'>
                        <div className='h-16 w-full flex items-center p-8 bg-gray-100 rounded-full mb-1 text-gray-500'>
                            <p className=' text-gray-500 mr-10'>
                                #145
                            </p>
                            <div className='flex items-center'>
                                <FaUserCircle className='justify-start mr-3'></FaUserCircle>
                                <p>User #15238</p>
                            </div>
                            <p className='ml-auto'>43 pts</p>
                        </div>
                        <div className='h-16 w-full flex items-center p-8 bg-gray-100 rounded-full mb-1 text-gray-500'>
                            <p className=' text-gray-500 mr-10'>
                                #146
                            </p>
                            <div className='flex items-center'>
                                <FaUserCircle className='justify-start mr-3'></FaUserCircle>
                                <p>User #4295</p>
                            </div>
                            <p className='ml-auto'>38 pts</p>
                        </div>
                        <div className='h-16 w-full flex items-center p-8 bg-green-950 rounded-full mb-1 text-white text-opacity-80'>
                            <p className='  mr-10'>
                                #147
                            </p>
                            <div className='flex items-center'>
                                <FaUserCircle className='justify-start mr-3'></FaUserCircle>
                                <p>You</p>
                            </div>
                            <p className='ml-auto'>37 pts</p>
                        </div>
                        <div className='h-16 w-full flex items-center p-8 bg-gray-100 rounded-full mb-1 text-gray-500'>
                            <p className=' text-gray-500 mr-10'>
                                #148
                            </p>
                            <div className='flex items-center'>
                                <FaUserCircle className='justify-start mr-3'></FaUserCircle>
                                <p>User #588293</p>
                            </div>
                            <p className='ml-auto'>35 pts</p>
                        </div>
                        <div className='h-16 w-full flex items-center p-8 bg-gray-100 rounded-full mb-1 text-gray-500'>
                            <p className=' text-gray-500 mr-10'>
                                #149
                            </p>
                            <div className='flex items-center'>
                                <FaUserCircle className='justify-start mr-3'></FaUserCircle>
                                <p>User #38492</p>
                            </div>
                            <p className='ml-auto'>34 pts</p>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default page
