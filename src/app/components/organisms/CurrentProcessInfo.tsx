export default function CurrentProcessInfo() {
  return (
    <div className="tw-inline-flex tw-gap-4 tw-items-center tw-px-4 tw-py-2 tw-font-semibold tw-leading-5 tw-shadow tw-rounded-md tw-text-white tw-bg-INFO tw-bg-opacity-10 tw-hover:bg-indigo-400 tw-transition tw-ease-in-out tw-duration-150 tw-w-[450px]">
      <div className="tw-bg-INFO tw-rounded-full">
        <svg
          className="tw-flex tw-justify-center tw-w-[50px] tw-h-[50px] tw-items-center tw-animate-spin tw-p-2 tw-text-white tw-opacity-100"
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
        <span className="tw-text-TEXT tw-text-[18px] tw-tracking-[-1px]">
          Images are currently being processed!
        </span>
        <div className="tw-text-[14px] tw-tracking-[-1px] tw-text-TEXT tw-opacity-50 tw-font-light">
          <span className="tw-flex">Daejeon, Korea (2023-12-04T05:24:34)</span>
          <span className="tw-flex">Processing Time: 6h 01m 42s</span>
        </div>
      </div>
    </div>
  );
}
