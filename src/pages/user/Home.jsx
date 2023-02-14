import React from 'react'
import Features from '../../sections/user/Features';
import Floors from '../../sections/user/Floors';
import Hero from '../../sections/user/Hero';
import Footer from '../../sections/user/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />

      <div className='flex flex-wrap justify-center items-center mb-10'>
        <div className='w-1/12 h-0.5 bg-black mr-10'></div>
        <b><h1 className='text-4xl'>Our Floors</h1></b>
        <div className='w-1/12 h-0.5 bg-black ml-10'></div>
      </div>

      <Floors />
      <Floors />
      <Floors />
      <div className='flex flex-wrap justify-center'>
        <button type="button" class="text-white bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
          View More
        </button>
      </div>
    
      <Footer />
    </>
  );
}
