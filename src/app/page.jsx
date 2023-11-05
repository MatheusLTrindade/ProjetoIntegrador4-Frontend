'use client'

// next
import Link from 'next/link';

// lottie
import Lottie from 'lottie-react';
import animationData from '../../public/ecommerce.json'

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

export default function Home() {

	return (
		<main className='h-[100vh] bg-secondary/20 flex justify-center'>
			<div className='w-full h-full container flex justify-center items-center'>
        <div className='text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full mx-auto z-[1]'>
            {/* title */}
            <motion.h1 
              variants={fadeIn('down', 0.2)} 
              initial='hidden' 
              animate='show' 
              exit='hidden'
              className='h1 nova-slim'
            >
              Recicle<span className='text-secondary'>/</span>Renove
              <br/>
              <span className='text-blueMedium text-[50px] sm:text-[80px] '>Troca Fácil!</span>
            </motion.h1>
            {/* subtitle */}
            <motion.p 
              variants={fadeIn('down', 0.3)} 
              initial='hidden' 
              animate='show' 
              exit='hidden'
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
            >
              Transforme o que está parado em novas possibilidades!
              <br/>
              Conheça o Troca Fácil e liberte o potencial dos seus itens.
              <br/>
              <span className='text-blueLight sm:font-extralight sm:text-sm'>Diminua a produção de resíduos e contribua para um mundo mais sustentável!</span>
            </motion.p>
            {/* btns */}
            <div className="flex flex-col xs:flex-row items-center justify-center xl:justify-normal gap-4 ">
              <motion.div
                variants={fadeIn('right', 0.4)} 
                initial='hidden' 
                animate='show' 
                exit='hidden'
              >
                <Link 
                  name='register'
                  href='/register'
                  className='flex items-center justify-center px-4 py-2 bg-accent rounded-2xl transition-all duration-300 hover:bg-blueMedium'
                >
                  Cadastrar-se
                </Link>
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 0.4)} 
                initial='hidden' 
                animate='show' 
                exit='hidden'
              >
                <Link
                  name='login'
                  href="/login"
                  className='flex items-center justify-center px-4 py-2 bg-tertiary rounded-2xl transition-all duration-300 hover:bg-secondary'
                >
                  Logar
                </Link>
              </motion.div>
            </div>
        </div>
        <motion.div 
          variants={fadeIn('up', 0.5)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[490px] max-h-[430px] max-sm:hidden'
        >
          <Lottie animationData={animationData} />
        </motion.div>
      </div>
		</main>
	);
}
