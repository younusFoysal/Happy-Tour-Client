import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {FaGithub, FaGoogle} from "react-icons/fa";
import {FiUserPlus} from "react-icons/fi";
import {Link, useNavigate} from "react-router-dom";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6";
import {useContext, useState} from "react";
import {AuthContext} from "../providers/AuthProvider.jsx";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config.js"
import {Helmet} from "react-helmet-async";


const Register = () => {

    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('')

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photoUrl = form.get('photoUrl')
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        //reset error
        setRegisterError('')
        setSuccess('')


        if(password.length < 6 ){
            setRegisterError('Password should be at least 6 char...');
            toast('Password should be at least 6 char...')
            return;
        }
        else if (!/[A-Z]/.test(password)){
            setRegisterError('Your pass should be at least 1 upper case char...');
            toast('Your pass should be at least 1 upper case char...')
            return;
        }
        else if (!/[a-z]/.test(password)){
            setRegisterError('Your pass should be at least 1 lower case char...');
            toast('Your pass should be at least 1 lower case char...')
            return;
        }



        //create user
        createUserWithEmailAndPassword( auth, email, password)
            .then(result => {
                console.log(result.user)
                toast('User Created.')
                setSuccess('User Created.')


                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoUrl
                })
                    .then(() => console.log("Profile Updated"))
                    .catch()

                navigate('/')




            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })




    }


    const regStyle = {
        "background-image" : "url('https://i.ibb.co/qNynF26/pexels-quang-nguyen-vinh-222549-2161920.jpg')",
        "background-size" : "cover"
    }

    return (
        <div>
            <Helmet>SK Real estate | Register </Helmet>

            <div className="min-h-screen text-gray-900 flex justify-center ">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold text-emerald-600">
                                Sign up
                            </h1>


                            <div className="w-full flex-1 mt-8">
                                {/*<div className="flex flex-col items-center">*/}
                                {/*    <button*/}
                                {/*        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-emerald-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">*/}
                                {/*        <div className="bg-white p-2 rounded-full">*/}
                                {/*            <FaGoogle></FaGoogle>*/}
                                {/*        </div>*/}
                                {/*        <span className="ml-4">*/}
                                {/*            Sign Up with Google*/}
                                {/*        </span>*/}
                                {/*    </button>*/}

                                {/*    <button*/}
                                {/*        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-emerald-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">*/}
                                {/*        <div className="bg-white p-2 rounded-full">*/}
                                {/*            <FaGithub></FaGithub>*/}
                                {/*        </div>*/}
                                {/*        <span className="ml-4">*/}
                                {/*            Sign Up with GitHub*/}
                                {/*            </span>*/}
                                {/*    </button>*/}
                                {/*</div>*/}

                                <div className="my-4 border-b text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium transform translate-y-1/2">
                                        Or sign up with e-mail
                                    </div>
                                </div>

                                <form onSubmit={handleRegister}>
                                    <div className="mx-auto max-w-xs">

                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            required/>


                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required/>

                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="url"
                                            name="photoUrl"
                                            placeholder="Photo URL"
                                            required/>

                                        <div className="relative">
                                            <input
                                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                placeholder="Password"
                                                required
                                            />
                                            <span className="absolute top-10 right-3"
                                                  onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                            }
                                        </span>
                                        </div>
                                        <button
                                            className="mt-5 tracking-wide font-semibold bg-emerald-500 text-gray-100 w-full py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <FiUserPlus className="text-2xl"></FiUserPlus>
                                            <span className="ml-3">
                                Sign Up
                            </span>
                                        </button>
                                        <p className="mt-6  text-xl text-gray-600 text-center">
                                            Already have account?
                                            <Link to="/login"> <span className="text-emerald-600 font-bold hover:text-emerald-700">Login Now!</span>
                                                </Link>
                                        </p>
                                    </div>
                                </form>

                            </div>


                        </div>
                    </div>
                    <div className="flex-1 bg-emerald-100 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                             style={regStyle}>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;