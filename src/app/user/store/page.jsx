'use client'
// react
import { useState } from 'react';

// components
import Modal from '@/components/Modal';
import ProductForm from '@/components/ProductForm';
import FilterForm from '@/components/FilterForm';
import TradeForm from '@/components/TradeForm';
import Product from "@/components/Product";

// icons
import { MdAddBox, MdFilterAlt  } from "react-icons/md";

export const metadata = {
  title: 'Troca Fácil | Loja',
  description: 'Loja',
  OpenGraph: {
    title: 'Troca Fácil | Loja',
    description: 'Loja', 
  }
}

export default function Store(params) {
  const [modalProductView, setModalProductView] = useState(false);
  const [modalFilterView, setModalFilterView] = useState(false);
  const [modalTradeView, setModalTradeView] = useState(false);
	function handleModalProductChange() {
		setModalProductView(true);
	}
  function handleModalProductClose() {
    setModalProductView(false);
  }
	function handleModalFilterChange() {
    setModalFilterView(true);
	}
  function handleModalFilterClose() {
    setModalFilterView(false);
  }
	function handleModalTradeChange() {
    setModalTradeView(true);
	}
  function handleModalTradeClose() {
    setModalTradeView(false);
  }

  const produtos = [
    { photo: '/DevMurilo.jpeg', name: 'Produto 1', price: 'R$ 50.00', photoSeller: '/DevMatheus.jpeg', seller: '@Product' },
    { name: 'Produto 2', price: 'R$ 30.00' },
    { name: 'Produto 3', price: 'R$ 40.00' },
    { name: 'Produto 4', price: 'R$ 25.00' },
    { photo: '/DevMurilo.jpeg', name: 'Produto 1', price: 'R$ 50.00', photoSeller: '/DevMatheus.jpeg', seller: '@profile' },
    { photo: '/DevMurilo.jpeg', name: 'Produto 1', price: 'R$ 50.00', photoSeller: '/DevMatheus.jpeg', seller: '@profile' },
    { photo: '/DevMurilo.jpeg', name: 'Produto 1', price: 'R$ 50.00', photoSeller: '/DevMatheus.jpeg', seller: '@profile' },
    { photo: '/DevMurilo.jpeg', name: 'Produto 1', price: 'R$ 50.00', photoSeller: '/DevMatheus.jpeg', seller: '@profile' },
  ];

  return (
    <div className="h-full bg-secondary/20 text-center relative">
			<Modal visible={modalProductView} title={'Cadastrar produto'} component={ProductForm} onClose={handleModalProductClose}/>
			<Modal visible={modalFilterView} title={'Filtro'} component={FilterForm} onClose={handleModalFilterClose}/>
      <Modal visible={modalTradeView} title={'Criar proposta'} component={TradeForm} onClose={handleModalTradeClose}/>
      <div className="py-32">
        <div className="container mx-auto h-full flex flex-col justify-center">
          <h2 className="h2 mb-8 xl:mb-0 max-sm:text-[30px] nova-slim">Store<span className="text-accent">.</span></h2>
          <div className='flex justify-center items-center gap-2'>
            <div className='p-1 bg-blueExtraLight hover:bg-blueLight rounded-md'>
              <MdAddBox className='cursor-pointer text-white' onClick={handleModalProductChange}/>
            </div>
            <div className='p-1 bg-blueExtraLight hover:bg-blueLight rounded-md'>
              <MdFilterAlt className='cursor-pointer text-white' onClick={handleModalFilterChange}/>
            </div>
          </div>
          <div className="flex sm:flex-col justify-center pt-4 h-full w-full mx-auto">
            <div className="h-[330px] flex sm:flex-wrap gap-4 sm:justify-center overflow-x-scroll sm:overflow-x-hidden sm:overflow-y-auto">
              {produtos.map((produto, index) => (
                <Product key={index} photo={produto.photo} name={produto.name} price={produto.price} photoSeller={produto.photoSeller} seller={produto.seller} setting={false} click={handleModalTradeChange}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
