'use client'
// next
import { usePathname, useRouter } from 'next/navigation';

// react
import { useState, useEffect } from 'react';

// components
import Modal from '@/components/Modal';
import ProductForm from '@/components/ProductForm';
import FilterForm from '@/components/FilterForm';
import TradeForm from '@/components/TradeForm';
import Product from "@/components/Product";

// api
import getProducts from '@/api/get/getProducts';

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

  const [products, setProducts] = useState([]);

  async function getFeed() {
		try {
			// Faz a requisição usando a função getProducts
			const productsFeed = await getProducts();
      const productListTemp = [];

			productsFeed.forEach((e) => {
				productListTemp.push(e);
			});

			setProducts(productListTemp);
			console.log(productsFeed);
		} catch (error) {
			throw error;
		}
	}

  const pathname = usePathname()

  // Verificar sessionStorage a cada 2 segundos
  useEffect(() => {
    // Verificar se pathname começa com '/'
    if (pathname && pathname.endsWith('/user/store')) {
      getFeed()
    }
  }, [])

  const [modalProductView, setModalProductView] = useState(false);
	function handleModalProductChange() {
    setModalProductView(true);
	}
  function handleModalProductClose() {
    setModalProductView(false);
  }
  const [modalFilterView, setModalFilterView] = useState(false);
	function handleModalFilterChange() {
    setModalFilterView(true);
	}
  function handleModalFilterClose() {
    setModalFilterView(false);
  }
  const [modalTradeView, setModalTradeView] = useState(false);
  const [productSelected, setProductSelected] = useState()
	function handleModalTradeChange(product) {
    setProductSelected(product)
    setModalTradeView(true);
	}
  function handleModalTradeClose() {
    setModalTradeView(false);
  }

  return (
    <div className="h-full bg-secondary/20 text-center relative">
			<Modal visible={modalProductView} title={'Cadastrar produto'} component={() => <ProductForm onClose={handleModalProductClose} />} onClose={handleModalProductClose}/>
			<Modal visible={modalFilterView} title={'Filtro'} component={FilterForm} onClose={handleModalFilterClose}/>
      <Modal visible={modalTradeView} title={'Criar proposta'} component={() => <TradeForm product={productSelected} onClose={handleModalTradeClose} />} onClose={handleModalTradeClose}/>
      <div className="py-32">
        <div className="container mx-auto h-full flex flex-col justify-center">
          <h2 className="h2 mb-8 xl:mb-0 max-sm:text-[30px] nova-slim">Loja<span className="text-accent">.</span></h2>
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
              {products.map((product, index) => (
                <Product 
                  key={index} 
                  photo={product.pathPhotoProduct == '' ? '/ProductNoImage.png' : product.pathPhotoProduct} 
                  name={product.name} 
                  price={product.price} 
                  amount={product.amount}
                  curCondition={product.curCondition}
                  photoSeller={product.pathPhotoProductOwner == '' ? '/PersonNoImage.png' : product.pathPhotoProductOwner} 
                  seller={product.username} 
                  setting={false} 
                  click={() => {handleModalTradeChange(product)}}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
