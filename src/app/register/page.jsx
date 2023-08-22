'use client'

// icons
import { BsArrowRight } from 'react-icons/bs';
import { ImBin } from 'react-icons/im';
import { BiSolidImageAdd } from 'react-icons/bi';


// next
import Image from 'next/image';

// react
import { useState } from 'react';

// mask
import { IMaskInput } from "react-imask";

// framer motion
import { motion } from 'framer-motion';

// variants
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
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const hoje = new Date();
  hoje.setFullYear(hoje.getFullYear() - 18); // Subtrai 18 anos da data atual
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda, se necessário
  const dia = String(hoje.getDate()).padStart(2, '0'); // Adiciona zero à esquerda, se necessário

  const dataMaxima = `${ano}-${mes}-${dia}`;


  return (
    <main className='h-[100vh] bg-primary/30'>
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
            Vamos <span className='text-accent'>cadastrar.</span>
          </motion.h1>
          {/* form */}
          <motion.form
            variants={ fadeIn('up', 0.4) }
            initial='hidden'
            animate='show'
            exit='hidden'
            action=''
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group */}
            <div className='flex flex-col items-center'>
              <label htmlFor="fileInput" className={`${selectedImage && 'hidden'} inline-block input cursor-pointer w-auto p-2 transition-all duration-300 hover:text-accent hover:border-accent`}>
                <BiSolidImageAdd className='text-4xl'/>
              </label>
              <input type='file' id="fileInput" name='photo' className='hidden' onChange={imageChange}/>

              {selectedImage && (
                <div className='relative flex items-center justify-center'>
                  <Image
                    src={URL.createObjectURL(selectedImage)}
                    width={150} // Defina a largura e altura da imagem conforme necessário
                    height={150}
                    alt="Profile picture"
                    className='rounded-full drop-shadow-lg shadow-lg w-[100px] h-[100px] xs:w-[150px] xs:h-[150px]'
                  />
                  <button className='absolute -bottom-2' onClick={removeSelectedImage}>
                    <ImBin className='transition-all duration-300 hover:text-lg hover:text-accent'/>
                  </button>
                </div>
              )}
            </div>
            <div className='flex flex-col gap-6 w-full mx-auto max-xs:overflow-y-scroll max-xs:h-[250px] max-xs:bg-white/20 max-xs:p-2 max-xs:rounded-xl'
            >
              <div className='flex flex-col gap-6 w-full'>
                <input type='text' name='name' placeholder='name' className='input'/>
                <div className='flex flex-col xs:flex-row gap-6 w-full'>
                  <IMaskInput mask="000.000.000-00" type='text' name='cpf' placeholder='CPF' className='input'/>
                    <input type='date' name='birthday' className='input cursor-pointer' max={dataMaxima}/>
                    <IMaskInput mask="+55 (00) 0 0000-0000" type='tel' name='phone' placeholder='phone' className='input'/>
                </div>
                <div className='flex flex-col xs:flex-row gap-6 w-full'>
                  <input type='email' name='email' placeholder='email' className='input'/>
                  <input type='password' name='password' placeholder='password' className='input'/>
                </div>
              </div>
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
                Cadastrar
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
