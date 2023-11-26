// icons
import { BsArrowRight, BsMouseFill } from 'react-icons/bs';
import { ImBin } from 'react-icons/im';
import { BiSolidImageAdd } from 'react-icons/bi';

// next
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// react
import { useState } from 'react';

// mask
import { IMaskInput } from 'react-imask';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// api
import createProduct from '@/api/create/createProduct';

export default function ProductForm() {
	// Função para mostrar o toast a partir de createProduct
	const router = useRouter();

	const [photoData, setPhotoData] = useState({
		id: '',
		file: '',
	});

	const [formData, setFormData] = useState({
		id: '',
		name: '',
		price: '',
		amount: '',
		curCondition: '',
		subCategoryId: '',
	});

	function handleInputChange(e) {
		// Atualiza o estado do formulário quando os campos são alterados
		const { name, value } = e.target;
		if (name === 'price') {
			// Remova caracteres não numéricos e converta para número
			const numericValue = parseFloat(value.replace(/[^\d.]/g, ''), 10);
			setFormData({ ...formData, [name]: numericValue || 0 });
		}
		if (name === 'amount') {
			const numericValue = parseFloat(value.replace(/[^\d.]/g, ''), 10);
			setFormData({ ...formData, [name]: numericValue || 0 });
		}
		if (name === 'subCategoryId') {
			const numericValue = parseFloat(value.replace(/[^\d.]/g, ''), 10);
			setFormData({ ...formData, [name]: numericValue || 0 });
		}
		if (name === 'name') {
			setFormData({ ...formData, [name]: value });
		}
		if (name === 'curCondition') {
			setFormData({ ...formData, [name]: value });
		}
		setFormData({ ...formData, [id]: null });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			// Faz a requisição usando a função createProduct
			console.log(formData);
			await createProduct(formData, photoData, router);
		} catch (error) {
			throw error;
		}
	}

	// Image
	const [selectedImage, setSelectedImage] = useState();
	function imageChange(e) {
		if (e.target.files && e.target.files.length > 0) {
			setSelectedImage(e.target.files[0]);
			setPhotoData({ file: e.target.files[0] });
		}
	}
	function removeSelectedImage() {
		setSelectedImage();
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
			<div className='flex flex-col items-center'>
				<label
					htmlFor='fileInput'
					className={`${
						selectedImage && 'hidden'
					} inline-block input cursor-pointer w-auto p-2 transition-all duration-300 text-tertiary/50 border-tertiary/50 hover:text-accent hover:border-accent`}>
					<BiSolidImageAdd className='text-4xl' />
				</label>
				<input
					type='file'
					accept='image/jpeg, image/png, image/gif'
					id='fileInput'
					className='hidden'
					onChange={(e) => {
						imageChange(e);
					}}
				/>
				{/* show image */}
				{selectedImage && (
					<div className='relative flex items-center justify-center'>
						<Image
							src={URL.createObjectURL(selectedImage)}
							width={100}
							height={100}
							alt='Profile picture'
							className='rounded-full drop-shadow-lg shadow-lg w-[100px] h-[100px]'
						/>
						<button
							className='absolute -bottom-2'
							onClick={removeSelectedImage}>
							<ImBin className='transition-all duration-300 hover:text-lg hover:text-accent' />
						</button>
					</div>
				)}
			</div>
			<div className='flex flex-col gap-2 w-full mx-auto max-xl:overflow-y-scroll max-xl:h-[250px] max-xl:bg-white/10 max-xl:p-2 max-xl:rounded-xl'>
				<div className='flex flex-col gap-2 w-full'>
					<div className='flex flex-col xl:flex-row gap-2 w-full'>
						<motion.input
							variants={fadeIn('right', 0.6)}
							initial='hidden'
							animate='show'
							exit='hidden'
							type='text'
							name='name'
							placeholder='Produto'
							onChange={handleInputChange}
							className='input text-black border-tertiary/50 placeholder:text-tertiary/50'
						/>
						<motion.div
							variants={fadeIn('left', 0.6)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='w-full'>
							<IMaskInput
								mask='R$ num'
								blocks={{
									num: {
										mask: Number,
										thousandsSeparator: '.',
										radix: ',',
										scale: 2,
										signed: false,
										normalizeZeros: true,
										padFractionalZeros: true,
										min: 0,
									},
								}}
								type='text'
								name='price'
								placeholder='Preço'
								onChange={handleInputChange}
								className='input text-black border-tertiary/50 placeholder:text-tertiary/50'
							/>
						</motion.div>
					</div>
					<div className='flex flex-col xl:flex-row gap-2 w-full'>
						<motion.input
							variants={fadeIn('right', 0.8)}
							initial='hidden'
							animate='show'
							exit='hidden'
							type='number'
							name='amount'
							placeholder='Quantidade'
							onChange={handleInputChange}
							className='input text-black border-tertiary/50 placeholder:text-tertiary/50'
						/>
						<motion.select
							variants={fadeIn('up', 0.8)}
							initial='hidden'
							animate='show'
							exit='hidden'
							name='subCategoryId'
							onChange={handleInputChange}
							className='input text-black border-tertiary/50'>
							<option
								value={0}
								selected
								disabled>
								Categoria
							</option>
							<option value={1}>TESTE_POST</option>
						</motion.select>
						<motion.select
							variants={fadeIn('left', 0.8)}
							initial='hidden'
							animate='show'
							exit='hidden'
							name='curCondition'
							onChange={handleInputChange}
							className='input text-black border-tertiary/50'>
							<option
								value='0'
								selected
								disabled>
								Condição
							</option>
							<option value='BOM'>BOM</option>
							<option value='OTIMO'>ÓTIMO</option>
							<option value='EXCELENTE'>EXCELENTE</option>
						</motion.select>
					</div>
				</div>
			</div>
			{/* span scroll */}
			<motion.p
				variants={fadeIn('up', 0.8)}
				initial='hidden'
				animate='show'
				exit='hidden'
				action=''
				className='flex xl:hidden absolute justify-center items-center gap-2 text-xs writing-vertical-lr text-tertiary/50 bottom-20 -right-4'>
				<span className='tracking-[-1.75px]'>---</span>
				Scroll Down
				<BsMouseFill />
				<span className='text-tertiary/50 tracking-[-1.75px]'>---</span>
			</motion.p>
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
						Publicar
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
	);
}
