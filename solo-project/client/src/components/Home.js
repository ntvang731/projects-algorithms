import React from 'react';

const Home = () => {
    return (
        // w-full --> width: 100%
        // h-screen --> height: 100vh (element is equal to 100% of viewport height)
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-blue-500'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Nujtxeng Vang.</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I hope you enjoy your visit.</h2>
                <p className='text-blue-500 py-4 max-w-[]700px'>I am a photographer and full stack web application
                developer. One of my goals is to combine these two interests and create projects that are interactive,
                fun, and educational. Thank you for your support!</p>
            </div>
        </div>
    )
}

export default Home