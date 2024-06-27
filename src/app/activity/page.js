import Navbar from './components/Navbar'

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col p-10">
                <h1 className='text-5xl font-bold mb-10'>
                    Activity & Statements
                </h1>
            </main>
        </>
    );
}
