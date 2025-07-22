import Link from 'next/link';
import logo from '../../assets/svg/logo.svg';
import Image from 'next/image';

const Logo = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link onClick={onClick} className='text-2xl font-bold' href='/'>
      <Image width={100} height={100} src={logo} alt='Logo' />
    </Link>
  );
};

export default Logo;
