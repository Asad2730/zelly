import React, { useEffect } from 'react'

import ProductCard from '../../components/Cards/ProductCard'
import AddCard from '../../components/Cards/AddCard'

export default function Products() {

    const token = localStorage.getItem('token')
    let pid = localStorage.getItem('pid');



    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <ProductCard />

                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <AddCard />
                    </div>
                </div>
            </section>
        </>
    );
}
