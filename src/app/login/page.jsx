'use client'

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../../variants';

export const metadata = {
  title: 'Login | PI4',
  description: 'Login PI4',
  OpenGraph: {
    title: 'Login | PI4',
    description: 'Login PI4.', 
  }
}

export default function Login(params) {
  return (
    <main className='h-[100vh] bg-primary/20'>
      <div
        className='
          container mx-auto py-32 text-center xl:text-left 
          flex items-center justify-center h-full'
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
            Vamos <span className='text-accent'>logar.</span>
          </motion.h1>
          {/* form */}
          <motion.form
            variants={ fadeIn('up', 0.4) }
            initial='hidden'
            animate='show'
            exit='hidden'
            action=''
            className='flex-1 flex flex-col items-center justify-center gap-6 w-full mx-auto'
          >
            {/* input group */}
            <div className='flex flex-col gap-6 w-[300px]'>
              <motion.input 
                variants={ fadeIn('right', 0.6) }
                initial='hidden'
                animate='show'
                exit='hidden'
                action=''
                type='text' name='username' placeholder='username' className='input'/>
              <motion.input 
                variants={ fadeIn('left', 0.6) }
                initial='hidden'
                animate='show'
                exit='hidden'
                action=''
                type='password' name='password' placeholder='password' className='input'/>
            </div>
            <button className='
              btn rounded-full border border-white/50 max-w-[120px] px-8 
              transition-all delay-300 flex items-center justify-center 
              overflow-hidden hover:border-accent hover:border-2 group'
            >
              <span className='
                group-hover:-translate-y-[120%] group-hover:opacity-0 
                transition-all delay-200 duration-200'
              >
                Logar
              </span>
              <BsArrowRight className='
                -translate-y-[120%] opacity-0 group-hover:flex 
                group-hover:-translate-y-0 group-hover:opacity-100 
                transition-all delay-200 duration-200 absolute text-[30px] 
              text-accent font-bold' 
              />
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  )
};
