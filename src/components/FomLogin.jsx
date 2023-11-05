// icons
import { BsArrowRight } from 'react-icons/bs';

// next 
import Link from 'next/link';

// react
import { useState } from 'react';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// axios
import axios from 'axios';

export default function FormLogin(params) {

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
          name='email' 
          placeholder='Email' 
          className='input text-black border-tertiary/50 placeholder:text-tertiary/50' 
          onChange={handleInputChange}/>
        <motion.input 
          variants={ fadeIn('left', 0.6) }
          initial='hidden'
          animate='show'
          exit='hidden'
          type='password' 
          name='password' 
          placeholder='Password' 
          className='input text-black border-tertiary/50 placeholder:text-tertiary/50'
          onChange={handleInputChange}/>
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