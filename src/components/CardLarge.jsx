// react icon
import {BiLinkExternal} from 'react-icons/bi'

// next
import Link from 'next/link';

export default function CardLarge({ title, content, hyperlink}) {
	const targetlink = hyperlink === 'none' ? null : hyperlink ?? '#';
	return (
		<div className='flex flex-col items-center justify-center p-6 bg-white hover:bg-black/20 border-2 border-black/10 transition-all duration-300 h-[20rem] w-full rounded-lg shadow-lg drop-shadow-lg'>
			<p className='p text-left text-black/20 w-full font-normal absolute top-4 left-4'>{title}</p>
			<h3 className='text-4xl font-bold text-blueLight'>{content}</h3>
			{targetlink && (
				<Link href={hyperlink} className='mt-4 hover:scale-125 transition-all duration-300 hover:text-accent'>
					<BiLinkExternal />
				</Link>
			)}
		</div>
	);
}
