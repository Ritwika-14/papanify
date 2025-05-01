import React, { useContext } from 'react'
import {assets} from '../assets/frontend-assets/assets' 
import { PlayerContext } from '../context/PlayerContext'


const Player = () => {

  const {track,seekBar,seekBg,PlayStatus,play,pause,time,previous,next,seekSong} = useContext(PlayerContext)

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4 '>
      <div className="hidden lg:flex items-center gap-4">
        <img className='w-12' src={track.image}></img>
        <div>
            <p>{track.name}</p>
            <p>{track.desc}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gep-1 m-auto">
        <div className="flex gap-4">
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon} />
            <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} />
            {PlayStatus ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} />
            : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} />}
            <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} />
            <img className='w-4 cursor-pointer' src={assets.loop_icon} />
        </div>
        <div className="flex gap-5 items-center">
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] rounded-full cursor-pointer bg-gray-300">
                <hr ref={seekBar} className='h-1 border-none w-0 bg-green-600 rounded-full' />
            </div>
            <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
    </div>
  )
}

export default Player
