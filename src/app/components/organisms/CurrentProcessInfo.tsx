'use client';

import getElapsedTime from '@/app/utils/getProcessingTime';
import { useEffect, useState } from 'react';
import StatusIcons from '@/app/components/atoms/StatusIcons';
import { currentProcessInfoText } from '@/app/common/constants/CurrentProcessInfoText';

export const processStatusObj = {
  Active: 'INFO',
  Completed: 'SUCCESS',
  Failed: 'ERROR',
};

type Props = {
  startTime: Date;
  processStatus: keyof typeof processStatusObj;
};

export default function CurrentProcessInfo({ startTime, processStatus }: Props) {
  const [currentTime, setCurrentTime] = useState<Date>();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const statusStyle = `tw-rounded-full tw-bg-${processStatusObj[processStatus]}`;

  return (
    <div
      className={`tw-inline-flex tw-h-[96px] tw-w-[450px] tw-items-center tw-gap-4 tw-rounded-md ${statusStyle} tw-bg-opacity-10 tw-px-4 tw-py-2 tw-font-semibold tw-leading-5 tw-text-white tw-shadow-lg tw-transition tw-duration-150 tw-ease-in-out`}
    >
      <div className={statusStyle}>
        <StatusIcons processStatus={processStatus} />
      </div>
      <div>
        <span className="tw-text-[18px] tw-tracking-[-1px] tw-text-TEXT">
          {currentProcessInfoText[processStatus]}
        </span>
        <div className="tw-text-[14px] tw-font-light tw-tracking-[-1px] tw-text-TEXT tw-opacity-50">
          <span className="tw-flex">Daejeon, Korea ({startTime.toISOString()})</span>
          {processStatus === 'Active' && (
            <span className="tw-flex">
              Processing Time: &nbsp;
              <span>{currentTime ? getElapsedTime(startTime, currentTime) : 'calculating...'}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
