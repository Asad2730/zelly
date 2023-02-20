import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ProductCard from '../../components/Cards/user/ProductCard';
import MainHeader from '../../components/header/MainHeader'
import Footer from '../../sections/user/Footer';
import TitleCard from '../../components/Cards/user/TitleCard';

const UserProduct = () => {

  const location = useLocation();
  const [products, setProducts] = useState([]);

  console.log('URLPID', location.state.id)

  useEffect(() => {
    let url = `http://localhost:2000/api/product/getUserProducts/${location.state.id}`;
    axios.get(url)
      .then(res => {
        setProducts(res.data.data)
        console.log('DATA', products)
        console.log('len', products.length)
      }).catch(err => console.log('Err', err))


  }, [])

  return (
    <>
      <MainHeader />
      <TitleCard name={"Products"} />
      <section class="text-gray-400 body-font">
        <div class="container px-5 py-24 mx-auto ">
          <div class="flex flex-wrap -m-4 justify-around">
            {
              products.map((i) => {
                <ProductCard
                  brandName={i['brandName']}
                  image={`http://localhost:2000/uploads/${i['images'][0]}`}
                  title={i['title']}
                  price={i['Price']}
                />
              })
            }

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserProduct;
