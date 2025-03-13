"use client"
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs'
import { useQuery } from 'convex/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = () => {
  const { user } = useUser();
  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress.emailAddress
  });
  console.log("filelist=>", fileList)

  return (

    <div className='md:p-4 md:overflow-scroll h-screen '>
      <div>
        <h2 className="font-bold text-3xl text-center md:text-left">Workspace</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-8 p-4 mt-5'>
        {
          fileList?.length > 0 ? fileList?.map((file, index) => (
            <Link key={index} href={`/workspace/${file.fileId}`}>
              <div  className='flex p-5 shadow-md justify-center items-center gap-4 flex-col rounded-md cursor-pointer hover:scale-105 transition-all border border-slate-200 ' >
                <Image src={'/pdf.png'} alt='file' width={70} height={70} />
                <h1 className='font-medium text-lg '>{file.fileName}</h1>
              </div>
              </Link>
          )) : [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className='bg-slate-200 shadow-md  rounded-md'>

            </div>
          ))}
      </div>

    </div>
  )
}

export default page