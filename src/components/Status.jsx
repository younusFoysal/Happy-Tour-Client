import React from 'react';

const Status = () => {
    return (
        <div className=" border-y-4 border-emerald-600" >
            <div className=" h-screen">
                <div className="container mx-auto py-10 text-emerald-600">
                    <div className="text-center">
                        <h2 className="font-bold text-2xl md:text-4xl my-4">Four Reasons why you should choose us</h2>
                        <div className="max-w-2xl md:max-w-4xl mx-auto text-emerald-300">
                            <p>
                                It is very important for you to choose your travel agency very wisely.
                                When you take one or two weeks off from your regular schedule just for some relaxation,
                                you must expect nothing but pleasure, satisfaction and enjoyment to refresh yourself and get you back on track.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mx-auto max-w-xl md:max-w-2xl gap-4 my-4">
                        <div className="p-4 border flex flex-col items-center rounded max-w-sm bg-emerald-100">
                            <div className="text-4xl font-bold">8<span className="text-emerald-600">+</span></div>
                            <div className="text-300 text-uppercase">Umrah Packages</div>
                        </div>
                        <div className="p-4 border flex flex-col items-center rounded max-w-sm bg-emerald-200">
                            <div className="text-4xl font-bold">6<span className="text-emerald-600">+</span></div>
                            <div className="text-300 text-uppercase">Hajj Packages</div>
                        </div>
                        <div className="p-4 border flex flex-col items-center rounded max-w-sm bg-emerald-200">
                            <div className="text-4xl font-bold">17<span className="text-emerald-600">+</span></div>
                            <div className="text-300 text-uppercase">Tour Packages</div>
                        </div>
                        <div className="p-4 border flex flex-col items-center rounded max-w-sm bg-emerald-100">
                            <div className="text-4xl font-bold">14<span className="text-emerald-600">+</span></div>
                            <div className="text-300 text-uppercase">Visa Service</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Status;