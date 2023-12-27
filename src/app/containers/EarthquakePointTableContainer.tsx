'use client';

import EarthquakePointTable from '@/app/components/organisms/EarthquakePointTable';
import { EqPointsType } from '@/app/store/GlobalStore';
import { getProcessStatus } from '@/app/utils/getProcessStatus';

export type EarthquakePointTableType =
  | 'status'
  | 'phase'
  | 'data_acquisition'
  | 'processing_algorithms';

type Props = {
  currentEqPoint: EqPointsType;
};

function EarthquakePointTableContainer({ currentEqPoint }: Props) {
  const processStatus = getProcessStatus(currentEqPoint.status);

  // console.log(processStatus, currentEqPoint);
  return <EarthquakePointTable processStatus={processStatus} currentEqPoint={currentEqPoint} />;
}

export default EarthquakePointTableContainer;
