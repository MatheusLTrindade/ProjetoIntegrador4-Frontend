// icons
import { BsArrowRight } from 'react-icons/bs';

// next 
import { useRouter } from 'next/navigation';

// react
import { useState } from 'react';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// api/auth
import authLogin from '@/api/auth/authLogin';

export default function LoginForm(params) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });
  
  function handleInputChange(e) {
    // Atualiza o estado do formulário quando os campos são alterados
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Faz a requisição usando a função authLogin
      await authLogin(formData, router);
    } catch (error) {
      throw error
    }
  };

  return(
    <motion.form
      variants={ fadeIn('up', 0.4) }
      initial='hidden'
      animate='show'
      exit='hidden'
      className='flex-1 flex flex-col items-center justify-center gap-6 w-full mx-auto'
      onSubmit={handleSubmit}>
      {/* input group */}
      <div className='flex flex-col gap-6 w-[300px]'>
        <motion.input 
          variants={ fadeIn('right', 0.6) }
          initial='hidden'
          animate='show'
          exit='hidden'
          type='text' 
          name='login' 
          placeholder='Email'  
          onChange={handleInputChange}
          className='input text-black border-tertiary/50 placeholder:text-tertiary/50'/>
        <motion.input 
          variants={ fadeIn('left', 0.6) }
          initial='hidden'
          animate='show'
          exit='hidden'
          type='password' 
          name='password' 
          placeholder='Password' 
          onChange={handleInputChange}
          className='input text-black border-tertiary/50 placeholder:text-tertiary/50'/>
      </div>
      <button 
        type="submit"
        className='
        btn rounded-full border border-tertiary/50 max-w-[120px] px-8 
        transition-all delay-300 flex items-center justify-center 
        overflow-hidden hover:border-accent hover:border-2 group'
        >
        <span className='
          group-hover:-translate-y-[120%] group-hover:opacity-0 
          transition-all delay-200 duration-200 text-tertiary'
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
  )
};