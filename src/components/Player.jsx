import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong } = useContext(PlayerContext);

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className="w-12" src={track.image} alt={track.name} />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <button className="w-4 cursor-pointer" onClick={previous}><img className="w-full" src={assets.shuffle_icon} alt="Shuffle" /></button>
          <button className="w-4 cursor-pointer" onClick={previous}><img className="w-full" src={assets.prev_icon} alt="Previous" /></button>
          {playStatus ? <button className="w-4 cursor-pointer" onClick={pause}><img className="w-full" src={assets.pause_icon} alt="Pause" /></button> : <button className="w-4 cursor-pointer" onClick={play}><img className="w-full" src={assets.play_icon} alt="Play" /></button>}
          <button className="w-4 cursor-pointer" onClick={next}><img className="w-full" src={assets.next_icon} alt="Next" /></button>
          <button className="w-4 cursor-pointer"><img className="w-full" src={assets.loop_icon} alt="Loop" /></button>
        </div>
        <div ref={seekBg} onClick={seekSong} className='flex items-center gap-5'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-null w-20 bg-green-800 rounded-full' />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <button><img src={assets.plays_icon} className='w-4' alt="Plays" /></button>
        <button><img src={assets.mic_icon} className='w-4' alt="Mic" /></button>
        <button><img src={assets.queue_icon} className='w-4' alt="Queue" /></button>
        <button><img src={assets.speaker_icon} className='w-4' alt="Speaker" /></button>
        <button><img src={assets.volume_icon} className='w-4' alt="Volume" /></button>
        <div className='w-20 bg-slate-50 h-1 rounded'></div>
        <button><img src={assets.mini_player_icon} className='w-4' alt="Mini Player" /></button>
        <button><img src={assets.zoom_icon} className='w-4' alt="Zoom" /></button>
      </div>
    </div>
  );
}

export default Player;
