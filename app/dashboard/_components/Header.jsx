import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  return (
    <div className='p-1 py-3  shadow-sm'>
<div className='flex justify-between items-center'>
    <h1></h1>
    <UserButton/>
</div>
    </div>
  )
}

export default Header