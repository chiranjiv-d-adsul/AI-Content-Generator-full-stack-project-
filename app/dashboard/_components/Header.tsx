import React from 'react'
import { Search } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
function Header() {
  return (
    <div className='p-2 shadow-sm border-b-2 md:flex justify-between items-center bg-white'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
          <Search/>
          <input type="text" placeholder="Search" className="outline-none "/>
        </div>
        <div className='flex gap-5 items-center'>
          <h2 className='bg-primary p-1 rounded-md text-xs  text-white px-2'>Join Subscription model for $9.99/Month</h2>
          <UserButton/>
        </div>
    </div>
  )
}

export default Header
