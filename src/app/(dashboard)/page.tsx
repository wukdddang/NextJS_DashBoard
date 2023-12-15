'use client';

import Breadcrumb from '@/app/components/organisms/Breadcrumb';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathName = usePathname();

  return (
    <>
      <Breadcrumb pathName={pathName} />
    </>
  );
}
