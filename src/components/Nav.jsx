'use client'

// icons
import {
	HiHome,
	HiUser,
	HiPencilSquare,
	HiOutlineInformationCircle,
} from 'react-icons/hi2';

import {
	BiSolidDashboard,
	BiSolidData,
} from 'react-icons/bi'

import {
	SiHomeassistantcommunitystore
} from 'react-icons/si'
import {
	GiExitDoor
} from 'react-icons/gi'

// nav data
export const navData = {
	comumn: [
		{ name: 'home', path: '/', icon: <HiHome /> },
		{ name: 'login', path: '/login', icon: <HiUser /> },
		{ name: 'register', path: '/register', icon: <HiPencilSquare /> },
		{ name: 'info', path: '/info', icon: <HiOutlineInformationCircle /> }
	],
	admin: [
		{ name: 'dashboard', path: '/admin', icon: <BiSolidDashboard /> },
		{ name: 'crud', path: '/admin/crud', icon: <BiSolidData /> },
		{ name: 'logout', path: '/', icon: <GiExitDoor /> }
	],
	user: [
		{ name: 'dashboard', path: '/user', icon: <BiSolidDashboard /> },
		{ name: 'profile', path: '/user/profile', icon: <HiUser /> },
		{ name: 'store', path: 'user/store', icon: <SiHomeassistantcommunitystore /> },
		{ name: 'logout', path: '/', icon: <GiExitDoor /> }
	]
};

// next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav(params) {
	const pathname = usePathname();

	const navArray = pathname.startsWith('/admin') ? navData.admin : (pathname.startsWith('/user') ? navData.user : navData.comumn);

	return (
		<nav 
			className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'
		>
			<div 
				className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-14 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full shadow-lg drop-shadow-lg'
			>
				
				{navArray.map((link, index) => {
					return (
						<Link
							name={link.name}
							className={
                `${link.path === pathname && 'text-accent'} relative flex 
                items-center group hover:text-accent transition-all duration-300`
              }
							href={link.path}
							key={index}
            >
							{/* tooltip */}
							<div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
								<div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
									<div className='text-[12px] leading-none font-semibold capitalize'>
										{link.name}
									</div>
									{/* triangle */}
									<div
										className='
                      border-solid border-l-white border-l-8 border-y-transparent
                      border-y-[6px] border-r-0 absolute -right-2'
                  ></div>
								</div>
							</div>
							{/* icon */}
							<div className='text-2xl' name={link.name}>{link.icon}</div>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
