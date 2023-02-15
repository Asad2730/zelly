import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function AddShop() {
    let navigate = useNavigate();

    const token = localStorage.getItem('token')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const [cinic, setCnic] = useState('')
    const [shopName, setShopName] = useState('')
    const [shopNo, setShopNo] = useState(0)
    const [floorNo, setFloorNo] = useState(0)
    const [type, setType] = useState('')

    console.log(token)
    const submit = () => {

        let jsn = {
            "shopName": shopName,
            "shopNumber": shopNo,
            "floorNumber": floorNo,
            "shopType": type,
            "ownerPersonalInformation": {
                "firstName": fname,
                "lastName": lname,
                "dob": dob,
                "Address": address,
                "cnic": cinic
            }
        }
        axios.post(`http://localhost:2000/api/shop/create?token=${token}`, jsn)
            .then(res => {
                navigate('/floors')
            }).catch(err => console.log('error', err))
    }

    return (
        <>
            <h1 className='text-xl mb-4'>Add Shop</h1>
            <div className='flex flex-wrap justify-center'>
                <div className='mx-10'>
                    <h1 className='text-xl mb-4'>Owner Details</h1>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            First Name
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={fname}
                            onChange={(v) => setFname(v.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Last Number
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={lname}
                            onChange={(v) => setLname(v.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Date of Birth
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={dob}
                            onChange={(v) => setDob(v.target.value)}
                            type="date" className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Address
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={address}
                            onChange={(v) => setAddress(v.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            CNIC
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={cinic}
                            onChange={(v) => setCnic(v.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                </div>
                <div class="lg:block absolute left-1/6  -ml-0.5 w-[1px] h-96 bg-gray-600 hidden"></div>
                <div className='mx-10'>
                    <h1 className='text-xl  mb-4'>Shop Details</h1>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Shop Name
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={shopName}
                            onChange={(v) => setShopName(v.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Shop Number
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={shopNo}
                            onChange={(v) => setShopNo(v.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Floor Number
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={floorNo}
                            onChange={(v) => setFloorNo(v.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Shop Type
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <select
                            value={type}
                            onChange={(v) => setType(v.target.value)}
                            className='text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow'>
                            <option value='Shirts' className='bg=gray-800'>Shirts</option>
                            <option value='pants' className='bg=gray-800'>Pants</option>
                            <option value='Coat' className='bg=gray-800'>Coat</option>
                        </select>
                    </div>
                    <div className="mt-8">
                        <input onClick={submit} type="submit" className="text-white bg-indigo-700 font-normal w-64 h-10  text-center text-sm border-gray-300 rounded border shadow" />
                    </div>

                </div>
            </div>

        </>
    );
}
