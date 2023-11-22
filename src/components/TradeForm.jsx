// icons
import { BsArrowRight } from 'react-icons/bs';

// react
import { useState } from 'react';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// api
import createProduct from '@/api/create/createProduct';
import productPhoto from '@/api/upload/productPhoto';

export default function TradeForm(params) {

	const [formData, setFormData] = useState({
    id: '',
		productProposalId: ''
	});

	function handleInputChange(e) {
		// Atualiza o estado do formulário quando os campos são alterados
		const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			// Faz a requisição usando a função createProduct
      console.log(formData)
			const response = await createProduct(formData, router);
			setPhotoData({ id: response });
			await productPhoto(PhotoData);
		} catch (error) {
			throw error;
		}
	}

	return (
		<motion.form
			variants={fadeIn('up', 0.4)}
			initial='hidden'
			animate='show'
			exit='hidden'
			encType='multipart/form-data'
			className='flex-1 flex flex-col gap-6 w-full mx-auto max-sm:max-h-[300px]'
			onSubmit={handleSubmit}>
			{/* input groups */}
			<div className='flex flex-col gap-2 w-full mx-auto max-xl:overflow-y-scroll max-xl:h-[250px] max-xl:bg-white/10 max-xl:p-2 max-xl:rounded-xl'>
				<div className='flex flex-col gap-2 w-full'>
					<div className='flex flex-col xl:flex-row gap-2 w-full'>
						<motion.select
							variants={fadeIn('up', 0.8)}
							initial='hidden'
							animate='show'
							exit='hidden'
							name='productProposalId'
							onChange={handleInputChange}
							className='input text-black border-tertiary/50'>
                <option value={0} selected disabled>Produto</option>
                <option value={1}>TESTE_POST</option>
            </motion.select>
					</div>
				</div>
			</div>
			{/* button send */}
			<motion.div
				variants={fadeIn('right', 1.4)}
				initial='hidden'
				animate='show'
				exit='hidden'>
				<button
					type='submit'
					className='
          btn rounded-full border border-tertiary/50 max-w-[120px] px-8 
          transition-all delay-300 flex items-center justify-center 
          overflow-hidden hover:border-accent hover:border-2 group hover:translate-x-6'>
					<span
						className='
            group-hover:-translate-y-[120%] group-hover:opacity-0 
            transition-all delay-200 duration-200 text-tertiary'>
						Enviar
					</span>
					<BsArrowRight
						className='
            -translate-y-[120%] opacity-0 group-hover:flex 
            group-hover:-translate-y-0 group-hover:opacity-100 
            transition-all delay-200 duration-200 absolute text-[30px] 
          text-accent font-bold'
					/>
				</button>
			</motion.div>
		</motion.form>
	)
};
