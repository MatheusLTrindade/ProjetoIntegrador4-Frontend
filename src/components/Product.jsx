import Image from 'next/image';
import React from 'react';

export default function Product({ photo, name, price, photoSeller, seller }) {
  return (
    <div className="bg-primary-light p-4 rounded-md shadow-md">
      <Image width={200} height={200} src={photo} alt={name} className="w-full h-32 object-cover mb-4 rounded-t-md" />
      <h2 className="text-lg font-semibold text-primary-dark">{name}</h2>
      <p className="text-primary">{seller}</p>
      <div className="flex items-center justify-between">
        <p className="text-accent font-bold mb-2">{price}</p>
        <button className="bg-tertiary text-white px-4 py-2 rounded-full flex items-center">
          Adicionar ao Carrinho
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
