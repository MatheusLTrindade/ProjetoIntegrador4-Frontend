'use client'

// next
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

// api/data
import getDatabase from '@/api/data/getDatabase';

// components
import DataTable from "@/components/DataTable";

export const metadata = {
	title: 'Troca Facil | Admin - CRUD',
	description: 'CRUD Admin',
};

export default function CRUD() {
  const searchParams= useSearchParams()
  const pathname = usePathname()
  const data = getDatabase(searchParams)
  return (
    <main className='h-[100vh] bg-secondary/20'>
      <div className='text-center flex flex-col justify-center items-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* text & form */}
        <div className=' flex flex-col w-full justify-center resize sm:-mt-20'>
          <h2 className='h2 text-center max-sm:text-[30px] nova-slim'>CRUD<span className="text-accent">.</span></h2>
          <div className='flex justify-center items-center'>
            <Link 
              className={`mx-1 p-2 border rounded-xl flex justify-center items-center ${pathname == 'admin/crud?display=users' && bg-accent}`} // TODO: verificar bg quando activate 
              href={pathname+'?display=users'}>Usuários</Link>
            <Link 
              className='mx-1 p-2 border rounded-xl flex justify-center items-center'
              href={pathname+'?display=products'}>Produtos</Link>
          </div>
          {data != null && (
            <DataTable data={data} />
          )}
        </div>
      </div>
    </main>
  )
};
