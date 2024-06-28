import Image from "next/image";
import Navbar from './components/Navbar'
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col p-10">
        <h1 className='text-5xl font-bold mb-10'>
          Hello, User. {/* ideally would have a way to get name from a user profile */}
        </h1>
        <div className="grid gap-5 justify-end mt-5 text-left grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-full lg:mb-0">
          <Link
            href='/activity'
            className="group h-96 w-80 rounded-3xl border border-transparent px-5 py-4 bg-gray-100"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Current Balance:{" "}
            </h2>
            <hr className="h-px my-4 bg-gray-300 border-0"></hr>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </Link>

          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group h-96 w-80 rounded-3xl border border-transparent px-5 py-4 bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Next Payment Due:{" "}
            </h2>
            <hr className="h-px my-4 bg-gray-300 border-0"></hr>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group h-96 w-80 rounded-3xl border border-transparent px-5 py-4 bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Cash Back Available:{" "}
            </h2>
            <hr className="h-px my-4 bg-gray-300 border-0"></hr>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Earn 2% cash back at Gas Stations and Restaurants on up to $1000 in combined purhcases each quarter, automatically. Plus, you earn unlimited 1% cash back on all other purchases.
              Earn an additional 1% cash back for every sustainable purchase you make.
            </p>
          </a>

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
