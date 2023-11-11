'use client'

// framer motion
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Transition() {
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
	}
	return (
		<>
			<motion.div
				className='fixed top-0	bottom-0 right-full w-screen h-screen z-30 bg-blueDark'
				variants={transitionVariants}
				initial='initial'
				animate='animate'
				exit='exit'
				transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}
			>
				<div className='flex h-full w-full items-center justify-center'>
					<div className="flex bg-primary rounded-full w-[300px] h-[300px] shadow-xl drop-shadow-xl justify-center items-center">
						<Image src='/pointer.png' width={200} height={200} alt='logo' className='m-auto absolute'/>
						<Image src='/spin.png' width={200} height={200} alt='logo' className='m-auto absolute animate-spin-reverse'/>
					</div>
				</div>
			</motion.div>
			<motion.div
				className='fixed top-0	bottom-0 right-full w-screen h-screen z-20 bg-blueMedium'
				variants={transitionVariants}
				initial='initial'
				animate='animate'
				exit='exit'
				transition={{ delay: 0.3, duration: 0.4, ease: 'easeInOut' }}
			></motion.div>
			<motion.div
				className='fixed top-0	bottom-0 right-full w-screen h-screen z-10 bg-blueLight'
				variants={transitionVariants}
				initial='initial'
				animate='animate'
				exit='exit'
				transition={{ delay: 0.4, duration: 0.4, ease: 'easeInOut' }}
			></motion.div>
		</>
	);
};