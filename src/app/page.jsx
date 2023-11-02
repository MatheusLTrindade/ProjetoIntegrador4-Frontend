'use client'

// next
import Link from 'next/link';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

export default function Home() {

	return (
		<main className='h-[100vh] bg-primary/20'>
			<div className='w-full h-full '>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
            {/* title */}
            <motion.h1 
              variants={fadeIn('down', 0.2)} 
              initial='hidden' 
              animate='show' 
              exit='hidden'
              className='h1'
            >
              Tem um produto parado <br /> Vem pro{' '}
              <span className='text-accent'>Troca Fácil!</span>
            </motion.h1>
            {/* subtitle */}
            <motion.p 
              variants={fadeIn('down', 0.3)} 
              initial='hidden' 
              animate='show' 
              exit='hidden'
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
            >
              Aqui o seu produto usado ganha novos destinos. <br />
              <span className='text-orangeLight font-bold'>Diminua a produção de resíduos e contribua para um mundo mais sustentável!</span>
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
                  className='flex items-center justify-center px-4 py-2 bg-accent rounded-2xl transition-all duration-300 hover:bg-orangeMedium'
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
                  className='flex items-center justify-center px-4 py-2 bg-tertiary rounded-2xl transition-all duration-300 hover:bg-primary'
                >
                  Logar
                </Link>
              </motion.div>
            </div>
        </div>
      </div>
		</main>
	);
}
