'use client'

// lottie
import Lottie from 'lottie-react';
import animationData from '../../../public/login.json'

// next link
import Link from 'next/link';

// react
import React, { useState } from 'react';

// axios
import axios from 'axios';

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

  const [formData, setFormData] = useState({
      email: '',
      password: '',
  });
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Faz a requisição POST usando Axios
      const response = await axios.post('http://localhost:8050/auth/login', formData);
      
      // Lida com a resposta da API aqui (por exemplo, atualizando o estado do componente)
      console.log('Resposta da API:', response.data);
    } catch (error) {
      // Lida com erros da requisição aqui
      alert("Usuário ou senha inválido")
      console.error('Erro ao enviar requisição:', error);
    }
  };

  const handleInputChange = (event) => {
    // Atualiza o estado do formulário quando os campos são alterados
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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
          <div className='flex w-full max-w-[700px] bg-white/10 rounded-md'>
            <div className='flex flex-col w-full max-w-[700px]'>
              <Lottie animationData={animationData} />
            </div>
            <div className='flex flex-col w-full max-w-[700px] bg-white/50 rounded-r-md'>
              {/* form */}
              <motion.form
                variants={ fadeIn('up', 0.4) }
                initial='hidden'
                animate='show'
                exit='hidden'
                className='flex-1 flex flex-col items-center justify-center gap-6 w-full mx-auto'
                onSubmit={handleSubmit}
                >
                {/* input group */}
                <div className='flex flex-col gap-6 w-[300px]'>
                  <motion.input 
                    variants={ fadeIn('right', 0.6) }
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    action=''
                    type='text' 
                    name='email' 
                    placeholder='Email' 
                    className='input text-black border-primary/50 placeholder:text-primary/50' 
                    value={formData.email} 
                    onChange={handleInputChange}/>
                  <motion.input 
                    variants={ fadeIn('left', 0.6) }
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    action=''
                    type='password' 
                    name='password' 
                    placeholder='Password' 
                    className='input text-black border-primary/50 placeholder:text-primary/50'
                    value={formData.password} 
                    onChange={handleInputChange}/>
                </div>
                <button 
                  type="submit"
                  className='
                  btn rounded-full border border-primary/50 max-w-[120px] px-8 
                  transition-all delay-300 flex items-center justify-center 
                  overflow-hidden hover:border-accent hover:border-2 group'
                  >
                  <span className='
                    group-hover:-translate-y-[120%] group-hover:opacity-0 
                    transition-all delay-200 duration-200 text-primary'
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
              <div className='flex flex-col mb-10 items-center justify-center text-center w-full max-w-[700px] '>
                <p className='text-primary/60'>or</p>
                <Link href={'/register'} className='hover:text-accent font-bold text-primary/60'>register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};
