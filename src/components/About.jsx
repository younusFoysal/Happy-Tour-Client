import React from 'react';
import {Helmet} from "react-helmet-async";

const About = () => {
    return (
        <div className="divide-x divide-emerald-600">
            <Helmet>Happy Tour | About </Helmet>
            <div id="about" className="relative overflow-hidden mt-16">
                <div className="max-w-7xl mx-auto">
                    <div
                        className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"></polygon>
                        </svg>

                        <div className="pt-1"></div>

                        <main
                            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <span className="text-gray-500 border-b-2 border-emerald-600 uppercase">About us</span>
                                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span
                                    className="text-emerald-600">Our Company</span>
                                </h2>
                                <p>
                                    Professional customer consultation providing hassle-free travel and journey.
                                    Creative but determined approach to search for the most appropriate travel arrangements
                                    and accommodations and identifying the best possible values.
                                    Our travel consultants are friendly, polite, professional, and experienced in
                                    accommodating both the seasoned traveler and those who are new to the world of travel.

                                </p>
                                <br/>
                                <p> To dominate the tourism industry by excellence in service with innovation & creative concepts
                                    in the global marketplace for our clients that will help us achieve the title of best travel
                                    agency in Bangladesh.
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
                         src="https://i.ibb.co/Yb5qM95/pexels-sanmane-1365425.jpg" alt=""/>
                </div>
            </div>
            <br/>
            <br/>
            <hr/>
            <hr/>
            <br/>
            <div className="sm:flex items-center max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src="https://i.ibb.co/7WQsqtg/pexels-trvlust-3369505.jpg"/>
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">

                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">Why <span className="text-emerald-600">Choose us?</span>
                        </h2>
                        <br/>
                        <p className="text-gray-700">
                            Happy Tour is a trusted and reliable tour and travel agency among all the leading and updated
                            tour-operating services in Bangladesh. We are here to bring the luxury to your traveling.
                            Happy Tour is a proud member of Association of Travel Agents of Bangladesh-ATAB and Tour Operators
                            Association of Bangladesh. Safe traveling, your security, and your enjoyment are our focus during 
                            your travels. Our experienced and expert traveling guides ensure that you do not need to move an
                            inch from your comfort zone and make sure that you always have a beautiful satisfactory smile on
                            your face. We believe that your smile is our success and Happy Tour will do anything to keep 
                            you smiling.</p> <br/>

                        <p>Happy Tour is specialized in giving the best outbound tours that give you nothing
                            but pleasure and satisfaction. Our cheap international holiday packages from Bangladesh
                            will give you a wide range of choices that will help you to choose your satisfactory tour.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;