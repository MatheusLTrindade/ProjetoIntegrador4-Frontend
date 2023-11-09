// components
import Card from '@/components/Card';
import CardLarge from '@/components/CardLarge';

export const metadata = {
	title: 'Troca Facil | Admin',
	description: 'Dashboard Admin',
};

export default function Admin(params) {
	return (
		<main className='h-[100vh] bg-secondary/20'>
			<div className='w-full h-full'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <h1 className='h1 nova-slim'>Dashboard Admin</h1>
          <div className='flex flex-col xl:flex-row items-center justify-center p-4 gap-6'>
            <Card
              title='Title Test'
              content='Content Test'
              hyperlink='./admin/crud'
            />
            <Card
              title='Title 2'
              content='Content 2'
              hyperlink='./admin/crud'
            />
            <Card
              title='Title 3'
              content='Content 3'
              hyperlink='./admin/crud'
            />
          </div>
          <div className='flex flex-col xl:flex-row items-center justify-center p-4 gap-6'>
            <CardLarge title={'GRAFIC'}
            content={'GRAFIC'} hyperlink={'none'} />
            <CardLarge title={'LIST'}
            content={'LIST'} hyperlink={'none'} />
          </div>
        </div>
      </div>
		</main>
	);
}
