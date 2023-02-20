import React, { useEffect, useState } from 'react'
import FloorCard from '../../components/Cards/FloorCard';
//import AddCard from '../../components/Cards/AddCard';
//import axios from 'axios';
import AdminHeader from '../../components/header/AdminHeader'
import TitleCard from '../../components/Cards/TitleCard';

//import { useNavigate } from 'react-router-dom';



export default function Floors() {
    //let navigate = useNavigate();
    // const [usersDict, setUsersDict] = useState({});

    // useEffect(() => {

    //     axios.get(`http://localhost:2000/api/shop/getShops`)
    //         .then(res => {

    //             const dict = res.data.data.reduce((acc, data) => {
    //                 if (!acc[data['floorNumber']]) {
    //                     acc[data['floorNumber']] = [data];
    //                 } else {
    //                     acc[data['floorNumber']].push(data);
    //                 }
    //                 return acc;
    //             }, {});

    //             setUsersDict(dict);


    //         }).catch(err => {
    //             console.log('Error:', err);
    //         })



    // }, [])




    return (
        <>
            <AdminHeader />
            <TitleCard name={"Floors"} />
            <section class="text-gray-600 body-font my-10">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4 ">
                        <FloorCard />

                    </div>
                </div>
            </section>
            {/* <section class="text-gray-600 body-font my-10">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <AddCard />
                    </div>
                </div>
            </section> */}
        </>
    );
}
