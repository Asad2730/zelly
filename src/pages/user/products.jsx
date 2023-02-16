import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

// const products = [
//   {
//     id: 1,
//     name: "Zip Tote Basket",
//     color: "White and black",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
//     imageAlt:
//       "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
//     price: "$140",
//   },
//   {
//     id: 2,
//     name: "Zip Tote Basket",
//     color: "White and black",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
//     imageAlt:
//       "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
//     price: "$140",
//   },
//   {
//     id: 3,
//     name: "Zip Tote Basket",
//     color: "White and black",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
//     imageAlt:
//       "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
//     price: "$140",
//   },
//   {
//     id: 4,
//     name: "Zip Tote Basket",
//     color: "White and black",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
//     imageAlt:
//       "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
//     price: "$140",
//   },
//   {
//     id: 5,
//     name: "Zip Tote Basket",
//     color: "White and black",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
//     imageAlt:
//       "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
//     price: "$140",
//   },

// More products...
//];
const UserProduct = () => {

  const location = useLocation();
  const [products, setProducts] = useState([]);
  let url = `http://localhost:2000/api/product/getUserProducts/${location.state.id}`;
  console.log('URL', location.state.id)
  useEffect(() => {
    console.log('URL', url)
    axios.get(url)
      .then(res => {
        setProducts(res.data.data)
        console.log('DATA', products)
      }).catch(err => console.log('Err', err))
  }, [])

  return (
    <>
      <section class="text-gray-600 body-font bg-gray-300">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Products
            </h1>
          </div>
          <div className="bg-slate-200">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product.id}>
                    <div className="relative">
                      <div className="relative h-72 w-full overflow-hidden rounded-lg">
                        <img
                          src={`http://localhost:2000/uploads/${product['images'][0]}`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="relative mt-4 flex justify-between">
                        <h3 className="text-sm font-medium text-gray-900">
                          BrandName: {product['brandName']}
                        </h3>
                        <h3 className="text-sm font-medium text-gray-900">
                          Title: {product['title']}
                        </h3>

                      </div>
                      <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                        />
                        <p className="relative text-lg font-semibold text-white">
                          Price: {product['Price']}
                        </p>


                      </div>

                    </div>
                    <div className="mt-6">
                      <a
                        href='#'
                        className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                      >
                        Add to bag
                        <span className="sr-only"></span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProduct;
