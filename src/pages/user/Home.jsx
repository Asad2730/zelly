import React, { useEffect, useState } from 'react'
import Features from '../../sections/user/Features';
import Floors from '../../sections/user/Floors';
import Hero from '../../sections/user/Hero';
import Footer from '../../sections/user/Footer';
//import axios from 'axios';


export default function Home() {

  // const tokken = localStorage.getItem('token');
  // const [floors, setFloors] = useState([]);

  // useEffect(() => {

  //   axios.get(`http://localhost:2000/api/shop/getShops?token=${tokken}`)
  //     .then(res => {

  //       setFloors(res.data.data)
  //       console.log('RESData', floors);

  //     }).catch(err => {
  //       console.log('Error:', err);
  //     })
  // }, [])



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
      {/* 
      {
        floors.map((i, index) => (
          <Floors
            id={i['_id']} shopname={i['shopName']}
            shopNo={i['shopNumber']} floorNo={i['floorNumber']}
            type={i['shopType']}
            index={index}
            count={floors.size}
          />
        ))
      } */}


      <Footer />
    </>
  );
}
