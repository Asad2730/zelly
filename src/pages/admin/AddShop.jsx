import React from 'react'

export default function AddShop() {
    return (
        <>
        <h1 className='text-xl mb-4'>Add Shop</h1>
            <div className='flex flex-wrap justify-center'>
                <div className='mx-10'>
                    <h1 className='text-xl mb-4'>Owner Details</h1>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            First Name
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Last Number
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Date of Birth
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input type="date" className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Address
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            CNIC
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                </div>
                <div class="lg:block absolute left-1/6  -ml-0.5 w-[1px] h-96 bg-gray-600 hidden"></div>
                <div className='mx-10'>
                    <h1 className='text-xl  mb-4'>Shop Details</h1>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Shop Name
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Shop Number
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Floor Number
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Shop Type
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <select className='text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow'>
                            <option className='bg=gray-800'>Shirts</option>
                            <option className='bg=gray-800'>Pants</option>
                            <option className='bg=gray-800'>Coat</option>
                        </select>
                    </div>
                    <div className="mt-8">
                        <input type="submit" className="text-white bg-indigo-700 font-normal w-64 h-10  text-center text-sm border-gray-300 rounded border shadow" />
                    </div>
                    
                </div>
            </div>
            
        </>
    );
}
