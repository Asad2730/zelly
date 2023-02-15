import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function FloorCard({ shopNo, id }) {

    let navigate = useNavigate();

    return (
        <>
            <div className='flex justify-between'>
                <h2 class="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">Shop {shopNo}</h2>
                <a
                    onClick={() => {
                        localStorage.setItem('pid', id)
                        navigate('/products')
                    }}
                    class="text-green-500 inline-flex items-center md:mb-2 lg:mb-0" href=" ">View
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>

        </>
    );
}
