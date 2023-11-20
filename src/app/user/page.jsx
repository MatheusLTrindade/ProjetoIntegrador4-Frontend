// components
import Card from "@/components/Card";
import CardLarge from "@/components/CardLarge";

export const metadata = {
  title: 'Troca Fácil | Usuário',
  description: 'Dashboard Usuário',
  OpenGraph: {
    title: 'Troca Fácil | Usuário',
    description: 'Dashboard Usuário', 
  }
}

export default function User(params) {
  return (
    <main className='h-[100vh] bg-secondary/20'>
			<div className='w-full h-full'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <h1 className='h1 nova-slim'>Dashboard<span className="text-accent">.</span></h1>
          <div className='flex flex-col xl:flex-row items-center justify-center p-4 gap-6'>
            <Card
              title='Produtos anunciados'
              content='20'
              hyperlink='none'
            />
            <Card
              title='Title 2'
              content='Content 2'
              hyperlink='none'
            />
            <Card
              title='Title 3'
              content='Content 3'
              hyperlink='none'
            />
            <Card
              title='Title 4'
              content='Content 4'
              hyperlink='none'
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
  )
};
