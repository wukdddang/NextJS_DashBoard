'use client';

import getElapsedTime from '@/app/utils/getProcessingTime';
import { useEffect, useState } from 'react';

export default function CurrentProcessInfo({ startTime }: { startTime: Date }) {
  const [currentTime, setCurrentTime] = useState<Date>();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="tw-hover:bg-indigo-400 tw-inline-flex tw-w-[450px] tw-items-center tw-gap-4 tw-rounded-md tw-bg-INFO tw-bg-opacity-10 tw-px-4 tw-py-2 tw-font-semibold tw-leading-5 tw-text-white tw-shadow tw-transition tw-duration-150 tw-ease-in-out">
      <div className="tw-rounded-full tw-bg-INFO">
        <svg
          className="tw-flex tw-h-[50px] tw-w-[50px] tw-animate-spin tw-items-center tw-justify-center tw-p-2 tw-text-white tw-opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="tw-opacity-25"
            cx="10"
            cy="10"
            r="0"
            stroke="currentColor"
            strokeWidth="1"
          ></circle>
          <path
            fill="currentColor"
            strokeWidth="0.5" // Reduced stroke width
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      <div>
        <span className="tw-text-[18px] tw-tracking-[-1px] tw-text-TEXT">
          Images are currently being processed!
        </span>
        <div className="tw-text-[14px] tw-font-light tw-tracking-[-1px] tw-text-TEXT tw-opacity-50">
          <span className="tw-flex">Daejeon, Korea ({startTime.toISOString()})</span>
          <span className="tw-flex">
            Processing Time: &nbsp;
            <span>{currentTime ? getElapsedTime(startTime, currentTime) : 'calculating...'}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
