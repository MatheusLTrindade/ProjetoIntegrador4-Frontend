import React from 'react';
import Product from "@/components/Product";

export const metadata = {
  title: 'Troca Fácil | Store',
  description: 'Store',
};

export default function Store(params) {
  const produtos = [
    {photo: '/DevMurilo.jpeg', name: 'Produto 1', price: 'R$ 50.00' },
    { name: 'Produto 2', price: 'R$ 30.00' },
    { name: 'Produto 3', price: 'R$ 40.00' },
    { name: 'Produto 4', price: 'R$ 25.00' },
    { name: 'Produto 5', price: 'R$ 25.00' },
    { name: 'Produto 6', price: 'R$ 25.00' },


  ];

  return (
    <main className="h-[100vh] bg-secondary/20">
      <div className="w-full h-full">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <h1 className="h1">Store</h1>
          <div className="flex flex-wrap gap-4 overflow-y-auto">
            {produtos.map((produto, index) => (
              <Product key={index} photo={produto.photo} name={produto.name} price={produto.price} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
