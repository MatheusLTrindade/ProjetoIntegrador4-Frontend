'use client'

import React, { useState, useMemo } from 'react';
import data from '@/app/data/data.json';

import { TbArrowBigRight, TbArrowBigLeft, TbDatabaseEdit, TbDatabaseMinus } from 'react-icons/tb'

const itemsPerPage = window.matchMedia('not all and (min-width: 640px)').matches ? 3 : 5

export default function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  function handlePageChange(page) {
    setCurrentPage(page);
  };
  const visiblePageNumbers = []
  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      visiblePageNumbers.push(i);
    }
  } else {
    if (currentPage <= 2) {
      visiblePageNumbers.push(1, 2, 3);
    } else if (currentPage >= totalPages - 1) {
      visiblePageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
    } else {
      visiblePageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
    }
  }

  return (
    <div className="container mx-auto mt-8">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded text-black/40 placeholder:font-normal font-semibold"
      />
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className='bg-blueLight uppercase text-sm'>
            <tr>
              <th className="border p-2 sticky left-0 z-[1] bg-blueLight">ID</th>
              <th className="border p-2">Username</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">CPF</th>
              <th className="border p-2">Birthday</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Password</th>
              <th className="border p-2">Zip</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">District</th>
              <th className="border p-2">Complement</th>
              <th className="border p-2">Number</th>
              <th className="border p-2"></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? '' : 'bg-accent/10'}>
                <td className={`border p-2 sticky left-0 z-[1] ${index % 2 === 0 ? 'bg-[#C3C6CA]' : 'bg-[#AFB7BF]'}`}>{item.id}</td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.category}</td>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2 text-center">
                  <TbDatabaseEdit className='text-cyan-500 cursor-pointer'/>
                  <TbDatabaseMinus className='text-red-600 cursor-pointer'/>  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex">
        {currentPage > 1 && <button className='mx-1 w-10 h-10 border rounded-xl flex justify-center items-center' onClick={() => handlePageChange(currentPage - 1)}><TbArrowBigLeft/></button>}
        {visiblePageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`mx-1 w-10 h-10 border rounded-xl ${
              currentPage === pageNumber ? 'bg-accent' : ''
            }`}
          >
            {pageNumber}
          </button>
        ))}
        {currentPage < totalPages && <button className='mx-1 w-10 h-10 border rounded-xl flex justify-center items-center' onClick={() => handlePageChange(currentPage + 1)}><TbArrowBigRight className='m-0 p-0'/></button>}
      </div>
    </div>
  )
}

