import React, { useEffect, useState } from 'react'

import ProductCard from '../../components/Cards/ProductCard'
import AddCard from '../../components/Cards/AddCard'
import axios from 'axios';

export default function Products() {

    const [data, setData] = useState([]);
    const token = localStorage.getItem('token')
    let pid = localStorage.getItem('pid');

    useEffect(() => {

        loadData()
    }, [])

    const deleteProduct = (id) => {
        let url = `http://localhost:2000/api/product/deleteProduct?token=${token}&id=${id}`;
        axios.delete(url)
            .then(res => {
                console.log('deleted', res.data)
                loadData()
            })
            .catch(err => console.log('err', err))

    }

    const loadData = () => {
        axios.get(`http://localhost:2000/api/product/getProductByID/${pid}?token=${token}`)
            .then(res => {
                setData(res.data.data)
                console.log('DATA', data)
            }).catch(err => console.log(err))
    }

    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {
                            data.map((i) => (
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
