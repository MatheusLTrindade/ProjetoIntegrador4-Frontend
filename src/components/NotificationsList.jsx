// next
import Image from 'next/image';

// react
import React, { useState } from 'react';

// icons
import { MdSettings } from 'react-icons/md';

// components
import ProfilePicture from './ProfilePicture';

// icons
import { FaDeleteLeft } from "react-icons/fa6";
import { RiAddCircleFill } from "react-icons/ri";

export default function NotificationsList() {
  return (
    <div className='group w-full h-[5.5rem] flex justify-center items-end bg-white/30 p-2 rounded-md relative hover:bg-blueMedium shadow-md drop-shadow-md hover:shadow-white/50'>
      <ProfilePicture img={'/DevMatheus.jpeg'} name={'Matheus Lopes'}/>
      <div className="flex h-11 w-full bg-white rounded-md text-black p-1 relative gap-2">
        <div className="flex flex-row items-center">
          {/* Image product */}
          <Image width={40} height={40} src={'/DevMurilo.jpeg'} alt={'Matheus'} className="w-[40px] h-[40px] object-cover rounded-md" />
        </div>
        {/* Description product */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, saepe.
        {/* accept/delete */}
        <div className="flex justify-center items-center absolute right-2 top-2 gap-2">
          <RiAddCircleFill className='text-green-500' />
          <FaDeleteLeft className='text-red-500' />
        </div>
      </div>
    </div>
  );
}
