'use client';

import { FaEarthAsia, FaRegFolder } from 'react-icons/fa6';
import { SlReload } from 'react-icons/sl';
// import SideBarItemContainer from '@/app/containers/SideBarItemContainer';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const sideBarItems = [
  {
    name: 'Dashboard',
    href: '/',
    icon: FaEarthAsia,
  },
  {
    name: 'History',
    href: '/history',
    icon: FaRegFolder,
  },
  {
    name: 'Refresh',
    href: '/refresh',
    icon: SlReload,
  },
];

export default function SideBar() {
  return (
    <nav
      className="bg-white h-100 position-fixed no-scrollbar tw-z-1 tw-left-0 tw-w-[250px] tw-overflow-y-scroll tw-border"
      style={{
        transition: '0.3s ease',
      }}
    >
      <div className="bg-white h-100 position-fixed no-scrollbar tw-z-1 tw-left-0 tw-w-[250px] tw-overflow-y-scroll tw-border">
        {sideBarItems.map((sideBarItem) => {
          const pathname = usePathname();
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
        {/* <SideBarItemContainer text="Dashboard" icon={<FaEarthAsia size={20} role="Dashboard" />} />
        <SideBarItemContainer text="History" icon={<FaRegFolder size={20} role="History" />} />
        <SideBarItemContainer text="Refresh" icon={<SlReload size={20} role="Refresh" />} /> */}
      </div>
    </nav>
  );
}
