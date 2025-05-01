import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className="w-full flex justify-between items-center font-semibold">
            <div className="flex items-center gap-2">
                <img onClick={()=>navigate(-1)} className='w-8 bg-black rounded-2xl p-2 cursor-pointer' src={assets.arrow_left} />
                <img onClick={()=>navigate(+1)} className='w-8 bg-black rounded-2xl p-2 cursor-pointer' src={assets.arrow_right} />
            </div>
            <div className="flex items-center gap-4">
                <p className='bg-white text-black py-1 px-3 texp-[15px] rounded-2xl flex items-center cursor-pointer'>love you</p>
                <p className='bg-[#a5d4eb] text-black w-8 h-8 rounded-full flex items-center justify-center cursor-pointer'>AR</p>
            </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'></p>
        </div>
    </>
  )
}

export default Navbar