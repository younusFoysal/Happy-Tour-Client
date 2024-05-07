import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/country')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>

            <Helmet>Happy Tour | Country </Helmet>

            <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">All Countries</h1>
                <h1 className="text-3xl">Explore our tourists spots</h1>
            </div>

            <section id="Projects"
                     className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-4 mb-5">

                {
                    countries.map(country => <div key={country._id} className="w-full">
                        <Link to={`countries/${country.cname}`}>
                            <div
                                className="w-full relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 mx-auto mt-4 duration-500 hover:scale-105 hover:shadow-xl shadow-2xl">
                                <img
                                    src={country.photo}
                                    alt="University of Southern California"
                                    className="absolute inset-0 h-full w-full object-cover"/>
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 hover:opacity-25"></div>
                                <h3 className="z-10 mt-3 text-3xl font-bold text-white">{country.name}</h3>
                                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                    {country.des}
                                </div>
                            </div>
                        </Link>
                    </div>)
                }


            </section>
                <hr className="border-emerald-600 border-2  mt-10"/>
        </div>
);
};

export default Countries;