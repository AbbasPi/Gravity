import React from 'react';
import Forms from "../Components/Form";

function Signup(props) {
    return (
        <div className='h-[100vh]'>
            <h1 className='absolute bottom-80 left-24 text-red-600 text-[100px] hidden xl:block'>
                Heal
            </h1>
            <h1 className='absolute bottom-12 left-24 text-white text-[100px] hidden xl:block'>
                 Grow
            </h1>
            <h1 className='absolute bottom-80 right-32 text-white text-[100px] hidden xl:block'>
                Learn
            </h1>
            <h1 className='absolute bottom-12 right-32 text-red-600 text-[100px] hidden xl:block'>
                 Love
            </h1>
            <Forms/>
        </div>
    );
}

export default Signup;