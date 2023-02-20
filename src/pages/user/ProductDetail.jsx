import React, { useEffect, useState } from 'react'
import TitleCard from '../../components/Cards/user/TitleCard';
import MainHeader from '../../components/header/MainHeader';
import Footer from '../../sections/user/Footer';
import axios from 'axios';

export default function ProductDetail() {


    const id = localStorage.getItem('p_id')
    const [data, setData] = useState([])

    useEffect(() => {
        let url = `http://localhost:2000/api/product/getProductwithPk/${id}`;
        axios.get(url)
            .then(r => {
                setData(r.data.data)
            })
            .catch(e => console.log(e))

    }, [])

    return (
        <>
            <MainHeader />
            <TitleCard name={"Details"} />
            <section class="text-gray-400  body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src={`http://localhost:2000/uploads/${data['images']}`} />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">{data['brandName']}</h2>
                            <h1 class="text-black text-3xl title-font font-medium mb-1">{data['title']}</h1>

                            <h2 class="text-sm title-font text-gray-500 tracking-widest">
                                Available:{
                                    data['available'] ? 'Yes' : 'No'
                                }
                            </h2>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                                <div class="flex text-black">
                                    <span class="mr-3">Color</span>
                                    <button class="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button class="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button class="border-2 border-gray-800 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                                <div class="flex ml-6 items-center">
                                    <span class="mr-3">Size</span>
                                    <div class="relative">
                                        <select class="rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-indigo-500 text-black pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex">
                                <span class="title-font font-medium text-2xl text-white">$58.00</span>
                                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
