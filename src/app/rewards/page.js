"use client";
import Navbar from '../components/Navbar'
import { Chart } from 'chart.js/auto'
import React from 'react'
import { useRef, useEffect } from 'react'

const page = () => {
    const canvas = useRef();

    useEffect(() => {
        const ctx = canvas.current;

        let chartStatus = Chart.getChart('myChart');
        if (chartStatus != undefined) {
            chartStatus.destroy();
        }

        const chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['2%', '1% Unlimited', '1% Sustainable'],
                datasets: [
                    {
                        data: [30, 3, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',

                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderWidth: 0,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                },
            },
        });
    }, []);

    return (
        <>
            <Navbar></Navbar >
            <main>
                <div className='h-auto w-full flex flex-col justify-center items-center pt-7'>
                    <p className=' text-3xl font-semibold text-center pb-5'>
                        User,<br></br> Here is your cash back summary.
                    </p>
                    <div>
                        <button className='w-48 inline bg-green-950 text-white text-opacity-70 rounded-full p-2 mr-5'>
                            Cash Back
                        </button>
                        <button className='w-48 inline bg-gray-100 text-gray-400 rounded-full p-2'>
                            Available to Redeem
                        </button>
                    </div>
                    <div className='w-full flex items-center justify-center h-72 bg-gray-100 mt-5'>
                        <canvas id='myChart' ref={canvas}></canvas>
                    </div>
                </div>

                <div className='h-full w-full bg-green-950 py-8 px-80'>
                    <h1 className='font-semibold text-2xl text-white opacity-50 italic mb-5'>
                        How do I earn cash back?
                    </h1>
                    <p className='text-white opacity-50 text-base'>
                        Earn 2% cash back at Gas Stations and Grocery Stores on up to $1000 in combined purchases each quarter, automatically. Plus, you earn unlimited 1% cash back on all other purchases.
                        Earn an additional 1% cash back for every sustainable purchase you make.
                    </p>
                </div>
            </main>
        </>
    )
}

export default page
