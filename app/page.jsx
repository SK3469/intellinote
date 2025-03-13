"use client";  // Ensure it's a client component
import { api } from "@/convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";


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
    <div className="text-center my-[25%]">
      Hello Tubeguruji!
      <UserButton />
    </div>
  );
}
