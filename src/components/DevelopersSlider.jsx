// developer data
export const developersData = [
  {
    image: '/DevJhonatan.jpeg',
    name: 'Jhonatan Ribeiro',
    position: 'Backend',
    office: 'Leader',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/DevMatheus.jpeg',
    name: 'Matheus Trindade',
    position: 'Frontend',
    office: 'Leader',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Murilo Lima',
    position: 'Frontend',
    office: 'Support',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/DevRonald.jpeg',
    name: 'Ronald Amorim',
    position: 'Backend',
    office: 'Infrastructure',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Vinicius Carvalho',
    position: 'Backend',
    office: 'Support',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

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

// next image
import Image from 'next/image';

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
        // disableOnInteraction: false
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
                    <Image src={person.image} width={100} height={100} alt={`Avatar ${person.name}`} className='rounded-full'/>
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
                xl:before:bg-white/20 xl:before:absolute xl:before:left-0 
                xl:before:h-[200px] relative xl:pl-20'
              >
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left max-sm:text-sm'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
