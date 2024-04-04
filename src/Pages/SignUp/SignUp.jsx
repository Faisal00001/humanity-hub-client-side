import { useContext } from "react";
import toast from "react-hot-toast";
import { BiLogoMongodb } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSubmit = (event) => {

        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photoURL = form.photoURL.value
        if (password.length < 6) {
            return toast.error('Password length should be at least six characters')
        }
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photoURL)
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email
                        }
                        console.log(userInfo)
                        axiosPublic.post('/userInfo', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    toast.success('User Added Successfully')
                                    form.reset()
                                    navigate('/')
                                }
                            })
                            .catch(error => toast.error(`${error}`))
                    })

            })
            .catch(error => toast.error(`${error}`))
    }
    return (
        <div className="pt-24">
            <section className=" dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <span>
                            <BiLogoMongodb className="text-red-500 text-4xl"></BiLogoMongodb>
                        </span>
                        Humanity Hub
                    </div>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign up to your account
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                    <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Name Here.." required />
                                </div>
                                <div>
                                    <label htmlFor="photoUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Photo</label>
                                    <input type="text" name="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Photo Here.." required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email Here.." required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>

                                <div className="flex justify-center">
                                    <button className="px-10 py-3 rounded-md bg-sky-300 font-semibold w-full">Sign In</button>
                                </div>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have account? <Link to={'/login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Sign up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;