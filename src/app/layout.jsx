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
import requireAuth from '@/api/auth/requiredAuth';

// hook
import useToast from '@/hooks/useToast';

// fonts google
import { Sora } from 'next/font/google';
const sora = Sora({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
	title: 'Troca Fácil',
	description: 'Projeto Integrador 4º Semestre - SENAC SP - 2023',
	OpenGraph: {
    title: 'Troca Fácil',
    description: 'Projeto Integrador 4º Semestre - SENAC SP - 2023', 
  }
};

export default function RootLayout({ children }) {
	const { showToast, ToastContainer } = useToast()
	const pathname = usePathname()
	const router = useRouter()
	// Verificar o token JWT ao carregar o componente
	useEffect(() => {
		requireAuth(pathname, router)
	}, [pathname, router])
  // Verificar sessionStorage a cada 2 segundos
  useEffect(() => {
    // Verificar se pathname começa com '/'
    if (pathname && pathname.startsWith('/')) {
      const intervalId = setInterval(() => {
        const storedType = sessionStorage.getItem('type')
        const storedMessage = sessionStorage.getItem('message')
        if (storedType && storedMessage) {
          showToast(storedType, storedMessage)
          // Limpar os dados do toast do sessionStorage
          sessionStorage.removeItem('type')
          sessionStorage.removeItem('message')
        }
      }, 2000)
      // Limpar o intervalo ao desmontar o componente
      return () => clearInterval(intervalId)
    }
  }, [pathname, showToast])

	return (
		<html lang='pt-br'>
			<body
				className={`page text-white relative ${sora.className}`}>
				<Header />
				<Nav />
				<ToastContainer />
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
