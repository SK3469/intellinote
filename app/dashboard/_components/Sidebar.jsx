"use client"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Layout, Shield } from "lucide-react";
import React from "react";
import UploadPdf from "../_components/UploadPdf"
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const { user } = useUser()
  const path = usePathname();
  const getUserInfo = useQuery(api.user.GetUserInfo, {
    userEmail: user?.primaryEmailAddress?.emailAddress
  });
  console.log("getUserInfo=>", getUserInfo)

  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress?.emailAddress
  })
  // console.log("filesidebar", fileList)
  return (
    <div className="px-4 w-full h-full relative flex flex-col mt-12 md:mt-0">
      <Link href={'/'} className='cursor-pointer'> <h1 className=' text-4xl md:text-3xl font-bold text-center mb-5 '>IntelliNote</h1></Link>
      <div className="w-full text-center ">
        <UploadPdf isMaxFile={(fileList?.length >= 5 && !getUserInfo.upgrade) ? true : false}>
          <Button className="w-[60%] md:w-full cursor-pointer">+Upload PDF</Button>
        </UploadPdf>
      </div>
      <div className="grid md:grid-cols-1 grid-cols-2 md:gap-2 my-7">
        <Link href={'/dashboard'}>
          <div className={`hover:bg-slate-100 rounded-md col-span-1 flex gap-2 md:justify-start justify-center items-center p-2
          ${path == '/dashboard' && 'bg-slate-200'}`}>
            <Layout />
            <h2>Workspace</h2>
          </div>
        </Link>
        {
          !getUserInfo?.upgrade && <Link href={'/dashboard/upgrade'}>
            <div className={`hover:bg-slate-100 rounded-md col-span-1 flex gap-2 md:justify-start justify-center items-center p-2
          ${path == '/dashboard/upgrade' && 'bg-slate-200'}`}>
              <Shield />
              <h2>Upgrade</h2>
            </div></Link>
        }

      </div>

      {/* Progress Bar at Bottom */}
      {
        !getUserInfo?.upgrade && <div className="md:absolute md:bottom-10  left-0 w-full px-4">
          <Progress value={(fileList?.length / 7) * 100} className="w-full " />
          <h2 className="font-medium md:text-sm text-lg text-center md:text-start my-1 ">{fileList?.length} out of 7 pdf uploaded</h2>
          <p className="text-gray-600 md:text-xs text-sm text-center md:text-start">Upgrade to upload more PDF</p>
        </div>
      }

    </div>
  );
};

export default Sidebar;
