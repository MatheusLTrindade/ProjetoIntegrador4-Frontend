export const metadata = {
	title: 'Troca Facil | Perfil',
	description: 'Perfil',
};

export default function Profile({ params }) {
	return (
		<main className='h-[100vh]'>
			<div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
				<div className='flex-1 flex flex-col justify-center resize'>
					<h1 className='h1'>Olá, {params.username}</h1>
				</div>
			</div>
		</main>
	);
}
