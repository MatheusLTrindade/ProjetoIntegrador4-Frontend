// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// api/auth
import authLogout from '@/api/auth/authLogout';

const Header = () => {
	return (
		<header className='absolute w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
			<div className='container mx-auto'>
        <div className='flex justify-star items-center gap-y-6 py-8 max-sm:justify-center'>
          {/* logo */}
          <Link 
            href={'/'} 
            className='flex justify-center items-center gap-x-6 z-[10] xl:mt-8'
            onClick={() => {if (sessionStorage.getItem('jwtToken') !== null) {authLogout()}}}>
            <div className="flex justify-center items-center">
              <Image src='/pointer.png' width={48} height={48} alt='logo' className='w-[48px] h-[48px] m-auto absolute'/>
              <Image src='/spin.png' width={48} height={48} alt='logo' className='w-[48px] h-[48px] m-auto absolute animate-spin-reverse'/>
            </div>
            <Image src={'/logo_text.png'} width={92} height={48} alt='Logo Troca Fácil' priority={true} className='w-[92px] h-[48px]'/>
          </Link>
        </div>
      </div>
		</header>
	);
};

export default Header;