import { UsgsStatusEnum } from '@/app/enum/usgs.status.enum';
// import { EqPointsType } from '@/app/store/GlobalStore';
import { FaCheck, FaExclamation } from 'react-icons/fa6';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import { AiOutlineStop } from 'react-icons/ai';
import Loader from '@/app/components/atoms/Loader';

import React from 'react';

export type ProcessStatusType = {
  status: JSX.Element;
  simpleStatus?: string;
  phase: string;
  dataAcquisition?: string;
  processingAlgorithms?: string | string[];
  processButton?: JSX.Element;
};

// export function getEnumKeyByEnumValue(myEnum: any, enumValue: string): string | null {
//   let keys = Object.keys(myEnum).filter((x) => myEnum[x] === enumValue);
//   return keys.length > 0 ? keys[0] : null;
// }

export const getProcessStatus = (status: UsgsStatusEnum) => {
  // const { status } = currentEqPoint;

  const successIcon = () => {
    return (
      <div className="tw-flex tw-h-[35px] tw-w-[35px] tw-items-center tw-justify-center tw-rounded-full tw-bg-SUCCESS tw-text-white">
        <FaCheck />
      </div>
    );
  };

  const waitingIcon = (isWaiting: boolean) => {
    const defaultStyles = `tw-flex tw-h-[35px] tw-w-[35px] tw-items-center tw-justify-center tw-rounded-full tw-text-white`;
    const iconStyleClassName = isWaiting ? 'tw-bg-WARN' : 'tw-bg-ICON';

    return (
      <div className={`${defaultStyles} ${iconStyleClassName}`}>
        <FaExclamation />
      </div>
    );
  };

  // TODO: Launch Process 버튼을 눌렀을 때, API 요청 보내기.
  const startProcessButton = () => {
    return (
      <button
        className="tw-flex tw-h-[41px] tw-w-[150px] tw-items-center tw-justify-center tw-gap-[5px] tw-rounded-[10px] tw-bg-INFO tw-text-[16px] tw-font-[400] tw-tracking-[-1px] tw-text-white tw-shadow-lg tw-transition tw-duration-150 hover:tw-scale-105 hover:tw-bg-opacity-90"
        onClick={() => {}}
      >
        <MdOutlineRocketLaunch size={20} />
        <span>Launch Process</span>
      </button>
    );
  };
  // TODO: Stop Process 버튼을 눌렀을 때, API 요청 보내기.
  const stopProcessButton = () => {
    return (
      <button
        className="tw-flex tw-h-[41px] tw-w-[150px] tw-items-center tw-justify-center tw-gap-[5px] tw-rounded-[10px] tw-bg-ERROR tw-text-[16px] tw-font-[400] tw-tracking-[-1px] tw-text-white tw-shadow-lg tw-transition tw-duration-150 hover:tw-scale-105 hover:tw-bg-opacity-90 focus:tw-outline-none"
        onClick={() => {}}
      >
        <AiOutlineStop size={20} />
        <span>Stop Process</span>
      </button>
    );
  };

  const dataAcquisitionText = (acquisitionDate: string) => {
    return `Acquisition Date: ${acquisitionDate}`;
  };

  const processingAlgorithmsText = (processingAlgorithms: string) => {
    return `Processing Algorithms: ${processingAlgorithms}`;
  };

  enum ProcessStatusEnum {
    'DOWNLOADED_PRE' = 'Pre-Earthquake Image Downloaded!',
    'DOWNLOADED_POST' = 'Post-Earthquake Image Downloaded!',
    'RUNNING_PROCESS' = 'Image Processing is Running...',
    'COMPLETED_PROCESS' = 'Image Processing is Completed!',
    'WAITING_PRE' = 'Waiting Pre-Earthquake Image...',
    'WAITING_POST' = 'Waiting Post-Earthquake Image...',
    'WAITING_PROCESS' = 'Waiting Image Processing...',
  }

  // TODO: Data Acquisition, Processing Algorithms 등의 정보를 추가할 수 있는지?
  const processStatus: ProcessStatusType[] = [];
  switch (status) {
    case UsgsStatusEnum.COLLECTING1:
      processStatus.push(
        {
          status: successIcon(),
          simpleStatus: 'success',
          phase: ProcessStatusEnum.DOWNLOADED_PRE,
          dataAcquisition: dataAcquisitionText('?'),
          // processingAlgorithms: '-',
        },
        {
          status: waitingIcon(false),
          simpleStatus: 'waiting',
          phase: ProcessStatusEnum.WAITING_POST,
          dataAcquisition: dataAcquisitionText('-'),
          // processingAlgorithms: '-',
        },
        {
          status: waitingIcon(false),
          simpleStatus: 'waiting',
          phase: ProcessStatusEnum.WAITING_PROCESS,
          dataAcquisition: dataAcquisitionText('-'),
          // processingAlgorithms: '-',
        }
      );
      return processStatus;

    case UsgsStatusEnum.WAITING:
      processStatus.push(
        {
          status: successIcon(),
          simpleStatus: 'success',
          phase: ProcessStatusEnum.DOWNLOADED_PRE,
          dataAcquisition: dataAcquisitionText('?'),
          // processingAlgorithms: '-',
        },
        {
          status: successIcon(),
          simpleStatus: 'success',
          phase: ProcessStatusEnum.DOWNLOADED_POST,
          dataAcquisition: dataAcquisitionText('?'),
          // processingAlgorithms: '-',
        },
        {
          status: waitingIcon(true),
          simpleStatus: 'waiting',
          phase: ProcessStatusEnum.WAITING_PROCESS,
          // dataAcquisition: dataAcquisitionText('-'),
          processingAlgorithms: processingAlgorithmsText('D-InSAR'),
          processButton: startProcessButton(),
        }
      );
      return processStatus;

    case UsgsStatusEnum.ACTIVE:
      processStatus.push(
        {
          status: successIcon(),
          simpleStatus: 'success',
          phase: ProcessStatusEnum.DOWNLOADED_PRE,
          dataAcquisition: dataAcquisitionText('?'),
          // processingAlgorithms: '-',
        },
        {
          status: successIcon(),
          simpleStatus: 'success',
          phase: ProcessStatusEnum.DOWNLOADED_POST,
          dataAcquisition: dataAcquisitionText('?'),
          // processingAlgorithms: '-',
        },
        {
          status: (
            <div className="tw-flex tw-h-[35px] tw-w-[35px] tw-items-center tw-justify-center tw-rounded-full tw-bg-INFO tw-text-white">
              <Loader />
            </div>
          ),
          simpleStatus: 'active',
          phase: ProcessStatusEnum.RUNNING_PROCESS,
          // dataAcquisition: dataAcquisitionText('-'),
          processingAlgorithms: processingAlgorithmsText('D-InSAR'),
          processButton: stopProcessButton(),
        }
      );
      return processStatus;

    case UsgsStatusEnum.COMPLETED:
      processStatus.push(
        {
          status: successIcon(),
          simpleStatus: 'success',
          phase: ProcessStatusEnum.DOWNLOADED_PRE,
          dataAcquisition: dataAcquisitionText('?'),
          // processingAlgorithms: '-',
        },
        {
          status: successIcon(),
          simpleStatus: 'success',
          phase: ProcessStatusEnum.DOWNLOADED_POST,
          dataAcquisition: dataAcquisitionText('?'),
          // processingAlgorithms: '-',
        },
        {
          status: successIcon(),
          simpleStatus: 'success',
          phase: ProcessStatusEnum.COMPLETED_PROCESS,
          // dataAcquisition: '?',
          processingAlgorithms: processingAlgorithmsText('D-InSAR'),
        }
      );

    case UsgsStatusEnum.STOPPED:
      processStatus.push(
        {
          status: waitingIcon(false),
          simpleStatus: 'waiting',
          phase: ProcessStatusEnum.WAITING_PRE,
          dataAcquisition: dataAcquisitionText('-'),
          // processingAlgorithms: '-',
        },
        {
          status: waitingIcon(false),
          simpleStatus: 'waiting',
          phase: ProcessStatusEnum.WAITING_POST,
          dataAcquisition: dataAcquisitionText('-'),
          // processingAlgorithms: '-',
        },
        {
          status: waitingIcon(false),
          simpleStatus: 'waiting',
          phase: ProcessStatusEnum.WAITING_PROCESS,
          // dataAcquisition: dataAcquisitionText('-'),
          processingAlgorithms: processingAlgorithmsText('-'),
        }
      );
    // 다른 상태들을 위한 기본 값 또는 처리를 추가할 수 있습니다.
    default:
      return processStatus;
  }
};
