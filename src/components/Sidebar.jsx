import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <nav className='bg-gray-900 h-[15%] rounded flex flex-col justify-around'>
        <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className='font-bold'>Home </p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className='font-bold'>Search</p>
        </div>
      </nav>

      <div className='bg-gray-900 h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img src={assets.stack_icon} alt="Stack Icon" className='w-8' />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt="Arrow Icon" />
            <img className='w-5' src={assets.plus_icon} alt="Plus Icon" />
          </div>
        </div>

    
        <div className='p-4 bg-gray-900 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1>Create your first playlist</h1>
          <p className='font-light'>It's easy, we will help you</p>
          <button className='px-4 py-1 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
        </div>

      
        <div className='p-4 bg-gray-900 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1>Let's find some podcasts to follow</h1>
          <p className='font-light'>We'll keep you updated on new episodes</p>
          <button className='px-4 py-1 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcast</button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
