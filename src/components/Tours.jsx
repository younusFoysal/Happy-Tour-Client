
import React, {useEffect, useState} from 'react';
import {useLoaderData} from "react-router-dom";
import TourCard from "./TourCard.jsx";
import {Helmet} from "react-helmet-async";

const Tours = () => {

    //  another method that not working
    // const loadedTours = useLoaderData();
    // const [tours, setTours] = useState(loadedTours);

    // New added
    const [unsortedTours, setUnsortedTours] = useState([]);
    const [sortedTours, setSortedTours] = useState([]);
    const [isSorted, setIsSorted] = useState(false);

    const [dataLength, setDataLength] = useState(6)
    // console.log(loadedTours)

    // const [tours, setTours] = useState([])

    useEffect(() => {
        fetch('https://happy-tour-server-alpha.vercel.app/tour')
            .then(res => res.json())
            .then(data => setUnsortedTours(data))
            .catch(error => console.error('Error fetching tours:', error));
    }, []);


    const handleSort = () => {
        //e.preventDefault();

        const sortedData = [...unsortedTours].sort((a, b) => a.cost - b.cost);
        setSortedTours(sortedData);
        setIsSorted(true);


    }


    return (<div className="mb-10">

            <Helmet>Happy Tour | Tourists Spots </Helmet>

            <div className="text-center p-10 ">
                <h1 className="font-bold text-4xl mb-4">All Tourists Spots</h1>
                <h1 className="text-3xl">Explore our tourists spots</h1>
                <button className="btn bg-emerald-600 mt-4 text-white" onClick={handleSort}> Sort by Average Cost</button>
            </div>

            {
                isSorted ? (
                    <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-4 mb-5">
                        {
                            sortedTours.slice(0, dataLength).map(tour => <TourCard
                                key={tour._id}
                                tour={tour}
                            ></TourCard>)
                        }
                    </section>
                ) : (
                    <div className={unsortedTours.length === 0 ? 'hidden' : ''}>

                    <section id="Projects"
                             className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-4 mb-5">
                        {
                            unsortedTours.slice(0, dataLength).map(tour => <TourCard
                                key={tour._id}
                                tour={tour}
                            ></TourCard>)
                        }
                    </section>
                    </div>
                )
            }




            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <div className={dataLength === unsortedTours?.length ? 'hidden' : ''}>
                    <button onClick={() => setDataLength(unsortedTours?.length)}
                            className="btn bg-emerald-600 text-center items-center text-white">
                        All Tourists Spots
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Tours;