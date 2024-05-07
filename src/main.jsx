import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root.jsx"
import NotFound from "./components/NotFound.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import {HelmetProvider} from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider.jsx";
import Register from "./components/Register.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import AddTour from "./components/AddTour.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Tours from "./components/Tours.jsx";
import TourDetails from "./components/TourDetails.jsx";
import MyList from "./components/MyList.jsx";
import UpdateTour from "./components/UpdateTour.jsx";
import * as path from "path";
import CountryDetails from "./components/CountryDetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,

        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/addtour',
                element: <PrivateRoute><AddTour></AddTour></PrivateRoute>
            },
            {
                path: '/tours',
                element: <Tours></Tours>,
                //loader: () => fetch('https://happy-tour-server-alpha.vercel.app/tour')
            },
            {
                path: '/tours/:id',
                element: <PrivateRoute><TourDetails></TourDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://happy-tour-server-alpha.vercel.app/tour/${params.id}`)
            },
            {
                path: '/mylist/',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
                //loader: ({params}) => fetch(`https://happy-tour-server-alpha.vercel.app/tour/${params.email}`)
            },
            {
                path: '/mylist/updatetour/:id',
                element: <PrivateRoute><UpdateTour></UpdateTour></PrivateRoute>,
                loader: ({params}) => fetch(`https://happy-tour-server-alpha.vercel.app/tour/${params.id}`)
            },
            {
                path: '/countries/:id',
                element: <CountryDetails></CountryDetails>,
                loader: ({params}) => fetch(`https://happy-tour-server-alpha.vercel.app/countries/${params.id}`)
            }



        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </HelmetProvider>
    </React.StrictMode>
);

