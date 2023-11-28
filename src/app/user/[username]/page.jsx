'use client';

// icons
import { MdSettings, MdNotifications } from 'react-icons/md';

// next
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// react
import { useState, useEffect } from 'react';

// components
import Modal from '@/components/Modal';
import ProfileForm from '@/components/ProfileForm';
import ProductUpdateForm from '@/components/ProductUpdateForm';
import TradeForm from '@/components/TradeForm';
import Product from '@/components/Product';

// api
import getProductsPersonal from '@/api/get/getProductsPersonal';
import getAccountPersonal from '@/api/get/getAccountPersonal';

export const metadata = {
	title: 'Troca Fácil | Perfil',
	description: 'Perfil',
	OpenGraph: {
		title: 'Troca Fácil | Perfil',
		description: 'Perfil',
	},
};

export default function Profile({ params }) {
	const [products, setProducts] = useState([]);
	async function getProducts(username) {
		try {
			// Faz a requisição usando a função getProducts
			const productsPersonal = await getProductsPersonal(username);
			const productListTemp = [];
			productsPersonal.forEach((e) => {productListTemp.push(e)});
			setProducts(productListTemp);
		} catch (errorProduct) {
			throw errorProduct
		}
	}
	
	const [account, setAccount] = useState([]);
	async function getAccount(username) {
		try {
			// Faz a requisição usando a função getAccount
			const accountPersonal = await getAccountPersonal(username);
			setAccount(accountPersonal);
		} catch (errorAccount) {
			throw errorAccount
		}
	}

	const pathname = usePathname();
	// Verificar alteração de pathname
	useEffect(() => {
		if (params.username) {
			getAccount(params.username);
			getProducts(params.username);
		}
	}, [params.username]);

	const [modalPersonalView, setModalPersonalView] = useState(false);
	function handleModalPersonalChange() {
		setModalPersonalView(true);
	}
	function handleModalPersonalClose() {
		setModalPersonalView(false);
	}
	const [modalProductView, setModalProductView] = useState(false);
	const [productChange, setProductChange] = useState([]);
	function handleModalProductChange(product) {
		setProductChange(product);
		console.log(productChange);
		setModalProductView(true);
	}
	function handleModalProductClose() {
		setModalProductView(false);
	}
	const [modalTradeView, setModalTradeView] = useState(false);
  const [productSelected, setProductSelected] = useState()
	function handleModalTradeChange(produto) {
    setProductSelected(produto)
    setModalTradeView(true);
	}
  function handleModalTradeClose() {
    setModalTradeView(false);
  }

	return (
		<div className='h-full bg-secondary/20 text-center relative'>
			<Modal visible={modalPersonalView}	title={'Dados pessoais'} component={() => <ProfileForm onClose={handleModalPersonalClose} />} onClose={handleModalPersonalClose}/>
			<Modal visible={modalProductView} title={'Alterar Produto'} component={() => <ProductUpdateForm product={productChange} onClose={handleModalProductClose} />} onClose={handleModalProductClose}/>
			<Modal visible={modalTradeView} title={'Criar proposta'} component={() => <TradeForm product={productSelected} onClose={handleModalTradeClose} />} onClose={handleModalTradeClose}/>
			<div className='container mx-auto h-full flex flex-col justify-center sm:pt-20'>
				<div className='flex flex-col sm:flex-row justify-center items-center relative mb-0 sm:mb-4'>
					<div className='hidden sm:flex flex-1 justify-center before:h-[2px] xl:before:bg-white/50 xl:before:absolute xl:before:left-0 xl:before:w-full relative xl:pl-20 max-sm:-mt-6'></div>
					<div className='flex w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]'>
						<div className='flex justify-center items-center p-1 rounded-full bg-white/50 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]'>
							<Image width={190} height={190}	src={account.photoPath !== 'no image' ? account.photoPath : '/PersonNoImage.png'} alt='Profile Picture' className='rounded-full w-[140px] h-[140px] sm:w-[190px] sm:h-[190px] object-cover' />
						</div>
						{pathname.endsWith(typeof window !== 'undefined' ? `/user/${sessionStorage.getItem('username')}` : null) ? 
							<div className='absolute ml-32 sm:ml-44 flex justify-center items-center gap-2 z-10'>
								<MdSettings
									className='text-blueExtraLight cursor-pointer hover:text-blueLight sm:text-xl'
									onClick={handleModalPersonalChange}
								/>
								<Link
									href={`/user/${params.username}/notifications`}
									className='text-blueExtraLight cursor-pointer hover:text-blueLight sm:text-xl'>
									<MdNotifications />
								</Link>
							</div>
						: ''}
					</div>
					<h1 className='h1 sm:absolute sm:mb-20 sm:left-0 nova-slim'>
						<span className='text-accent'>@</span>
						{params.username}
					</h1>
				</div>
				<div className='flex justify-center pt-2 h-60 w-full mx-auto'>
					<div className='flex gap-4 overflow-x-scroll'>
						{products.map((product, index) => (
							<Product
								key={index}
								id={product.id}
								photo={product.photoPath == 'no image'	? '/ProductNoImage.png' : product.photoPath}
								name={product.name}
								price={product.price}
								amount={product.amount}
								curCondition={product.curCondition}
								setting={true}
								admin={pathname.endsWith(typeof window !== 'undefined' ? `/user/${sessionStorage.getItem('username')}` : null) ? true : false}
								click={() => {pathname.endsWith(typeof window !== 'undefined' ? `/user/${sessionStorage.getItem('username')}` : null) ? handleModalProductChange(product) : handleModalTradeChange(product)}}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
