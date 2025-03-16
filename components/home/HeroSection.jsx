import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const HeroSection = () => {
    const {user} = useUser()
  return (
    <div id='hero' className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 px-4">
      {/* Floating Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent)]"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-lg text-white mb-3 animate-fadeIn">Get Ready to Take Notes with AI Power</h2>
        <h1 className="font-extrabold text-5xl md:text-6xl text-white">
          <span className="text-red-400">PDF</span> Note Maker
        </h1>
        <p className="mt-4 text-gray-200 text-lg">Transform your documents into structured, intelligent notes instantly.</p>

        {/* Call to Action */}
        <div className="mt-6 space-y-2">
            <h2 className='font-medium text-xl text-white'> Get Started for Free</h2>
    {
        user?    (<Link href={'/dashboard'}>  <button className="px-6 py-3 bg-white text-blue-600 font-bold text-lg rounded-full shadow-md hover:scale-105 transition-transform duration-300">
        Dasboard
       </button></Link>):(
             <div className="flex items-center gap-3 justify-center">
             <Link href="/sign-in">
                 <Button  className="bg-gray-900 text-white hover:bg-gray-700">Signin</Button>
             </Link>
             <Link href="/sign-up">
                 <Button className="bg-gray-900 text-white hover:bg-gray-700">Signup</Button>
             </Link>
         </div>
       )
    }
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
