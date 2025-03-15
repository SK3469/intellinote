import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

import React from 'react'
import { FaBackward } from 'react-icons/fa'

const WorkspaceHeader = ({fileName}) => {
  return (
    <div>
        <div className='flex justify-between items-center p-1 px-1 py-2  shadow-sm'>
            <Link href={'/'} className='cursor-pointer'> <h1 className='font-bold text-2xl '>IntelliNote</h1></Link>
            <div className='flex gap-2 items-center pr-16'>
             <Link href={'/dashboard'} className='cursor-pointer text-red-500'>
             <FaBackward/></Link>
            <h2>{fileName}</h2>
            </div>
           
            <UserButton/>
        </div>
    </div>
  )
}

export default WorkspaceHeader