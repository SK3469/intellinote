"use Client"
import React from 'react';
import { Button } from '../ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from '../ui/sheet';

const Navbar = () => {
    const { user } = useUser();
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <div className="fixed top-0 left-0 w-full p-4 bg-white/90 backdrop-blur-sm shadow-lg  z-50">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <h1 className="font-bold text-3xl bg-gradient-to-r from-gray-950 via-red-400 to-red-600 bg-clip-text text-transparent">
                    IntelliNote-AI
                </h1>

                {/*Desktop Navigation Links */}
                <div className="hidden md:block px-6 py-2 rounded-full bg-green-500/30 backdrop-blur-lg shadow-md">
                    <ul className="flex justify-center items-center gap-6 text-gray-900 font-medium">
                    <button
                             onClick={() => scrollToSection("hero")}
                            className="bg-none  rounded-md cursor-pointer text-base hover:scale-105 transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                        >
                           <li> Home</li>
                        </button>
                        {
                            user && (<Link href={'/dashboard'} className='relative cursor-pointer text-base hover:scale-105 transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full'>
                                <li>Dashboard</li>
                            </Link>)
                        }
                        <button
                             onClick={() => scrollToSection("testimonial")}
                            className="bg-none  rounded-md cursor-pointer text-base hover:scale-105 transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                        >
                           <li> Testimonial</li>
                        </button>
                        <button
                            onClick={() => scrollToSection("howToUse")}
                            className="bg-none  rounded-md cursor-pointer text-base hover:scale-105 transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                        >
                           <li> How to use?</li>
                        </button>

                    </ul>
                </div>
                {/* Mobile Navigation menu */}
                <div className='md:hidden flex items-center'>
                    <UserButton />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant='ghost'>
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <ul className="flex flex-col gap-6 text-gray-900 font-medium my-16">
                                <Link href={'/'} className=' p-2  hover:bg-slate-200 '>
                                    <li>Home</li>
                                </Link>
                                {
                                    user && (<Link href={'/dashboard'} className='p-2  hover:bg-slate-200 '>
                                        <li>Dashboard</li>
                                    </Link>)
                                }
                                <Link href={''}  className='p-2  hover:bg-slate-200'>
                                    <li>How to use?</li>
                                </Link>
                            </ul>
                            <SheetFooter className='py-12'>
                                <div className="flex my-12 gap-4">
                                    {user ? (
                                        <div className="flex items-center gap-2">
                                            <h1 className='font-medium '>AccountHolder:</h1>
                                            <h1 className="text-red-500 font-bold text-lg">{user?.fullName}</h1>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center pl-20 gap-4">
                                            <Link href="/sign-in">
                                                <Button variant="ghost" className="text-gray-900 border border-gray-900/50 hover:bg-gray-300">Signin</Button>
                                            </Link>
                                            <Link href="/sign-up">
                                                <Button className="bg-gray-900 text-white hover:bg-gray-700">Signup</Button>
                                            </Link>
                                        </div>
                                    )}
                                </div>

                            </SheetFooter>
                        </SheetContent>
                    </Sheet>

                </div>
                {/* Authentication Buttons */}
                <div className='hidden md:block'>
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
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
