import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../providers/AuthProvider.jsx";
import {useState} from "react";
import Swal from "sweetalert2";
import {useLoaderData} from "react-router-dom";



const MyList = () => {

    const {user} = useContext(AuthContext);

    let id = 1;
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-list/${user.email}`)
            .then(res => res.json())
            .then(data => setTours(data))
            .catch(error => console.error('Error fetching tours:', error));
    }, []);

    const handleUpdate = () => {
        console.log('okkkkkkkkkk')
    }

    const handleDelete = () => {
        console.log('delete')
    }



    return (
        <div className="mb-20">

            <div className="text-center p-10 mb-4 ">
                <h1 className="font-bold text-4xl mb-4">{user.displayName} Tourists Spots: {tours.length}</h1>
                <h1 className="text-3xl">Manage your spots {user.email}</h1>
            </div>


            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                <table className="w-full table-fixed">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="w-3 py-4 px-6 text-left text-gray-600 font-bold uppercase">Id</th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Country</th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Cost</th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Action</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">


                    {
                        tours.map(tour => (
                            <tr key={tour._id}>
                                <td className="py-4 px-6 border-b border-gray-200">{id++}</td>
                                <td className="py-4 px-6 border-b border-gray-200">{tour.name}</td>
                                <td className="py-4 px-6 border-b border-gray-200 truncate">{tour.cname}</td>
                                <td className="py-4 px-6 border-b border-gray-200">{tour.cost} /year</td>
                                <td className="py-4 px-6 border-b border-gray-200 ">
                                    <span onClick={() => handleUpdate(tour._id)} className="bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded-full text-xs mr-2">Update</span>
                                    <span onClick={() => handleDelete(tour._id)} className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-full text-xs">Delete</span>
                                </td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyList;