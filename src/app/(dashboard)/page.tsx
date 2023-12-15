'use client';

import Breadcrumb from '@/app/components/organisms/Breadcrumb';
import { usePathname } from 'next/navigation';
import TableHeader from '../components/organisms/TableHeader';

export default function Home() {
  const pathName = usePathname();

  return (
    <>
      <Breadcrumb pathName={pathName} />
      <TableHeader tableSpan={4} />
    </>
  );
}
