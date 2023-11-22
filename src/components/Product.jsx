// next
import Image from 'next/image';

// react
import React from 'react';

// icons
import { MdSettings } from 'react-icons/md';

// components
import ProfilePicture from './ProfilePicture';

export default function Product({ photo, name, price, amount, curCondition, photoSeller, seller, setting, click }) {
  return (
    <div className={`group flex flex-col justify-center items-center bg-white/30 p-2 rounded-md relative hover:bg-blueMedium shadow-md drop-shadow-md hover:shadow-white/50 ${setting ? 'w-[220px] h-[220px]' : ''} ${photoSeller && seller ? 'pt-8' : ''}`}>
      {/* Header */}
      { photoSeller && seller ? <ProfilePicture img={photoSeller} name={seller}/> : '' }
      {/* Image */}
      <div className={`h-[208px] w-[208px] p-1 bg-white/50 rounded-t-md shadow- shadow-black/50 drop-shadow-md ${setting ? 'transition-all ease-in duration-500 group-hover:hidden' : 'mb-2'}`} >
        <Image width={200} height={200} src={photo} alt={name} className="w-[200px] h-[200px] object-cover rounded-t-md" />
      </div>
      {/* Legend */}
      <div className={`${setting ? 'hidden w-[200px] h-[200px] transition-all ease-in duration-500 group-hover:flex flex-col justify-center items-center' : ''}`}>
        <h2 className={`text-lg font-semibold text-primary-dark transition-all ease-in duration-300 ${setting ? '' : 'group-hover:hidden'}`}>{name}</h2>
        <div className="flex flex-col items-center justify-between">
          <p className="text-accent font-bold mb-2 transition-all ease-in duration-300 group-hover:text-white">{price}</p>
          <button className={`hidden bg-tertiary text-white px-2 rounded-full items-center transition-all ease-in-out duration-300 group-hover:block hover:bg-blueExtraLight ${setting ? 'py-2' : 'py-0'}`} onClick={click}>
            { setting ? <MdSettings /> : 'Solicitar troca' }
          </button>
        </div>
      </div>
    </div>
  );
}
