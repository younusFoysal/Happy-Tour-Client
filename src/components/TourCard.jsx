import React from 'react';
import {Link} from "react-router-dom";

const TourCard = ({ tour }) => {

    const {_id, photo, name, cname, location, details, cost, season, time, visitors, uname, email} = tour;

    return (
        <div className="w-full">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
                  rel="stylesheet"/>

            <div className="w-full text-gray-900 duration-500 hover:scale-105 hover:shadow-xl ">

                    <div
                        className="bg-white rounded-lg overflow-hidden shadow-2xl">


                        <img className="h-48 w-full object-cover object-end"
                             src={photo}
                             alt="Home in Countryside"/>
                        <div className="p-6">
                            <div className="flex items-baseline">
                                    <span
                                        className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                                        Travel Time: {time}
                                    </span>

                            </div>
                            <h4 className="mt-2 mb-2 font-semibold text-lg leading-tight truncate">
                                {name}
                            </h4>

                            <div className="mt-1">
                                <span>Average Cost : {cost}</span>
                                <span className="text-gray-900 text-sm"> tk</span>
                            </div>

                            <div className="text-gray-900 mt-1">
                                Total Visitors : {visitors} /year
                            </div>
                            <div className="text-gray-900 mt-1">
                                Seasonality : {season}
                            </div>

                            <div className="card-actions mt-4">
                                <Link to={`/tour/${_id}`}>
                                    <button className="btn  bg-emerald-600 text-white">View Details</button>
                                </Link>

                            </div>

                        </div>
                    </div>

            </div>
        </div>
    );
};

export default TourCard;