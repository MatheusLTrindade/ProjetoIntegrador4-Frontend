// developer data
import developersData from '@/data/developersData.json' 

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// icons
import { FaQuoteLeft } from 'react-icons/fa'
import { BsMouseFill } from 'react-icons/bs';

// next image
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

export default function DevelopersSlider() {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true
      }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className='h-[400px]'
    >
      {developersData.map((person, slideIndex) => {
        return(
          <SwiperSlide key={slideIndex}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='
                w-full max-w-[300px] flex flex-col xl:justify-center 
                items-center relative mx-auto xl:mx-0'
              >
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt={`Avatar ${person.name}`} className='rounded-full drop-shadow-md shadow-md shadow-accent'/>
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* office */}
                  <div className='text-[12px] uppercase text-accent font-bold tracking-widest'>{person.office}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                </div>
              </div>
              {/* quote & message */}
              <div className='
                flex-1 flex flex-col justify-center before:w-[1px] 
                xl:before:bg-white/50 xl:before:absolute xl:before:left-0 
                xl:before:h-[200px] relative xl:pl-20 max-sm:-mt-6'
              >
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/30 mx-auto md:mx-0'/>
                </div>
                {/* message */}
                <div className='xl:text-lg text-center sm:text-justify max-sm:text-sm max-sm:overflow-y-auto max-sm:max-h-[100px]'>{person.message}</div>
                {/* span scroll */}
                <motion.p
                  variants={ fadeIn('up', 0.8) }
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  action='' 
                  className="flex sm:hidden absolute justify-center items-center gap-2 text-xs writing-vertical-lr text-tertiary/50 bottom-8 -right-4">
                  <span className='tracking-[-1.75px]'>---</span>
                  Scroll Down
                  <BsMouseFill />
                  <span className='text-tertiary/50 tracking-[-1.75px]'>---</span>
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
