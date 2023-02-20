import React, { useEffect, useState } from 'react'
import ShopCard from '../../components/Cards/ShopCard';
import AddCard2 from '../../components/Cards/AddCard2';
import AdminHeader from '../../components/header/AdminHeader'
import TitleCard from '../../components/Cards/TitleCard';

import axios from 'axios';


export default function Shops() {


    const [data, setList] = useState([]);
    let token = localStorage.getItem('token');

    useEffect(() => {

        console.log(`http://localhost:2000/api/shop/getShops?token=${token}`)
        load()
    }, [])

    const load = () => {
        let url = `http://localhost:2000/api/shop/getShops?token=${token}`;
        axios.get(url)
            .then(res => {
                console.log('ll', res.data.data)
                setList(res.data.data)
            }).catch(err => console.log('err', err))

    }

    const deleteShop = (id) => {
        try {

            let url = `http://localhost:2000/api/shop/delete?token=${token}&id=${id}`
            axios.delete(url)
                .then(r => load())
                .catch(e => console.log(e))
        } catch (ex) {
            console.log(ex)
        }
    }

    return (
        <>
            <AdminHeader />
            <TitleCard name={"Shops"} />
            <section class="text-gray-600 body-font my-10">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {
                            data.map((i) => (

                                <ShopCard
                                    id={i['_id']}
                                    shopName={i['shopName']}
                                    shopNo={i['shopNumber']}
                                    name={i['ownerPersonalInformation']['firstName'] + i['ownerPersonalInformation']['lastName']}
                                    cnic={i['ownerPersonalInformation']['cnic']}
                                    shopType={i['userType']}
                                    onDelete={deleteShop}
                                />
                            ))
                        }


                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <AddCard2 />
                    </div>
                </div>
            </section>
        </>
    );
}