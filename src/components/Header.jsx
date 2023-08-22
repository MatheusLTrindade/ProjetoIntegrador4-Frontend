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
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* logo */}
          <Link href={'/'} className='z-[10] xl:mt-8'>
            <Image src={'/logo.png'} width={150} height={48} alt='Logo Troca Fácil' priority={true}/>
          </Link>
          {/* socials */}
          {/* <Socials /> */}
        </div>
      </div>
		</header>
	);
};

export default Header;