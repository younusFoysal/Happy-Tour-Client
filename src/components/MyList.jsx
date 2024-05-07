import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../providers/AuthProvider.jsx";
import {useState} from "react";
import Swal from "sweetalert2";
import {Link, useLoaderData} from "react-router-dom";



const MyList = () => {

    const {user} = useContext(AuthContext);

    let id = 1;
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch(`https://happy-tour-server-alpha.vercel.app/my-list/${user.email}`)
            .then(res => res.json())
            .then(data => setTours(data))
            .catch(error => console.error('Error fetching tours:', error));
    }, []);

    const handleUpdate = () => {
        console.log('okkkkkkkkkk')
    }

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://happy-tour-server-alpha.vercel.app/tour/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Tour Spot has been deleted.",
                                icon: "success"
                            });


                            const remaining = tours.filter(tour => tour._id !== _id);
                            setTours(remaining);
                        }
                    })
            }
        });


    }



    return (
        <div className="mb-20">

            <div className="text-center p-10 mb-4 ">
                <h1 className="font-bold text-4xl mb-4"> Your Tourists Spots: {tours.length}</h1>
                <h1 className="text-3xl">Manage your spots</h1>
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
                                    <Link to={`updatetour/${tour._id}`}><span className="bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded-full text-xs mr-2">Update</span></Link>
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