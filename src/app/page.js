"use client";
import Image from "next/image";
import Navbar from './components/Navbar'
import Link from "next/link";
import { useEffect, useState } from "react";


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
              Earn 2% cash back at Gas Stations and Restaurants on up to $1000 in combined purchases each quarter, automatically. Plus, you earn unlimited 1% cash back on all other purchases.
              Earn an additional 1% cash back for every sustainable purchase you make.
            </p>
            <Link href={''} className="text-sm text-green-800 font-semibold absolute bottom-4">
              View your cash back summary
            </Link>
          </div>

          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group h-96 w-80 rounded-3xl border border-transparent px-5 py-4 bg-green-950"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-white`}>
              Sustainability:{" "}
            </h2>
            <hr className="h-px my-4 bg-gray-300 border-0 opacity-30"></hr>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-white`}>
              We are dedicated to helping our users become more sustainable through every purchase.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
