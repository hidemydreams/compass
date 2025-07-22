import Image from 'next/image';
import React from 'react';
import avatarPlaceholder from '../../assets/placeholder.svg';

const Avatar = ({
  avatarUrl,
  classNames,
}: {
  avatarUrl: string | undefined;
  classNames?: string;
}) => {
  let src;

  if (!avatarUrl) {
    src = null;
  } else {
    src = avatarUrl.includes('blob')
      ? avatarUrl
      : `${process.env.NEXT_PUBLIC_AWS_BUCKET_URL}/${avatarUrl}`;
  }

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={`rounded-full w-16 h-16 ${classNames}`}
        alt='Avatar'
        src={src}
      />
    );
  } else {
    return (
      <div className={`w-16 h-16 ${classNames}`}>
        <Image
          objectFit='cover'
          className={`${classNames}`}
          src={avatarPlaceholder}
          alt={'Avatar placeholder'}
        />
      </div>
    );
  }
};

export default Avatar;
