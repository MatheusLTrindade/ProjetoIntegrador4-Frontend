'use client'

// components
import FormRegister from '@/components/FormRegister';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

export const metadata = {
  title: 'Register | PI4',
  description: 'Register PI4',
  OpenGraph: {
    title: 'Register | PI4',
    description: 'Register PI4.', 
  }
}

export default function Register(params) {
  return (
    <main className='h-[100vh] bg-primary/20'>
      <div
        className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'
      >
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h1 
            variants={ fadeIn('up', 0.2) }
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12 max-sm:text-[30px]'
          >
            Vamos <span className='text-accent'>cadastrar.</span>
          </motion.h1>
          {/* form */}
          <div className='bg-white/50 rounded-lg container p-6'>
            <FormRegister />
          </div>
        </div>
      </div>
    </main>
  )
};
