'use client'

// lottie
import Lottie from 'lottie-react';
import animationData from '../../../public/login.json'

// next 
import Link from 'next/link';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

// components
import LoginForm from '@/components/LoginForm';

export const metadata = {
  title: 'Troca Fácil | Login',
  description: 'Login',
  OpenGraph: {
    title: 'Troca Fácil | Login',
    description: 'Login', 
  }
}

export default function Login(params) {

  return (
    <main className='h-[100vh] bg-secondary/20'>
      <div
        className='
          container mx-auto py-32 text-center
          flex items-center justify-center h-full'
        >
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2 
            variants={ fadeIn('up', 0.2) }
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12 max-sm:text-[30px] nova-slim'
          >
            Vamos <span className='text-accent'>logar.</span>
          </motion.h2>
          <div className='flex w-full max-w-[700px] bg-white/10 rounded-md'>
            <div className='flex flex-col w-full max-w-[700px] rounded-l-md shadow-xl drop-shadow-xl max-sm:absolute max-sm:bottom-50 max-sm:shadow-none'>
              <Lottie animationData={animationData} />
            </div>
            <div className='flex flex-col w-full max-w-[700px] bg-white/50 rounded-r-md shadow-inner shadow-black/50 drop-shadow-xl max-sm:pt-6 max-sm:bg-white/80'>
              {/* form */}
              <LoginForm />
              <div className='flex flex-col mb-10 items-center justify-center text-center w-full max-w-[700px] '>
                <p className='text-tertiary/60'>or</p>
                <Link href={'/register'} className='hover:text-accent font-bold text-tertiary/60'>register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};
