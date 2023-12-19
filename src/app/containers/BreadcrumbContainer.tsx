'use client';

import Breadcrumb from '@/app/components/organisms/Breadcrumb';
import { usePathname } from 'next/navigation';
import useGlobalStore from '@/app/store/GlobalStore';
import CurrentProcessInfo from '@/app/components/organisms/CurrentProcessInfo';
import MainWrapper from '@/app/components/organisms/MainWrapper';

export default function BreadcrumbContainer() {
  const pathname = usePathname();
  const processStatus = useGlobalStore((state) => state.processStatus);

  return (
    <MainWrapper>
      <div className="page-wrapper">
        <Breadcrumb pathname={pathname}>
          <CurrentProcessInfo
            processStatus={processStatus}
            startTime={new Date('2023-12-12T05:24:34')}
          />
        </Breadcrumb>
      </div>
    </MainWrapper>
  );
}
