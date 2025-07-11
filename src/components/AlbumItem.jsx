import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image,name,desc,id}) => {

    const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] p-2 pc-3 cursor-pointer rounded hover:bg-[#ffffff26]'>
      <img className='rounded' src={image}></img>
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItem
