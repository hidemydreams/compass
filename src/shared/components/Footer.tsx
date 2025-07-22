import Link from 'next/link';
import Routes from '@/constants/routes';
import Logo from '@/shared/components/Logo';

const Footer = () => {
  return (
    <footer className='border-t bg-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='flex justify-between'>
          <div className='max-w-[400px]'>
            <Logo />
            <p className='text-sm text-gray-600 mb-4 mt-4 max-w-[200px] sm:max-w-lg'>
              We help people to be discovered online with a beautiful website in
              minutes with our powerful tools and templates.
            </p>
          </div>
          <div>
            <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <FooterLink href={Routes.PORTFOLIO}>Examples</FooterLink>
              <FooterLink href={Routes.PRICING}>Pricing</FooterLink>
            </ul>
          </div>
          {/*<div>*/}
          {/*  <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900'>*/}
          {/*    Newsletter*/}
          {/*  </h3>*/}
          {/*  <p className='text-sm text-gray-600 mb-4'>*/}
          {/*    Subscribe to our newsletter to get the latest updates and offers.*/}
          {/*  </p>*/}
          {/*  <div className='flex gap-2'>*/}
          {/*    <Input*/}
          {/*      type='email'*/}
          {/*      placeholder='Email address'*/}
          {/*      className='h-10'*/}
          {/*    />*/}
          {/*    <Button*/}
          {/*      size='sm'*/}
          {/*      className='h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500'*/}
          {/*    >*/}
          {/*      Subscribe*/}
          {/*    </Button>*/}
          {/*  </div>*/}
          {/*  <p className='mt-2 text-xs text-gray-500'>*/}
          {/*    By subscribing, you agree to our Privacy Policy and consent to*/}
          {/*    receive updates.*/}
          {/*  </p>*/}
          {/*</div>*/}
        </div>
        <div className='mt-12 border-t pt-6 text-center text-sm text-gray-500'>
          <p>© {new Date().getFullYear()} linkoo. All rights reserved.</p>
          <div className='mt-2 flex justify-center gap-4'>
            <Link href={Routes.TERMS} className='hover:underline'>
              Terms of Service
            </Link>
            <Link href={Routes.PRIVACY_POLICY} className='hover:underline'>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// function SocialIcon({ icon }: { icon: string }) {
//   return (
//     <Link href={`https://${icon}.com`} aria-label={`${icon} link`}>
//       <div className='flex h-8 w-8 items-center justify-center rounded-full border bg-white hover:bg-gray-50'>
//         <span className='sr-only'>{icon}</span>
//         <svg
//           className='h-4 w-4 text-gray-600'
//           viewBox='0 0 24 24'
//           fill='none'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//           <path
//             d='M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z'
//             stroke='currentColor'
//             strokeWidth='2'
//             strokeLinecap='round'
//             strokeLinejoin='round'
//           />
//         </svg>
//       </div>
//     </Link>
//   );
// }

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href} className='text-sm text-gray-600 hover:text-gray-900'>
        {children}
      </Link>
    </li>
  );
}

export default Footer;
