import React, {useState} from 'react';
import {useLoaderData} from "react-router-dom";
import TourCard from "./TourCard.jsx";
import {Helmet} from "react-helmet-async";

const Tours = () => {

    const loadedTours = useLoaderData();
    const [tours, setTours] = useState(loadedTours)
    const [dataLength, setDatatLength] = useState(6)

    console.log(loadedTours)


    return (<div>

            <Helmet>Happy Tour | Tourists Spots </Helmet>

            <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">All Tourists Spots</h1>
                <h1 className="text-3xl">Explore our tourists spots</h1>
            </div>

            {/*Grid Section - Starts Here*/}
            <section id="Projects"
                     className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-4 mb-5">


                {
                    tours.slice(0, dataLength).map(tour => <TourCard
                        key={tour._id}
                        tour={tour}
                    ></TourCard>)
                }


            </section>

            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

                <div className={dataLength === tours.length ? 'hidden' : ''}>

                    <button onClick={() => setDatatLength(tours.length)}
                            className="btn bg-emerald-600 text-center items-center text-white">
                        All Tourists Spots
                    </button>

                </div>
            </div>


        </div>
    );
};

export default Tours;