'use client';

// import Link from 'next/link';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideBar({
  sideBarItems,
}: {
  sideBarItems: {
    name: string;
    href: string;
    icon: any;
  }[];
}) {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <nav
      className="bg-white h-100 position-fixed no-scrollbar tw-z-1 tw-left-0 tw-w-[250px] tw-overflow-y-scroll tw-border"
      style={{
        transition: '0.3s ease',
      }}
    >
      <div className="bg-white h-100 position-fixed no-scrollbar tw-z-1 tw-left-0 tw-w-[250px] tw-overflow-y-scroll tw-border">
        {sideBarItems.map((sideBarItem) => {
          const LinkIcon = sideBarItem.icon;

          return (
            // TODO: 리팩토링할 때, Link 컴포넌트를 사용하도록 수정
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
    </nav>
  );
}
