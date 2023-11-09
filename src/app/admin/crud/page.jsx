import DataTable from "@/components/DataTable";

export const metadata = {
	title: 'Troca Facil | Admin - CRUD',
	description: 'CRUD Admin',
};

export default function CRUD(params) {
  return (
    <main className='h-[100vh] bg-secondary/20'>
      <div className='text-center flex flex-col justify-center items-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* text & form */}
        <div className=' flex flex-col w-full justify-center resize sm:-mt-12'>
          <h2 className='h2 text-center max-sm:text-[30px] nova-slim'>CRUD<span className="text-accent">.</span></h2>
          <DataTable />
        </div>
      </div>
    </main>
  )
};
