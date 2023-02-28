import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect, useState } from "react";

import slide1 from "../../assets/images/slide-1.jpg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "pure-react-carousel/dist/react-carousel.es.css";

import ShopCard from "../../components/Cards/user/ShopCard";



export default function Floors({ number, list, len }) {

    const navigate = useNavigate();

    // const [usersDict, setUsersDict] = useState({});
    // const [len, setLen] = useState(0);

    // useEffect(() => {

    //     axios.get(`http://localhost:2000/api/shop/getShops`)
    //         .then(res => {
    //             setLen(res.data.data.length)
    //             const dict = res.data.data.reduce((acc, data) => {
    //                 if (!acc[data['floorNumber']]) {
    //                     acc[data['floorNumber']] = [data];
    //                 } else {
    //                     acc[data['floorNumber']].push(data);
    //                 }
    //                 return acc;
    //             }, {});

    //             setUsersDict(dict);



    //         }).catch(err => {
    //             console.log('Error:', err);
    //         })



    // }, [])




    return (

        <>
            <div className=" mx-auto">
                <div className='flex flex-wrap justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                    <b><h1 className='text-2xl'> Floor {number}</h1></b>
                </div>
                <div className=" flex items-center justify-center w-full h-full   sm:py-8 px-4">
                    {/* Carousel for desktop and large size devices */}
                    <CarouselProvider
                        className="lg:block hidden"
                        naturalSlideWidth={100}
                        isIntrinsicHeight={true}
                        totalSlides={len}
                        visibleSlides={3}
                        step={1}
                        infinite={true}
                    >
                        <div className="w-full relative flex items-center justify-center">

                            {
                                len > 4 ?

                                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                        <ButtonBack
                                            role="button"
                                            aria-label="slide backward"
                                            className="p-3 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                                            id="prev"
                                        >
                                            <svg
                                                width={8}
                                                height={14}
                                                viewBox="0 0 8 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7 1L1 7L7 13"
                                                    stroke="white"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </ButtonBack>

                                        <Slider>
                                            <div
                                                id="slider"
                                                className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700 "
                                            >
                                                {
                                                    list.map((i) => (
                                                        <ShopCard
                                                            id={i['_id']}
                                                            image={'https://image.cnbcfm.com/api/v1/image/107036059-1648140541349-gettyimages-1239350024-PWeaver-Target-01.jpeg?v=1654544436&w=1920&h=1080'}
                                                            name={i['shopName']} />
                                                    ))
                                                }



                                            </div>
                                        </Slider>
                                    </div>
                                    : <div
                                        id="slider"
                                        className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700 "
                                    >
                                        {
                                            list.map((i) => (
                                                <ShopCard
                                                    id={i['_id']}
                                                    image={'https://image.cnbcfm.com/api/v1/image/107036059-1648140541349-gettyimages-1239350024-PWeaver-Target-01.jpeg?v=1654544436&w=1920&h=1080'}
                                                    name={i['shopName']} />
                                            ))
                                        }



                                    </div>
                            }

                            <ButtonNext
                                role="button"
                                aria-label="slide forward"
                                className=" p-3 absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                id="next"
                            >
                                <svg
                                    width={8}
                                    height={14}
                                    viewBox="0 0 8 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 1L7 7L1 13"
                                        stroke="white"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for tablet and medium size devices */}
                    <CarouselProvider
                        className="lg:hidden md:block hidden"
                        naturalSlideWidth={100}
                        isIntrinsicHeight={true}
                        totalSlides={len}
                        visibleSlides={2}
                        step={1}
                        infinite={true}
                    >
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack
                                role="button"
                                aria-label="slide backward"
                                className=" p-3 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                                id="prev"
                            >
                                <svg
                                    width={8}
                                    height={14}
                                    viewBox="0 0 8 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 1L1 7L7 13"
                                        stroke="white"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div
                                        id="slider"
                                        className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                                    >
                                        {
                                            list.map((i) => (
                                                <ShopCard
                                                    id={i['_id']}
                                                    image={'https://image.cnbcfm.com/api/v1/image/107036059-1648140541349-gettyimages-1239350024-PWeaver-Target-01.jpeg?v=1654544436&w=1920&h=1080'}
                                                    name={i['shopName']} />
                                            ))
                                        }
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext
                                role="button"
                                aria-label="slide forward"
                                className=" p-3 absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                id="next"
                            >
                                <svg
                                    width={8}
                                    height={14}
                                    viewBox="0 0 8 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 1L7 7L1 13"
                                        stroke="white"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for mobile and Small size Devices */}
                    <CarouselProvider
                        className="block md:hidden "
                        naturalSlideWidth={100}
                        isIntrinsicHeight={true}
                        totalSlides={len}
                        visibleSlides={1}
                        step={1}
                        infinite={true}
                    >
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack
                                role="button"
                                aria-label="slide backward"
                                className=" p-3 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                                id="prev"
                            >
                                <svg
                                    width={8}
                                    height={14}
                                    viewBox="0 0 8 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 1L1 7L7 13"
                                        stroke="white"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div
                                        id="slider"
                                        className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                                    >
                                        {
                                            list.map((i) => (
                                                <ShopCard
                                                    id={i['_id']}
                                                    image={'https://image.cnbcfm.com/api/v1/image/107036059-1648140541349-gettyimages-1239350024-PWeaver-Target-01.jpeg?v=1654544436&w=1920&h=1080'}
                                                    name={i['shopName']} />
                                            ))
                                        }
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext
                                role="button"
                                aria-label="slide forward"
                                className=" p-3 absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                id="next"
                            >
                                <svg
                                    width={8}
                                    height={14}
                                    viewBox="0 0 8 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 1L7 7L1 13"
                                        stroke="white"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>       </>
    );
}