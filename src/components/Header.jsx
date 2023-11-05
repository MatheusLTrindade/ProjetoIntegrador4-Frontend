// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
// import Socials from '../components/Socials';

const Header = () => {
	return (
		<header className='absolute w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
			<div className='container mx-auto'>
        <div className='flex justify-star items-center gap-y-6 py-8 max-sm:justify-center'>
          {/* logo */}
          <Link href={'/'} className='flex justify-center items-center gap-x-6 z-[10] xl:mt-8'>
            <div className="flex justify-center items-center">
              <Image src='/pointer.png' width={48} height={48} alt='logo' className='m-auto absolute'/>
              <Image src='/spin.png' width={48} height={48} alt='logo' className='m-auto absolute animate-spin-reverse'/>
            </div>
            <Image src={'/logo_text.png'} width={92} height={48} alt='Logo Troca Fácil' priority={true}/>
          </Link>
        </div>
      </div>
		</header>
	);
};

export default Header;