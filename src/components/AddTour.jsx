import Swal from 'sweetalert2';

import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider.jsx";

const AddTour = () => {

    const {user} = useContext(AuthContext);


    const handleAddTour = e => {
        e.preventDefault();


        const form = e.target;

        const photo = form.photo.value
        const name = form.name.value
        const cname = form.cname.value
        const location = form.location.value
        const details = form.details.value

        //const cost1 = form.cost.value
        const cost = Number(form.cost.value)
        const season = form.season.value
        const time = form.time.value
        const visitors = form.visitors.value
        const uname = form.uname.value
        const email = form.email.value



        const newTour = {photo, name, cname, location, details, cost, season, time, visitors, uname, email}
        console.log(newTour)

        // send data to the server
        fetch('http://localhost:5000/tour', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newTour)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourists Spot Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                    e.target.reset();
                }
            })

    }



    return (
        <div>
            <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="text-2xl py-4 px-6 bg-emerald-900 text-white text-center font-bold uppercase">
                    Add Tourists Spot
                </div>


                <form onSubmit={handleAddTour} className="py-4 px-6">


                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Tourists Spot Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            name="name"
                            type="text"
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
                            placeholder="https://i.ibb.co/qNynF26/pexels.jpg"
                            required
                        />
                    </div>


                    <div className="flex items-center justify-center mb-4">
                        <button
                            className="bg-emerald-900 text-white py-2 px-4 rounded hover:bg-emerald-800 focus:outline-none focus:shadow-outline"
                            type="submit">
                            Add Place
                        </button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddTour;