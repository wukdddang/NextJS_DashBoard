import { EqPointsType } from '@/app/store/GlobalStore';
import { ProcessStatusType } from '@/app/utils/getProcessStatus';

type Props = {
  processStatus: ProcessStatusType[];
  currentEqPoint: EqPointsType;
  isHistoryPage?: boolean;
};

export default function EarthquakePointTable({
  processStatus,
  currentEqPoint,
  isHistoryPage = false,
}: Props) {
  return (
    <>
      <div className="tw-flex tw-w-full tw-items-center tw-border-b-2 tw-pb-4">
        <h4 className="tw-mr-4 tw-text-[42px] tw-font-light tw-tracking-[-1px]">
          {currentEqPoint?.mag}
        </h4>
        <p className="tw-flex tw-flex-col">
          <span className="tw-text-[28px] tw-font-[300] tw-tracking-[-1px]">
            {currentEqPoint?.location}
          </span>
          <span className="tw-text-[14px] tw-tracking-[-1px] tw-opacity-50">
            {currentEqPoint?.createdAt}
          </span>
          {currentEqPoint && (
            <span className="tw-text-[14px] tw-tracking-[-1px] tw-opacity-50">
              latitude: {currentEqPoint?.lat}, longitude: {currentEqPoint?.lng}
            </span>
          )}
        </p>
      </div>
      <div className="tw-mt-[30px]">
        {processStatus.map((status, idx) => {
          return (
            <div key={idx} className="tw-mb-[24px] tw-flex tw-w-full tw-items-center tw-pl-4">
              {status?.status}
              <div className="tw-relative tw-ml-4 tw-flex tw-grow tw-justify-between">
                <p className="tw-flex tw-flex-col">
                  <span className="tw-text-[18px] tw-font-[700] tw-tracking-[-1px]">
                    {status?.phase}
                  </span>
                  <span className="tw-text-[12px] tw-font-[500] tw-tracking-[-1px] tw-opacity-50">
                    {status?.dataAcquisition} {status?.processingAlgorithms}
                  </span>
                </p>
                <p className="tw-absolute tw-right-4">
                  {status?.processButton && status.processButton}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
