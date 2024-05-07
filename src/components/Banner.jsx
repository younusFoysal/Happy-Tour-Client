import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {


    const slideStyle = {
        "enable-background" : "new 0 0 56.966 56.966"
    }

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">


                    {/* slide 1 */}
                    <div
                        className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">


                        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                            <img className="h-full w-full object-cover border-solid-2px border-emerald-800"
                                 src="https://i.ibb.co/8gsNRPt/tour-2000x2000.jpg"
                                 alt="Winding mountain road"/>
                        </div>


                        <div
                            className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">

                            <div className="flex flex-col p-12 md:px-16">
                                <h2 className="text-2xl font-bold uppercase text-emerald-600 lg:text-4xl">

                                    <Typewriter
                                        words={['Explore Word with Us','Winding Mountain Road', 'Enjoy and', 'Repeat!']}
                                        loop={20}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />

                                </h2>
                                <p className="mt-4">
                                    <b className="text-emerald-600">Happy Tour</b> offers a vast selection of services from Hotel or Resort bookings,
                                    help with international flights or inter-island flights, luxury private taxies or private cars, tours,
                                    and excursions on the Seychelles islands of Mahe, Praslin, and La Digue, airport or ferry pick ups,
                                    we can arrange your perfect restaurant or bar for the perfect romantic evening,
                                    a sunset tour to take that perfect picture or even wedding parties and events.
                                </p>

                                <div className="mt-8">
                                    <a href="/about"
                                       className="inline-block w-full text-center text-lg font-medium text-white bg-emerald-600 border-solid border-2 border-emerald-600 py-4 px-10 hover:bg-emerald-800 hover:shadow-md md:w-48">Read
                                        More</a>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide2" className="carousel-item relative w-full">


                    <div className="flex h-screen justify-center items-center dark:bg-gray-800 w-full">
                        <div className="text-center max-w-6xl mx-10">
                            <p className="my-3 text-sm tracking-widest text-emerald-500 uppercase">Fast &amp; New
                                Places</p>
                            <h1 className="my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-gray-100">
                                Best Service
                                Offered Here
                            </h1>
                            <div>
                                <p className="max-w-2xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl dark:text-gray-400">
                                    All our staff has a vast knowledge of the island so feel free to ask away our dedicated experienced staff
                                    are here to make your visit or stay in Seychelles a memorable one.
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row"><a
                                className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-emerald-600 to-emerald-500 hover:bg-gradient-to-b dark:shadow-emerald-900 shadow-emerald-200 hover:shadow-2xl hover:shadow-emerald-400 hover:-tranneutral-y-px "
                                href="/tours">Browse All Tourists Spot
                            </a>
                                <a className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px"
                                   href="/tours">Search Tourists Spot
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide3" className="carousel-item relative w-full">


                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
                        <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">Welcome to
                            <span className="border-b border-dotted border-slate-300"> Happy Tour </span>
                        </p>

                        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        <span className="inline-block">Your
            <span className="relative whitespace-nowrap text-emerald-600">
            <svg aria-hidden="true" viewBox="0 0 418 42"
                 className="absolute top-2/3 left-0 h-[0.58em] w-full fill-emerald-300/70" preserveAspectRatio="none"><path
                d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
            <span className="relative">Family</span></span>
        </span>
                            <span className="inline-block">Tour</span>
                        </h1>

                        <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
                            <span className="inline-block">Bring functionalities of other apps</span>
                            <span className="inline-block">into your Notion workspaces.</span>
                        </p>

                        <div
                            className="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
                            <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left"
                               href="/tours">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img"
                                     viewBox="0 0 24 24"
                                     aria-hidden="true" className="h-3 w-3 flex-none" height="1em" width="1em"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.824 7.287c.008 0 .004 0 0 0zm-2.8-1.4c.006 0 .003 0 0 0zm16.754 2.161c-.505-1.215-1.53-2.528-2.333-2.943.654 1.283 1.033 2.57 1.177 3.53l.002.02c-1.314-3.278-3.544-4.6-5.366-7.477-.091-.147-.184-.292-.273-.446a3.545 3.545 0 01-.13-.24 2.118 2.118 0 01-.172-.46.03.03 0 00-.027-.03.038.038 0 00-.021 0l-.006.001a.037.037 0 00-.01.005L15.624 0c-2.585 1.515-3.657 4.168-3.932 5.856a6.197 6.197 0 00-2.305.587.297.297 0 00-.147.37c.057.162.24.24.396.17a5.622 5.622 0 012.008-.523l.067-.005a5.847 5.847 0 011.957.222l.095.03a5.816 5.816 0 01.616.228c.08.036.16.073.238.112l.107.055a5.835 5.835 0 01.368.211 5.953 5.953 0 012.034 2.104c-.62-.437-1.733-.868-2.803-.681 4.183 2.09 3.06 9.292-2.737 9.02a5.164 5.164 0 01-1.513-.292 4.42 4.42 0 01-.538-.232c-1.42-.735-2.593-2.121-2.74-3.806 0 0 .537-2 3.845-2 .357 0 1.38-.998 1.398-1.287-.005-.095-2.029-.9-2.817-1.677-.422-.416-.622-.616-.8-.767a3.47 3.47 0 00-.301-.227 5.388 5.388 0 01-.032-2.842c-1.195.544-2.124 1.403-2.8 2.163h-.006c-.46-.584-.428-2.51-.402-2.913-.006-.025-.343.176-.389.206-.406.29-.787.616-1.136.974-.397.403-.76.839-1.085 1.303a9.816 9.816 0 00-1.562 3.52c-.003.013-.11.487-.19 1.073-.013.09-.026.181-.037.272a7.8 7.8 0 00-.069.667l-.002.034-.023.387-.001.06C.386 18.795 5.593 24 12.016 24c5.752 0 10.527-4.176 11.463-9.661.02-.149.035-.298.052-.448.232-1.994-.025-4.09-.753-5.844z">
                                    </path>
                                </svg>
                                <span className="ml-3">View Tourists Spot</span>
                            </a>
                            <div className="relative flex flex-1 flex-col items-stretch sm:flex-none"
                                 data-headlessui-state="">
                                <button
                                    className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
                                    id="headlessui-menu-button-:r4:" aria-haspopup="true" aria-expanded="false"
                                    data-headlessui-state="" type="button">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img"
                                         viewBox="0 0 24 24" aria-hidden="true"
                                         className="h-3 w-3 flex-none fill-current text-blue-600" height="1em"
                                         width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path>
                                    </svg>
                                    <span className="ml-3">Contact us</span>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide4" className="carousel-item relative w-full">


                    <div className="dark:bg-gray-800 w-full">
                        <div className="dark:bg-transparent">
                            <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
                                <div
                                    className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                                    <h1
                                        className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
                                        Let{`'`}s not stress for
                                        <span className="text-emerald-600 dark:text-emerald-600">Tourist</span>
                                        places.
                                    </h1>
                                    <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
                                        Happy Tour here to make memories your Dream tour.
                                    </p>
                                </div>
                                <div className="flex w-11/12 md:w-8/12 xl:w-6/12">
                                    <div className="flex rounded-md w-full">
                                        <input type="text" name="q"
                                               className="w-full p-3 rounded-md rounded-r-none border border-2 border-gray-300 placeholder-current dark:bg-gray-500  dark:text-gray-300 dark:border-none "
                                               placeholder="keyword"/>
                                        <button
                                            className="inline-flex items-center gap-2 bg-emerald-600 text-white text-lg font-semibold py-3 px-6 rounded-r-md">
                                            <span>Find</span>
                                            <svg className="text-gray-200 h-5 w-5 p-0 fill-current"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                                                 y="0px"
                                                 viewBox="0 0 56.966 56.966"
                                                 style={slideStyle}
                                                 xml:space="preserve">
                            <path
                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                        </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


            <div>


            </div>


        </div>
    );
};

export default Banner;