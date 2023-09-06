import Card from '@/components/Card';

export const metadata = {
	title: 'Troca Facil | Admin',
	description: 'Dashboard Admin',
};

export default function Admin(params) {
	return (
		<main className='h-[100vh]'>
			<div className='w-full h-full'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <h1 className='h1'>Dashboard Admin</h1>
          <div className='flex flex-col xl:flex-row items-center justify-center p-4 gap-6'>
            <Card
              title='Title Test'
              content='Content Test'
              hiperlink='./admin/crud'
            />
            <Card
              title='Title 2'
              content='Content 2'
              hiperlink='./admin/crud'
            />
            <Card
              title='Title 3'
              content='Content 3'
              hiperlink='./admin/crud'
            />
          </div>
          <div className='flex flex-col xl:flex-row items-center justify-center p-4 gap-6'>
            <section className='flex flex-col w-full h-[20rem] bg-white'></section>
            <section className='flex flex-col w-full h-[20rem] bg-white'></section>
          </div>
        </div>
      </div>
		</main>
	);
}
