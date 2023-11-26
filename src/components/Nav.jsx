'use client'

// icons
import { HiHome, HiUser, HiPencilSquare, HiOutlineInformationCircle } from 'react-icons/hi2';
import { BiSolidDashboard, BiSolidData } from 'react-icons/bi'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { GiExitDoor } from 'react-icons/gi'

// next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// api/auth
import authLogout from '@/api/auth/authLogout';

// nav data
import navData from '@/data/navData.json';

export default function Nav(params) {
	const pathname = usePathname();

	function renderIcon(iconName) {
		const icons = {
			HiUser,
			HiOutlineInformationCircle,
			BiSolidDashboard,
			BiSolidData,
			GiExitDoor,
			SiHomeassistantcommunitystore
		}
		const IconComponent = icons[iconName];
		return IconComponent && <IconComponent />;
	}

	const navArray = pathname.startsWith('/admin') ? navData.admin : (pathname.startsWith('/user') ? navData.user : navData.comumn);

	return (
		<nav 
			className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-10 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'
		>
			<div 
				className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-14 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full shadow-lg drop-shadow-lg'
			>
				{navArray.map((link, index) => {
					return (
						<Link
							name={link.name}
							className={
                `${link.path === pathname && 'text-blueExtraLight'} relative flex 
                items-center group hover:text-blueExtraLight transition-all duration-300`
              }
							onClick={() => {if (link.name === 'logout') {authLogout()}}}
							href={link.path === '/user/username' ? `/user/${sessionStorage.getItem('username')}` : link.path}
							key={index}
            >
							{/* tooltip */}
							<div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
								<div className='bg-white relative flex text-secondary items-center p-[6px] rounded-[3px]'>
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
							<div className='text-2xl cursor-pointer' name={link.name}>{renderIcon(link.icon)}</div>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
