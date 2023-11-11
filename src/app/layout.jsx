'use client';

import './globals.css';

// components
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Transition from '@/components/Transition';

// frame motion
import { AnimatePresence, motion } from 'framer-motion';

// next
import { usePathname, useRouter } from 'next/navigation';

// react
import { useEffect } from 'react';

// api/auth
import requireAuth from './api/auth/requiredAuth';

// fonts google
import { Sora } from 'next/font/google';
const sora = Sora({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
	title: 'Projeto Integrador 4',
	description: 'Projeto Integrador 4º Semestre - SENAC SP - 2023',
};

export default function RootLayout({ children }) {
	const pathname = usePathname()
	const router = useRouter()
  // Verificar o token JWT ao carregar o componente
  useEffect(() => {
		requireAuth(pathname, router)
	}, [pathname, router])

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
