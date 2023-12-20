'use client';

import clsx from 'clsx';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import Logo from '../../../../public/assets/images/logo.png';
import Image from 'next/image';

export default function SideBar({
  sideBarItems,
  pathname,
  username,
  email,
}: {
  sideBarItems: {
    name: string;
    href: string;
    icon: any;
  }[];
  pathname: string;
  username: string;
  email: string;
}) {
  return (
    <nav
      className="bg-white h-100 position-fixed no-scrollbar tw-z-1 tw-left-0 tw-top-0 tw-flex tw-w-[260px] tw-flex-col tw-overflow-y-scroll tw-border tw-pb-4"
      style={{
        transition: '0.3s ease',
      }}
    >
      <div className="tw-mx-auto tw-flex tw-py-6">
        <Image src={Logo} alt="logo" width={200} height={200} />
      </div>
      <div className="bg-white no-scrollbar tw-z-1 tw-left-0 tw-flex tw-w-[260px] tw-flex-grow tw-flex-col tw-justify-between tw-overflow-y-scroll">
        <div>
          {sideBarItems.map((sideBarItem) => {
            const LinkIcon = sideBarItem.icon;

            return (
              <Link
                key={sideBarItem.name}
                href={sideBarItem.href}
                className={clsx(
                  'tw-hover:bg-sky-100 tw-hover:text-blue-600  tw-flex tw-h-[48px] tw-grow tw-items-center tw-justify-start tw-gap-2 tw-rounded-md tw-p-3 tw-text-sm tw-font-medium',
                  {
                    'tw-bg-sky-100 tw-text-blue-600':
                      pathname === sideBarItem.href && sideBarItem.href !== '/refresh',
                  }
                )}
              >
                <LinkIcon className="tw-w-6" />
                <p className="hidden md:block">{sideBarItem.name}</p>
              </Link>
            );
          })}
        </div>

        <div className="tw-flex tw-cursor-pointer tw-gap-4 tw-pl-4">
          <Image
            src="/assets/images/users/profile.png"
            alt="user"
            className="rounded-circle"
            width={31}
            height={31}
          />
          <div className="tw-flex tw-flex-col tw-gap-0 tw-text-[12px]">
            <span className="tw-h-4 tw-w-4">{username}</span>
            <span>{email}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
