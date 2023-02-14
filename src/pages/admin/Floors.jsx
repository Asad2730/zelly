import React from 'react'
import FloorCard from '../../components/Cards/FloorCard';
import AddCard from '../../components/Cards/AddCard';



export default function Floors() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <FloorCard />
                        <FloorCard />
                        <FloorCard />
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
