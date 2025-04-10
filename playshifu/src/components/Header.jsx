import React from 'react'
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import Lottie from "lottie-react";
// import animationData from "./wave-bear.json";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    <div className='flex justify-around text-[#68005f] bg-[#ffde17] text-2xl p-4 items-center'>
        <div><FiSearch /></div>
        <div><img className='h-8' src="/playshifu-logo.webp" alt="Logo" /></div>
        <div className='flex relative gap-6'><LuShoppingCart /><sup className='absolute top-1 left-6 text-red-500'>0</sup> <CgProfile /></div>
    </div>
  )
}

export default Header