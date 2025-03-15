"use client";  // Ensure it's a client component
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";
import Navbar from "../components/home/Navbar"
import Hero from "../components/home/HeroSection"
import Footer from "../components/home/Footer"
import Test from "../components/home/Testimonial"



export default function Home() {
  const { user } = useUser();
  const createUser = useMutation(api.user.createUser); // Correct usage

  useEffect(() => {
    if (user) {
      CheckUser();
    }
  }, [user]);

  const CheckUser = async () => {
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      imageUrl: user?.imageUrl,
      userName: user?.fullName,
    });
    console.log(result);
  };

  return (
    <div className="">
<Navbar/>
<Hero/>
<Test/>
<Footer/>
    </div>
  );
}
