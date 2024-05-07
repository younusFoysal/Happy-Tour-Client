import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../providers/AuthProvider.jsx";
import {useLoaderData, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTour = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const tours = useLoaderData();
    const {_id, photo, name, cname, location, details, cost, season, time, visitors, uname} = tours;


    const handleUpdateTour = e => {
        e.preventDefault();

        const form = e.target;

        const photo = form.photo.value
        const name = form.name.value
        const cname = form.cname.value
        const location = form.location.value
        const details = form.details.value
        const cost = Number(form.cost.value)
        const season = form.season.value
        const time = form.time.value
        const visitors = form.visitors.value
        const uname = form.uname.value
        const email = form.email.value


        const updatedTour = {photo, name, cname, location, details, cost, season, time, visitors, uname, email}
        console.log(updatedTour)

        // send data to the server
        fetch(`https://happy-tour-server-alpha.vercel.app/tour/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedTour)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tour Spot Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })

                    navigate('/mylist');
                }
            })

    }

    return (
        <div>
            <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="text-2xl py-4 px-6 bg-emerald-900 text-white text-center font-bold uppercase">
                    Add Tourists Spot
                </div>


                <form onSubmit={handleUpdateTour} className="py-4 px-6">


                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Tourists Spot Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            name="name"
                            type="text"
                            defaultValue={name}
                            placeholder="Enter spot name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="cname">
                            Select Country Name
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="service"
                            name="cname"
                            defaultValue={cname}
                            required
                        >
                            <option value="bangladesh">Bangladesh</option>
                            <option value="thailand">Thailand</option>
                            <option value="indonesia">Indonesia</option>
                            <option value="malaysia">Malaysia</option>
                            <option value="vietnam">Vietnam</option>
                            <option value="cambodia">Cambodia</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="location"
                            type="text"
                            name="location"
                            defaultValue={location}
                            placeholder="Rangamati"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="cost">
                            Average Cost
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cost"
                            type="number"
                            name="cost"
                            defaultValue={cost}
                            placeholder="Ex: 7000"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="season">
                            Seasonality
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="season"
                            type="text"
                            defaultValue={season}
                            name="season"
                            placeholder="Summer, Winter"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
                            Travel Time
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="time"
                            type="text"
                            name="time"
                            defaultValue={time}
                            placeholder="7 Days"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="visitors">
                            Total Visitors Per Year
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="visitors"
                            type="text"
                            name="visitors"
                            defaultValue={visitors}
                            placeholder="10000"
                            required
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="uname">
                            User Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="uname"
                            name="uname"
                            type="text"
                            defaultValue={uname}
                            placeholder="Enter Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            User Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            name="email"
                            type="email"
                            value={user?.email}
                            disabled
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="details">
                            Short Description
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="details"
                            rows="4"
                            name="details"
                            defaultValue={details}
                            placeholder="Write a few description about the place"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
                            Tourists Spot Photo URL
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="photo"
                            name="photo"
                            type="url"
                            defaultValue={photo}
                            placeholder="https://i.ibb.co/qNynF26/pexels.jpg"
                            required
                        />
                    </div>


                    <div className="flex items-center justify-center mb-4">
                        <button
                            className="bg-emerald-900 text-white py-2 px-4 rounded hover:bg-emerald-800 focus:outline-none focus:shadow-outline"
                            type="submit">
                            Update Place
                        </button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default UpdateTour;