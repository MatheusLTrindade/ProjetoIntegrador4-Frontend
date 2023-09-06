'use client';

import './globals.css';
import { Sora } from 'next/font/google';

// components
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Transition from '@/components/Transition';

// frame motion
import { AnimatePresence, motion } from 'framer-motion';

// next
import { usePathname } from 'next/navigation';

const sora = Sora({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
	title: 'Projeto Integrador 4',
	description: 'Projeto Integrador 4º Semestre - SENAC SP - 2023',
};

export default function RootLayout({ children }) {
	const pathname = usePathname();

	return (
		<html lang='pt-br'>
			<body
				className={`page text-white relative ${sora.className}`}>
				<Header />
				<Nav />
				<AnimatePresence mode='wait'>
					{children}
					<motion.div
						key={pathname}
						className='h-full'>
						<Transition />
					</motion.div>
				</AnimatePresence>
			</body>
		</html>
	);
}
