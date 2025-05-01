import React from 'react'
import {assets} from '../assets/frontend-assets/assets' 
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const home = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 text-white flex-col gap-2 lg:flex hidden sm:block'>
        <div className="bg-[#2c2e2e] h-[15%] rounded flex flex-col justify-around">
            <div onClick={()=>home('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
                <img className='w-6' src={assets.home_icon} />
                <p className='font-bold'>Home</p>
            </div>
            <div className="flex items-center gap-3 pl-8">
                <img className='w-6' src={assets.search_icon} />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className="rounded bg-[#040404] h-[85%]">
            <div className="flex items-center justify-between p-4">
                <div className="flex gap-3 items-center">
                    <img className='w-8' src={assets.stack_icon} />
                    <p className='semi-bold'>Your Library</p>
                </div>
                <div className="flex gap-5 items-center">
                    <img className='w-5' src={assets.arrow_icon} />
                    <img className='w-5' src={assets.plus_icon} />
                </div>
            </div>
            <div className="p-4 m-2 rounded flex-col items-start justify-start bg-[#2b2c2d] text-white gap-1 pl-4">
                <h1>MESSI Fan</h1>
                <p className='font-bold'>Let's catch up</p>
                <button className='px-4 py-1.5 bg-slate-600 text-[15px] rounded-full mt-4'></button>
            </div>
            <div className="p-4 m-2 rounded flex-col items-start justify-start bg-[#2b2c2d] text-white gap-1 pl-4">
                <h1>Luchi Mangsho Fan</h1>
                <p className='font-bold'>Let's catch up</p>
                <button className='px-4 py-1.5 bg-slate-600 text-[15px] rounded-full mt-4'></button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar