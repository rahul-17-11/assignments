import React from 'react'
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='flex justify-around font-semibold text-xl p-4 border-slate-200 border-b-[0.5px] px-16'>
        <span className='flex items-center gap-2'>Shop By Category <FaChevronDown /></span>
        <span className='flex items-center gap-2'>Shop By Age <FaChevronDown /></span>
        <span>Super Saver Deals</span>
        <span>Birthday Gifts</span>
        <span>Return Gifts</span>
        <span>Shop All</span>
        <span className='flex items-center gap-2'>More <FaChevronDown /></span>
    </div>
  )
}

export default Navbar