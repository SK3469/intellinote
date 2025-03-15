import React from 'react';
import { Button } from '../ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => {
    const { user } = useUser();

    return (
        <div className="fixed top-0 left-0 w-full p-4 bg-white/90 backdrop-blur-sm shadow-lg  z-50">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <h1 className="font-bold text-3xl bg-gradient-to-r from-gray-950 via-red-400 to-red-600 bg-clip-text text-transparent">
                    IntelliNote-AI
                </h1>

                {/* Navigation Links */}
                <div className="px-6 py-2 rounded-full bg-green-500/30 backdrop-blur-lg shadow-md">
                    <ul className="flex justify-center items-center gap-6 text-gray-900 font-medium">
                        <Link href={'/'} className='relative cursor-pointer text-base hover:scale-105 transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full'>
                            <li>Home</li>
                        </Link>
                        {
                            user &&(<Link href={'/dashboard'} className='relative cursor-pointer text-base hover:scale-105 transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full'>
                                <li>Dashboard</li>
                            </Link>)
                        }
                        <Link href={'/how-to-use'} className='relative cursor-pointer text-base hover:scale-105 transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full'>
                            <li>How to use?</li>
                        </Link>
                    </ul>
                </div>

                {/* Authentication Buttons */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <div className="flex items-center gap-2">
                            <UserButton />
                            <h1 className="text-gray-900">{user?.fullName}</h1>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link href="/sign-in">
                                <Button variant="ghost" className="text-gray-900 border border-gray-900/50 hover:bg-gray-300">Signin</Button>
                            </Link>
                            <Link href="/sign-up">
                                <Button className="bg-gray-900 text-white hover:bg-gray-700">Signup</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
