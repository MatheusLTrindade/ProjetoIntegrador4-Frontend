// react icon
import {BiLinkExternal} from 'react-icons/bi'

// next
import Link from 'next/link';

export default function Card({ title, content, hiperlink}) {
	return (
		<div className='flex flex-col items-center justify-center p-6 bg-white/50 hover:bg-black/20 border-2 border-black/10 transition-all duration-300 h-full w-full rounded-lg shadow-lg drop-shadow-lg'>
			<p className='p text-left w-full font-normal'>{title}</p>
			<h3 className='text-2xl'>{content}</h3>
			<Link href={hiperlink} className='mt-4 hover:scale-125 transition-all duration-300 hover:text-accent'>
        <BiLinkExternal />
      </Link>
		</div>
	);
}
