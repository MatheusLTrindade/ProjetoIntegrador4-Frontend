import './globals.css';
import { Sora } from 'next/font/google';

// components
import Header from '@/components/Header';
import Nav from '@/components/Nav';

const sora = Sora({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
	title: 'Projeto Integrador 4',
	description: 'Projeto Integrador 4º Semestre - SENAC SP - 2023',
};

export default function RootLayout({ children, slots }) {
	return (
		<html lang='pt-br'>
			<body
				className={`page bg-site text-white bg-cover bg-no-repeat relative ${sora.className}`}>
				<Header />
				<Nav />
				{children}
			</body>
		</html>
	);
}
