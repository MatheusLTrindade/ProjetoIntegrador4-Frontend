'use client';

// components
import RegisterForm from '@/components/RegisterForm';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

export const metadata = {
	title: 'Troca Fácil | Cadastro',
	description: 'Cadastro',
	OpenGraph: {
		title: 'Troca Fácil | Cadastro',
		description: 'Cadastro',
	},
};

export default function Register(params) {
	return (
		<main className='h-[100vh] bg-secondary/20'>
			<div className='container mx-auto py-32 text-center flex items-center justify-center h-full'>
				{/* text & form */}
				<div className=' flex flex-col w-full max-w-[700px] justify-center resize'>
					{/* text */}
					<motion.h2
						variants={fadeIn('up', 0.2)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='h2 text-center mb-12 max-sm:text-[30px] nova-slim'>
						Vamos <span className='text-accent'>cadastrar.</span>
					</motion.h2>
					{/* form */}
					<div className='bg-white/50 rounded-lg container p-6 shadow-inner shadow-black/50 drop-shadow-xl max-sm:max-h-[350px]'>
						<RegisterForm />
					</div>
				</div>
			</div>
		</main>
	);
}
