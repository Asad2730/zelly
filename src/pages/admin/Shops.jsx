import React from 'react'

import ShopCard from '../../components/Cards/ShopCard'
import AddCard from '../../components/Cards/AddCard'

export default function Shops() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
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
