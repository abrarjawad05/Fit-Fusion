import React, { useContext } from "react";
import { AuthContext } from "../context/authcontext";

function Navbar() {
    const { user, logout, loading } = useContext(AuthContext);


    const buttonList = [
        { id: 0, name: "Recipes", href: "/recipe" },
        { id: 1, name: "Meals", href: "/dietchart" },
        { id: 2, name: "Workout", href: "/workoutvideo" },
        { id: 3, name: "Yoga and Meditation", href: "/yoga" },
        { id: 4, name: "Check your Progress", href: "/dashboard" },
        { id: 5, name: "Shop", href: "/shop" },
        { id: 6, name: "Blog", href: "/blog" },
        { id: 7, name: "Map", href: "/gymmap" },
    ];

    return (
        <header className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a href="/" className="text-2xl font-bold text-teal-600 dark:text-teal-300">
                            FitFusion
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                {buttonList.map((button) => (
                                    <li key={button.id}>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href={button.href}
                                        >
                                            {button.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            {user ? (
                                <div className="sm:flex sm:gap-4 justify-center items-center">
                                    <span className="text-gray-700 dark:text-white">
                                        Hi, {user.username}
                                    </span>
                                    <button
                                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                                        onClick={logout}
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            ) : (
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                                        href="/login"
                                    >
                                        Login
                                    </a>
                                    <a
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                        href="/createaccount"
                                    >
                                        Register
                                    </a>
                                </div>
                            )}

                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
