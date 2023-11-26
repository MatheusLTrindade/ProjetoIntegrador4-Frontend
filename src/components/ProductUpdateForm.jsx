// icons
import { BsArrowRight, BsMouseFill } from 'react-icons/bs';
import { ImBin } from 'react-icons/im';
import { BiSolidImageAdd } from 'react-icons/bi';

// next
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// react
import { useState, useEffect } from 'react';

// mask
import { IMaskInput } from 'react-imask';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// api
import updateProduct from '@/api/update/updateProduct';

export default function ProductUpdateForm({ product }) {
	// Função para mostrar o toast a partir de updateProduct
	const router = useRouter();

	const [photoProductData, setPhotoProductData] = useState({
		id: `${product.id}`,
		file: '',
	});

	const [formData, setFormData] = useState({
		id: product.id,
		name: product.name,
		price: product.price,
		amount: product.amount,
		curCondition: product.curCondition,
		subCategoryId: product.subCategoryId,
	});
	
	useEffect(() => {
		setFormData({
			id: product.id,
			name: product.name,
			price: product.price,
			amount: product.amount,
			curCondition: product.curCondition,
			subCategoryId: product.subCategoryId,
		});
		setPhotoProductData({
			id: product.id
		})
	}, [product]);

	function handleInputChange(e) {
		console.log(e.target)
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
			// Faz a requisição usando a função updateProduct
			console.log(formData);
			await updateProduct(formData, photoProductData, router);
		} catch (error) {
			throw error;
		}
	}

	// Image
	const [selectedImageProduct, setSelectedImageProduct] = useState();
	function imageProductChange(eventProduct) {
		//console.log('CERTO:' + eventProduct.target.files[0])
		console.log('ID' + product.id)
		if (eventProduct.target.files && eventProduct.target.files.length > 0) {
			setSelectedImageProduct(eventProduct.target.files[0]);
			setPhotoProductData({ file: eventProduct.target.files[0] });
		}
	}
	function removeSelectedImageProduct() {
		setSelectedImageProduct();
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
					htmlFor='fileInputProduct'
					className={`${
						selectedImageProduct && 'hidden'
					} inline-block input cursor-pointer w-auto p-2 transition-all duration-300 text-tertiary/50 border-tertiary/50 hover:text-accent hover:border-accent`}>
					<BiSolidImageAdd className='text-4xl' />
				</label>
				<input
					type='file'
					accept='image/jpeg, image/png, image/gif'
					id='fileInputProduct'
					className='hidden'
					onChange={(eventProduct) => {imageProductChange(eventProduct);}}
				/>
				{/* show image */}
				{selectedImageProduct && (
					<div className='relative flex items-center justify-center'>
						<Image
							src={URL.createObjectURL(selectedImageProduct)}
							width={100}
							height={100}
							alt='Product picture'
							className='rounded-full drop-shadow-lg shadow-lg w-[100px] h-[100px]'
						/>
						<button
							className='absolute -bottom-2'
							onClick={removeSelectedImageProduct}>
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
							id="foto_nome"
							name='name'
							value={formData.name}
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
								id="price_id"
								value={`${formData.price}`}
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
							id="amount_id"
							value={formData.amount}
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
