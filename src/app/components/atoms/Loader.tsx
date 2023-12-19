export const IconStyleClassName =
  'tw-flex tw-h-[50px] tw-w-[50px] tw-items-center tw-justify-center tw-p-2 tw-text-white tw-opacity-100';

export default function Loader() {
  return (
    <svg
      className={`${IconStyleClassName} tw-animate-spin`}
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
  );
}
