import React from 'react'

export default function AddProduct() {
    return (
        <>
            <h1 className='text-xl mb-4'>Add Product</h1>
            <div className='flex flex-wrap justify-center'>
                <div className='mx-10'>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Title
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Price
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Sizes
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input type="text" className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Status
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Category
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                </div>
                <div class="lg:block absolute left-1/6  -ml-0.5 w-[1px] h-96 bg-gray-600 hidden"></div>
                <div className='mx-10'>

                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Brand Name
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Delivery Time
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Images
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input type="file" className="" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2 mt-2">
                            Description
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <textarea className='text-gray-600 py-2 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow'>

                        </textarea>
                    </div>
                    <div className="mt-8">
                        <input type="submit" className="text-white bg-indigo-700 font-normal w-64 h-10  text-center text-sm border-gray-300 rounded border shadow" />
                    </div>

                </div>
            </div>

        </>
    );
}
