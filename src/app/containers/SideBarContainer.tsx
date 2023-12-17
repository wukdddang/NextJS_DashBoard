'use client';

import React from 'react';
import SideBar from '@/app/components/organisms/SideBar';
import { FaEarthAsia, FaRegFolder } from 'react-icons/fa6';
import { SlReload } from 'react-icons/sl';

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
  return <SideBar sideBarItems={sideBarItems} />;
};

export default SideBarContainer;
