import React from 'react';
import Link from 'next/link';

interface ButtonLinkProps {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'small';
  isLoading?: boolean;
  href?: string;
  className?: string;
  text: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  variant = 'primary',
  size = 'default',
  className = '',
  href = '',
  text,
  ...props
}) => {
  const baseStyles =
    'rounded-lg transition-all duration-200 focus:outline-none cursor-pointer h-[48px] flex items-center justify-center';
  const sizeStyles =
    size === 'small' ? 'px-3 py-1 text-sm' : 'px-5 py-2 text-base';
  const variantStyles =
    variant === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-400 disabled:bg-gray-500'
      : 'bg-gray-200 text-black hover:bg-gray-300 disabled:bg-gray-400';

  return (
    <Link
      href={href}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
