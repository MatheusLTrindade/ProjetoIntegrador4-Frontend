'use client';

// icons
import { MdSettings, MdNotifications } from 'react-icons/md';

// next
import Image from 'next/image';
import Link from 'next/link';

// react
import { useState } from 'react';

// components
import Modal from '@/components/Modal';
import ProfileForm from '@/components/ProfileForm';
import Product from '@/components/Product';

export const metadata = {
  title: 'Troca Fácil | Perfil',
  description: 'Perfil',
  OpenGraph: {
    title: 'Troca Fácil | Perfil',
    description: 'Perfil', 
  }
}

export default function Profile({ params }) {
	const [modalView, setModalView] = useState(false);
	function handleModalChange() {
		setModalView(true);
	}
	function handleModalClose() {
    setModalView(false);
  }
	const produtos = [
    { photo: '/DevMurilo.jpeg', name: 'Produto 1', price: 'R$ 50.00', photoSeller: '/DevMatheus.jpeg', seller: '@profile' },
    { name: 'Produto 2', price: 'R$ 30.00' },
    { name: 'Produto 3', price: 'R$ 40.00' },
    { name: 'Produto 4', price: 'R$ 25.00' },
    { photo: '/DevMurilo.jpeg', name: 'Produto 1', price: 'R$ 50.00', photoSeller: '/DevMatheus.jpeg', seller: '@profile' },
    { photo: '/DevMurilo.jpeg', name: 'Produto 1', price: 'R$ 50.00', photoSeller: '/DevMatheus.jpeg', seller: '@profile' },
    { photo: '/DevMurilo.jpeg', name: 'Produto 1', price: 'R$ 50.00', photoSeller: '/DevMatheus.jpeg', seller: '@profile' },
    { photo: '/DevMurilo.jpeg', name: 'Produto 1', price: 'R$ 50.00', photoSeller: '/DevMatheus.jpeg', seller: '@profile' },
  ];

	return (
		<div className='h-full bg-secondary/20 text-center relative'>
			<Modal visible={modalView} title={'Dados pessoais'} component={ProfileForm} onClose={handleModalClose}/>
			<div className='container mx-auto h-full flex flex-col justify-center sm:pt-20'>
				<div className='flex flex-col sm:flex-row justify-center items-center relative mb-0 sm:mb-4'>
					<div className='hidden sm:flex flex-1 justify-center before:h-[2px] xl:before:bg-white/50 xl:before:absolute xl:before:left-0 xl:before:w-full relative xl:pl-20 max-sm:-mt-6'></div>
					<div className='flex w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]'>
						<div className="flex justify-center items-center p-1 rounded-full bg-white/50 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
							<Image width={190} height={190} src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'} alt="Profile Picture" className="rounded-full w-[140px] h-[140px] sm:w-[190px] sm:h-[190px] object-cover"/>
						</div>
						<div className='absolute ml-32 sm:ml-44 flex justify-center items-center gap-2 z-10'>
							<MdSettings
								className='text-blueExtraLight cursor-pointer hover:text-blueLight sm:text-xl'
								onClick={handleModalChange}
							/>
							<Link href={`/user/${params.username}/notifications`} className='text-blueExtraLight cursor-pointer hover:text-blueLight sm:text-xl'><MdNotifications /></Link>
						</div>
					</div>
					<h1 className='h1 sm:absolute sm:mb-20 sm:left-0 nova-slim'>
						<span className='text-accent'>@</span>
						{params.username}
					</h1>
				</div>
				<div className="flex justify-center pt-2 h-60 w-full mx-auto">
					<div className="flex gap-4 overflow-x-scroll">
						{produtos.map((produto, index) => (
							<Product key={index} photo={produto.photo} name={produto.name} price={produto.price} setting={true} />
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
