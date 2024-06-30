"use client";
import Image from "next/image";
import Navbar from './components/Navbar'
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";


export default function Home() {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetch('/transactions.json')
      .then(response => response.json())
      .then(data => {
        const sum = data.reduce((acc, transaction) => acc + transaction.amount, 0);
        setTotalAmount(sum.toFixed(2)); // Set the sum to the state with two decimal places
      })
      .catch(error => console.error('Error fetching the transactions:', error));
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-col p-10">
        <h1 className='text-5xl font-bold mb-10'>
          Hello, User. {/* ideally would have a way to get name from a user profile */}
        </h1>
        <div className="grid gap-5 justify-end mt-5 text-left grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-full lg:mb-0">
          <div
            className="group h-96 w-80 rounded-3xl border border-transparent px-5 py-4 bg-gray-100 relative"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Current Balance:{" "}
            </h2>
            <hr className="h-px my-4 bg-gray-300 border-0"></hr>
            <h2 className="text-3xl font-bold">
              ${totalAmount}
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 my-4`}>
              Last Statement Balance: <br></br> $175.23 on 6/10/2023
            </p>
            <Link href={'/activity'} className="text-sm text-green-800 font-semibold absolute bottom-4">
              View Activity & Statements
            </Link>
          </div>

          <div
            // href="/activity"
            className="group h-96 w-80 rounded-3xl border border-transparent px-5 py-4 bg-gray-100"
          //rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Next Payment Due:{" "}
            </h2>
            <hr className="h-px my-4 bg-gray-300 border-0"></hr>
            <h2 className="text-3xl font-bold">
              Jul 05
            </h2>
            <button className="h-12 w-full bg-green-950 text-lg text-white rounded-3xl px-5 my-4">
              Make a Payment
            </button>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Minimum payment due: <br></br> $20.00 <br></br><br></br> Last Payment: <br></br> $453.64 on 6/03/2023
            </p>
          </div>

          <div
            className="group h-96 w-80 rounded-3xl border border-transparent px-5 py-4 bg-gray-100 relative"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Cash Back Available:{" "}
            </h2>
            <hr className="h-px my-4 bg-gray-300 border-0"></hr>
            <h2 className="text-3xl font-bold">
              $34.52
            </h2>
            <button className="h-12 w-full bg-green-950 text-lg text-white rounded-3xl px-5 my-4">
              Ways to Redeem
            </button>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Earn 2% cash back at Gas Stations and Grocery Stores on up to $1000 in combined purchases each quarter, automatically. Plus, you earn unlimited 1% cash back on all other purchases.
              Earn an additional 1% cash back for every sustainable purchase you make.
            </p>
            <Link href={'/rewards'} className="text-sm text-green-800 font-semibold absolute bottom-4">
              View your cash back summary
            </Link>
          </div>

          <div
            className="group h-96 w-80 relative rounded-3xl border border-transparent px-5 py-4 bg-green-950"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-white`}>
              Sustainability:{" "}
            </h2>
            <hr className="h-px my-4 bg-gray-300 border-0 opacity-30"></hr>
            <div className="mb-7">
              <p className="text-lg font-semibold text-white opacity-60 mb-1">
                Your Sustainbility Score:
              </p>
              <p className="text-3xl font-bold text-white inline mr-2">
                37
              </p>
              <FaArrowUp className="text-white opacity-50 inline text-sm mr-1"></FaArrowUp>
              <p className="text-sm text-white opacity-50 inline">5 points from last month</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white opacity-60 mb-1">
                Your Current Emissions:
              </p>
              <p className="text-3xl font-bold text-white inline mr-2">
                270 kg
              </p>
              <FaArrowDown className="text-white opacity-50 inline text-sm mr-1"></FaArrowDown>
              <p className="text-sm text-white opacity-50 inline">15% from last month</p>
            </div>
            <Link href={'/sustainability'} className="text-sm text-white opacity-50 font-semibold absolute bottom-4">
              View your full sustainability analysis
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
