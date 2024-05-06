import React from 'react';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet-async";
import {useLoaderData, useParams} from "react-router-dom";
import {MdFavorite} from "react-icons/md";

const TourDetails = () => {

    const tours = useLoaderData();
    //const {id} = useParams();
    //const idInt = parseInt(id);
    //const tour = tours.find(tour => tour.id === idInt)
    const {_id, photo, name, cname, location, details, cost, season, time, visitors, uname, email} = tours;

    console.log(tours)


    return (
        <div>
            <Helmet>SK Real estate | Property Details </Helmet>
            <div className=" py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                                <img className="w-full h-full object-cover"
                                     src={photo}
                                     alt="Product Image"/>
                            </div>
                            <div className="flex mx-2 mb-4 justify-center items-center">
                                <div className="w-1/2 px-2 ">


                                    <button
                                            className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-2 px-4 rounded-full font-bold hover:bg-indigo-600 ">
                                        <MdFavorite></MdFavorite>
                                        Add to Favourite
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <br/>
                            <div className="flex items-center">
                                <h2 className="text-2xl font-bold text-emerald-600 mr-4 mb-2">{name}</h2>
                                <div className="badge badge-secondary badge-outline">{cname}</div>
                            </div>

                            <br/>
                            <div>
                                <span className="font-bold text-gray-700 ">User Name:</span>
                                <span className="text-gray-600 "> {uname}</span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 ">User Email:</span>
                                <span className="text-gray-600 "> {email}</span>
                            </div>
                            <br/>

                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 ">Cost:</span>
                                    <span className="text-gray-600 "> {cost}/year </span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 ">Travel Time:</span>
                                    <span className="text-gray-600 "> {time}</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 ">Total Visitors:</span>
                                <div className="flex items-center mt-2">
                                    <span className="text-gray-600 "> {visitors}/year</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700">Location:</span>
                                <div className="flex items-center mt-2">
                                    <span className="text-gray-600 "> {location}</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <span className="font-bold text-gray-700">Seasonality:</span>
                                <div className="flex items-center mt-2">
                                    {season}

                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 ">Product Description:</span>
                                <p className="text-gray-600 text-sm mt-2">
                                    {details}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer/>


        </div>
    );
};

export default TourDetails;