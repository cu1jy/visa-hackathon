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

        const doughnutTextPlugin = {
            id: 'doughnutText',
            beforeDraw(chart) {
                const { width, height, ctx } = chart;
                ctx.restore();
                const fontSize = 1.5;
                ctx.font = `${fontSize}em sans-serif`;
                ctx.textBaseline = 'middle';

                const text = '$23.14',
                    textX = 60,
                    textY = 190;

                ctx.fillText(text, textX, textY);
                ctx.save();
            },
        };

        const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['2% Gas Stations & Grocery Stores Bonus', '1% Unlimited Bonus', '1% Sustainable Bonus'],
                datasets: [
                    {
                        data: [30, 3, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132)',
                            'rgba(54, 162, 235)',
                            'rgba(144, 238, 144)',

                        ],
                        borderColor: [
                            'rgba(255, 255, 255)',
                            'rgba(255, 255, 255)',
                            'rgba(255, 255, 255)',
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                cutout: 60,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                },
            },
            plugins: [doughnutTextPlugin],
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
                    <div className='mb-10'>
                        <button className='w-48 inline bg-green-950 text-white text-opacity-70 rounded-full p-2 mr-5'>
                            Cash Back Earned
                        </button>
                        <button className='w-48 inline bg-gray-100 text-gray-400 rounded-full p-2'>
                            Available to Redeem
                        </button>
                    </div>
                    <p className='text-base opacity-70'>
                        Total cash back earned this year as of June 10, 2023:
                    </p>

                    <div className='h-96 w-96 '>
                        <canvas id='myChart' ref={canvas}></canvas>
                    </div>
                </div>

                <div className='h-auto w-full bg-green-950 py-8 px-80'>
                    <h1 className='font-semibold text-2xl text-white opacity-70 italic mb-5'>
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
