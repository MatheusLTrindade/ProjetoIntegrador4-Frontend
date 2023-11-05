// react icon
import {BiLinkExternal} from 'react-icons/bi'

// next
import Link from 'next/link';

export default function Card({ title, content, hyperlink}) {
	const targetlink = hyperlink === 'none' ? null : hyperlink ?? '#';
	return (
		<div className='flex flex-col items-center justify-center p-6 bg-white/50 hover:bg-white/40 border-2 border-black/10 transition-all duration-300 h-full w-full rounded-lg shadow-lg drop-shadow-lg hover:shadow-tertiary'>
			<p className='p text-left w-full font-normal -mt-4 mb-4 -ml-3 mr-3'>{title}</p>
			<h3 className='text-4xl font-bold text-blueLight'>{content}</h3>
			{targetlink && (
				<Link href={hyperlink} className='mt-4 hover:scale-125 transition-all duration-300 hover:text-accent'>
					<BiLinkExternal />
				</Link>
			)}
		</div>
	);
}
