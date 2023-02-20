import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/Cards/ProductCard';
import AddCard from '../../components/Cards/AddCard';
import AdminHeader from '../../components/header/AdminHeader'
import TitleCard from '../../components/Cards/TitleCard';
import axios from 'axios';

export default function AllProducts() {

    let token = localStorage.getItem('token');
    const [list, setList] = useState([]);



    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        let url = `http://localhost:2000/api/product/getProduct?token=${token}`;
        axios.get(url)
            .then(res => {
                console.log(res.data.data)
                setList(res.data.data)
            }).catch(e => console.log('err', e))
    }

    const deleteProduct = (id) => {
        let url = `http://localhost:2000/api/product/deleteProduct?token=${token}&id=${id}`;
        axios.delete(url)
            .then(res => {
                console.log('deleted', res.data)
                loadData()
            })
            .catch(err => console.log('err', err))

    }

    return (
        <>
            <AdminHeader />
            <TitleCard name="Products" />
            <section class="text-gray-600 body-font my-10">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {
                            list.map((i) => (
                                <ProductCard
                                    id={i['_id']} title={i['title']} img={i['images'][0]}
                                    price={i['Price']}
                                    name={i['brandName']}
                                    onClick={deleteProduct}
                                />
                            ))
                        }


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