import React from 'react';
import {Link} from 'react-router-dom';

const Contact = () => {
    return(
        <div name='contact' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-blue-500 text-4xl font-bold'>Contact</p>
                <p className='py-4 max-w-[]700px'>Have an inquiry? Please reach out to name@email.com.</p>
            </div>
        </div>
    )
}

export default Contact