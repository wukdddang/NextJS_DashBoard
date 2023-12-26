import { UsgsStatusEnum } from '@/app/enum/usgs.status.enum';
import { EqPointsType } from '@/app/store/GlobalStore';

export type ProcessStatusType = {
  status: string;
  phase: string;
  dataAcquisition: string;
  processingAlgorithms: string;
};

export const getProcessStatus = (currentEqPoint: EqPointsType) => {
  const { status } = currentEqPoint;

  // TODO: Data Acquisition, Processing Algorithms, Processing Time 등의 정보를 추가할 수 있는지?

  const processStatus: ProcessStatusType[] = [];
  switch (status) {
    case UsgsStatusEnum.COLLECTING1:
      processStatus.push(
        {
          status: 'Stopped',
          phase: 'Waiting Pre-Earthquake Image...',
          dataAcquisition: '-',
          processingAlgorithms: '-',
        },
        {
          status: 'Stopped',
          phase: 'Waiting Post-Earthquake Image...',
          dataAcquisition: '-',
          processingAlgorithms: '-',
        },
        {
          status: 'Stopped',
          phase: 'Waiting Image Processing...',
          dataAcquisition: '-',
          processingAlgorithms: '-',
        }
      );
      return processStatus;

    case UsgsStatusEnum.WAITING:
      processStatus.push(
        {
          status: 'Downloaded',
          phase: 'Pre-Earthquake Image Downloaded!',
          dataAcquisition: '2024-01-01T01:23:19',
          processingAlgorithms: '-',
        },
        {
          status: 'Downloaded',
          phase: 'Post-Earthquake Image Downloaded!',
          dataAcquisition: '2024-01-01T01:23:19',
          processingAlgorithms: '-',
        },
        {
          status: 'Waiting',
          phase: 'Waiting Image Processing...',
          dataAcquisition: '-',
          processingAlgorithms: '-',
        }
      );
      return processStatus;

    case UsgsStatusEnum.ACTIVE:
      processStatus.push(
        {
          status: 'Downloaded',
          phase: 'Pre-Earthquake Image Downloaded!',
          dataAcquisition: '2024-01-01T01:23:19',
          processingAlgorithms: '-',
        },
        {
          status: 'Downloaded',
          phase: 'Post-Earthquake Image Downloaded!',
          dataAcquisition: '2024-01-01T01:23:19',
          processingAlgorithms: '-',
        },
        {
          status: 'Active',
          phase: 'Image Processing is Running...',
          dataAcquisition: '-',
          processingAlgorithms: '-',
        }
      );
      return processStatus;

    case UsgsStatusEnum.COMPLETE:
      processStatus.push(
        {
          status: 'Downloaded',
          phase: 'Pre-Earthquake Image Downloaded!',
          dataAcquisition: '2024-01-01T01:23:19',
          processingAlgorithms: '-',
        },
        {
          status: 'Downloaded',
          phase: 'Post-Earthquake Image Downloaded!',
          dataAcquisition: '2024-01-01T01:23:19',
          processingAlgorithms: '-',
        },
        {
          status: 'COMPLETE',
          phase: 'Image Processing is Completed!',
          dataAcquisition: '2024-01-01T01:23:19',
          processingAlgorithms: 'D-InSAR',
        }
      );

    case UsgsStatusEnum.STOPPED:
      processStatus.push(
        {
          status: 'Stopped',
          phase: 'Waiting Pre-Earthquake Image...',
          dataAcquisition: '-',
          processingAlgorithms: '-',
        },
        {
          status: 'Stopped',
          phase: 'Waiting Post-Earthquake Image...',
          dataAcquisition: '-',
          processingAlgorithms: '-',
        },
        {
          status: 'Stopped',
          phase: 'Waiting Image Processing...',
          dataAcquisition: '2024-01-01T01:23:19',
          processingAlgorithms: 'D-InSAR',
        }
      );
    // 다른 상태들을 위한 기본 값 또는 처리를 추가할 수 있습니다.
    default:
      return processStatus;
  }
};
