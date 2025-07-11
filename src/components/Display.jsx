import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/frontend-assets/assets'

const Display = () => {

    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.slice(-1) : "";
    const bgColour = albumsData[Number(albumId)].bgColor;

    useEffect(()=>{
        if (isAlbum) {
            displayRef.current.style.background = `linear-gradient(${bgColour},#121212)`
        }
        else
            displayRef.current.style.background = `#121212`
    })

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-black text-white overflow-auto lg:[75%]'>
        <Routes>
            <Route path='/' element={<DisplayHome/>} />
            <Route path='/album/:id' element={<DisplayAlbum/>} />
        </Routes>
    </div>
  )
}

export default Display