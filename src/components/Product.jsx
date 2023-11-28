// next
import Image from 'next/image';

// react
import { useRef, useEffect, useState } from 'react';

// icons
import { MdSettings } from 'react-icons/md';

// components
import ProfilePicture from './ProfilePicture';

export default function Product({ photo, name, price, amount, curCondition, photoSeller, seller, setting, click, admin }) {
  const h2Ref = useRef(null);
  const [isTextOverflowing, setIsTextOverflowing] = useState(false);

  useEffect(() => {
    const h2Element = h2Ref.current;

    if (h2Element) {
      const isOverflowing = h2Element.scrollWidth > h2Element.clientWidth;
      setIsTextOverflowing(isOverflowing);
    }
  }, [name]);
  return (
    <div className={`group flex flex-col justify-center items-center bg-white/30 p-2 rounded-md relative hover:bg-blueMedium shadow-md drop-shadow-md hover:shadow-white/50 ${setting ? 'w-[220px] h-[220px]' : ''} ${photoSeller && seller ? 'pt-8' : ''}`}>
      {/* Header */}
      { photoSeller && seller ? <ProfilePicture img={photoSeller} name={seller} /> : '' }
      {/* Image */}
      <div className={`h-[208px] w-[208px] p-1 bg-white/50 rounded-t-md shadow- shadow-black/50 drop-shadow-md ${setting ? 'transition-all ease-in duration-500 group-hover:hidden' : 'mb-2'}`} >
        <Image width={200} height={200} src={photo} alt={name} className="w-[200px] h-[200px] object-cover rounded-t-md" />
      </div>
      {/* Legend */}
      <div className={`overflow-hidden ${setting ? 'hidden min-w-[220px] max-w-[200px] h-[200px] transition-all ease-in duration-500 group-hover:flex flex-col justify-center items-center' : 'max-w-[200px]'}`}>
        <h2 ref={h2Ref} className={`w-full text-lg transition-all ease-in duration-300 whitespace-nowrap ${isTextOverflowing ? 'marquee' : ''} ${setting ? 'font-bold' : 'font-semibold group-hover:hidden'}`}>{name}</h2>
        <div className="flex flex-col items-center justify-between">
          <div className={`${setting ? '' : 'text-right absolute right-2 top-1'}`}>
            <p className={`transition-all ease-in duration-300 ${setting ? 'font-bold text-white' : 'text-black/50 text-[8px] font-semibold group-hover:text-white/50'}`}>{curCondition}</p>
            <p className={`transition-all ease-in duration-300 ${setting ? 'font-bold text-white' : 'text-black/50 text-[8px] font-semibold group-hover:text-white/50'}`}>QTD: {amount}</p>
          </div>
          <p className="text-accent font-bold mb-2 transition-all ease-in duration-300 group-hover:text-white">R$ {price}</p>
          <button className={`hidden bg-tertiary text-white px-2 rounded-full items-center transition-all ease-in-out duration-300 group-hover:block hover:bg-blueExtraLight ${setting ? 'py-2' : 'py-0'}`} onClick={click}>
            { admin ? <MdSettings /> : 'Solicitar troca' }
          </button>
        </div>
      </div>
    </div>
  );
}
