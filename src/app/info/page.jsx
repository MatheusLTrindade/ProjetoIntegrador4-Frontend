'use client'

// about data
import aboutData from '@/data/aboutData.json'

// components
import Footer from '@/components/Footer';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

// counter
import CountUp from 'react-countup';

export const metadata = {
  title: 'Info | PI4',
  description: 'Info PI4',
  OpenGraph: {
    title: 'Info | PI4',
    description: 'Info PI4.', 
  }
}

export default function Info(params) {
  return (
    <main className='h-[100vh] bg-secondary/20 py-32 text-center'>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center resize'>
          <motion.h3 
            variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className='h3 max-sm:h2 max-sm:text-[30px] max-[375px]:text-[28px] max-sm:mt-0 nova-slim'
          >
            Dicas | <span className='text-accent'>Informativos.</span>
          </motion.h3>
          <motion.p 
            variants={fadeIn('right', 0.4)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px2 xl:px-0 max-sm:text-sm max-[375px]:text-xs'
          >
            01 ano atuando no mercado, auxiliando pessoas na busca de produtos e economia. Contribuindo para um mundo melhor!
          </motion.p>
          {/* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className=' md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'
              >
                <div className='text-base xl:text-2xl font-extrabold text-blueExtraLight mb-2 animate-[bounce_1500ms_infinite]'>
                  <CountUp start={-5} end={1} duration={5} /> + 
                </div>
                <div className='uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-[8px]'>
                  Years of market
                </div>
              </div>
              {/* Satisfied clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'
              >
                <div className='text-base xl:text-2xl font-extrabold text-blueExtraLight mb-2 animate-[bounce_1700ms_infinite]'>
                  <CountUp start={-5} end={530} duration={5} /> + 
                </div>
                <div className='uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-[8px]'>
                  Satisfied clients
                </div>
              </div>
              {/* Exchanges products */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'
              >
                <div className='text-base xl:text-2xl font-extrabold text-blueExtraLight mb-2 animate-[bounce_1900ms_infinite]'>
                  <CountUp start={-5} end={841} duration={5} /> + 
                </div>
                <div className='uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-[8px]'>
                  Exchanged products
                </div>
              </div>
              {/* Registered users */}
              <div className='relative flex-1'>
                <div className='text-base xl:text-2xl font-extrabold text-blueExtraLight mb-2 animate-[bounce_2200ms_infinite]'>
                  <CountUp start={-5} end={1745} duration={5} /> + 
                </div>
                <div className='uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-[8px]'>
                  Registered users
                </div>
              </div>
              {/* Registered products */}
              <div className='relative flex-1'>
                <div className='text-base xl:text-2xl font-extrabold text-blueExtraLight mb-2 animate-[bounce_2200ms_infinite]'>
                  <CountUp start={-5} end={2984} duration={5} /> + 
                </div>
                <div className='uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-[8px]'>
                  Registered products
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Contacts */}
        <motion.div 
          variants={fadeIn('left', 0.4)} 
          initial='hidden' 
          animate='show' 
          exit='hidden' 
          className="flex-1 flex flex-col md:items-center justify-center resize"
        >
          <motion.h3 
            variants={fadeIn('down', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className='h3 max-sm:h2 max-sm:text-[30px] max-[375px]:text-[28px] max-sm:mt-0 nova-slim'
          >
            Contacts<span className='text-accent'>.</span>
          </motion.h3>
          <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className='flex flex-col w-full md:items-center'
          >
            <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-start'>
              {aboutData.map((item, index) => {
                return (
                  <div 
                  key={index}
                  className='flex-1 flex max-w-max gap-x-2 text-white/60 justify-center items-center'
                  >
                    {/* titles */}
                    <motion.h3 
                      variants={fadeIn('up', 0.6)} 
                      initial='hidden' 
                      animate='show' 
                      exit='hidden' 
                      className='font-light mb-0 text-sm'
                    >
                      {item.title}
                    </motion.h3> 
                    {/* items */}
                    <motion.p 
                      variants={fadeIn('up', 0.8)} 
                      initial='hidden' 
                      animate='show' 
                      exit='hidden' 
                      className='text-lg text-white'
                    >
                      {item.text}
                    </motion.p> 
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        variants={fadeIn('left', 0.4)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'
        className='absolute bottom-[7vh] xl:bottom-[1vh] -right-1'
      >
        < Footer />
      </motion.div>
    </main>
  )
};
