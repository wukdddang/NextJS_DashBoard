'use client';

import React from 'react';
import SideBar from '@/app/components/organisms/SideBar';
import { FaEarthAsia, FaRegFolder } from 'react-icons/fa6';
import { SlReload } from 'react-icons/sl';
import { usePathname } from 'next/navigation';

const sideBarItems = [
  {
    name: 'Home',
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

const SideBarContainer = () => {
  const pathname = usePathname();
  const username = 'admin';
  const email = 'admin@admin.com';

  return (
    <SideBar sideBarItems={sideBarItems} pathname={pathname} username={username} email={email} />
  );
};

export default SideBarContainer;
