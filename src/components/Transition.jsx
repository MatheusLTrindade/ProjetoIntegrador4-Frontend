'use client'

// framer motion
import { motion } from 'framer-motion';
import Image from 'next/image';

// variants
const transitionVariants = {
	initial: {
		x: '100%',
		width: '100%',
	},
	animate: {
		x: '0%',
		width: '0%',
	},
	exit: {
		x: ['0%', '100%'],
		width: ['0%', '100%'],
	},
};

export default function Transition() {
	return (
		<>
			<motion.div
				className='fixed top-0	bottom-0 right-full w-screen h-screen z-30 bg-orangeDark'
				variants={transitionVariants}
				initial='initial'
				animate='animate'
				exit='exit'
				transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
			>
				<div className='flex h-full w-full items-center justify-center'>
					<div className="flex bg-secondary/80 rounded-full w-[300px] h-[300px] shadow-xl drop-shadow-xl">
						<Image src='/logo.png' width={200} height={200} alt='logo' className='m-auto'/>
					</div>
				</div>
			</motion.div>
			<motion.div
				className='fixed top-0	bottom-0 right-full w-screen h-screen z-20 bg-orangeMedium'
				variants={transitionVariants}
				initial='initial'
				animate='animate'
				exit='exit'
				transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
			></motion.div>
			<motion.div
				className='fixed top-0	bottom-0 right-full w-screen h-screen z-10 bg-orangeLight'
				variants={transitionVariants}
				initial='initial'
				animate='animate'
				exit='exit'
				transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
			></motion.div>
		</>
	);
};