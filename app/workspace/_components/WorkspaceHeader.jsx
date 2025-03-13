import { UserButton } from '@clerk/nextjs'
import React from 'react'

const WorkspaceHeader = ({fileName}) => {
  return (
    <div>
        <div className='flex justify-between items-center p-1 px-1 py-2  shadow-sm'>
            <h1 className='font-bold text-2xl '>IntelliNote</h1>
            <h2>{fileName}</h2>
            <UserButton/>
        </div>
    </div>
  )
}

export default WorkspaceHeader