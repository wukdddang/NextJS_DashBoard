'use client';

import React from 'react';
import SideBar from '@/app/components/organisms/SideBar';
import { FaEarthAsia, FaRegFolder, FaShip } from 'react-icons/fa6';
import { SlMap, SlReload } from 'react-icons/sl';
import { BsBookmarks, BsBoundingBoxCircles } from 'react-icons/bs';
import { BiSolidAnalyse, BiObjectsHorizontalCenter, BiWater } from 'react-icons/bi';
import { WiEarthquake } from 'react-icons/wi';
import { IoColorFillOutline } from 'react-icons/io5';
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
  {
    name: 'BookMark',
    href: '#',
    icon: BsBookmarks,
    isDisabled: true,
  },
  {
    name: 'Range Search',
    href: '#',
    icon: BsBoundingBoxCircles,
    isDisabled: true,
  },
  {
    name: 'SAR',
    href: '#',
    icon: SlMap,
    isDisabled: true,
  },
  {
    name: 'InSAR',
    href: '#',
    icon: BiSolidAnalyse,
    isDisabled: true,
  },
  {
    name: 'Ship',
    href: '#',
    icon: FaShip,
    isDisabled: true,
  },
  {
    name: 'Bridge',
    href: '#',
    icon: BiObjectsHorizontalCenter,
    isDisabled: true,
  },
  {
    name: 'Water Detection',
    href: '#',
    icon: BiWater,
    isDisabled: true,
  },
  {
    name: 'Earthquake Detection',
    href: '#',
    icon: WiEarthquake,
    isDisabled: true,
  },
  {
    name: 'Oilspill Detection',
    href: '#',
    icon: IoColorFillOutline,
    isDisabled: true,
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
