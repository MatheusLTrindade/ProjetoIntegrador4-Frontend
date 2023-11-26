
// icons
import { BsArrowRight, BsMouseFill } from 'react-icons/bs';
import { ImBin } from 'react-icons/im';
import { BiSolidImageAdd } from 'react-icons/bi';

// next
import Image from 'next/image';

// react
import { useState } from 'react';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// api
import authPhoto from '@/app/api/upload/userPhoto';
export default function PhotoForm() {
	// Image
	const [selectedImage, setSelectedImage] = useState();
	function imageChange(e) {
		if (e.target.files && e.target.files.length > 0) {
			setSelectedImage(e.target.files[0]);
			setFormData({ file: e.target.files[0] });
		}
	}
	function removeSelectedImage() {
		setSelectedImage();
	}
	const [formData, setFormData] = useState({
		file: '',
	});

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await authPhoto(formData);
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
			<div className='flex flex-col gap-2 w-full mx-auto max-xl:overflow-y-scroll max-xl:h-[250px] max-xl:bg-white/10 max-xl:p-2 max-xl:rounded-xl'></div>
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
				variants={fadeIn('right', 1.6)}
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
						Cadastrar
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
