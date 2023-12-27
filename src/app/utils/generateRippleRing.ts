import { EqPointsType } from '@/app/store/GlobalStore';
import * as L from 'leaflet';
import { isCurrentMapExist } from '@/app/types/TypePredicate';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  MAP_CENTER,
  MAP_FLY_TO_SPEED,
  MAP_FLY_TO_ZOOM,
  MAP_ZOOM,
} from '@/app/containers/MapContainer';
import { MutableRefObject } from 'react';
import axios from 'axios';
import { SERVER_HOST } from '@/app/common/constants/environment.const';
import { getProcessStatus } from './getProcessStatus';

const customIcon = L.divIcon({
  className: 'custom-icon',
  html: '<div class="pulse"></div>',
  iconSize: [30, 30],
}); // 마커 아이콘 설정

const getIconClass = (simpleStatus: any) => {
  switch (simpleStatus) {
    case 'success':
      return 'mdi-check'; // 성공 아이콘 클래스
    case 'waiting':
      return 'mdi-exclamation'; // 대기 아이콘 클래스
    default:
      return 'mdi-information'; // 기본 아이콘 클래스
  }
};

const getButtonClass = (simpleStatus: any) => {
  switch (simpleStatus) {
    case 'success':
      return 'tw-bg-SUCCESS'; // 성공 상태에 대한 버튼 클래스
    case 'waiting':
      return 'tw-bg-ICON'; // 대기 상태에 대한 버튼 클래스
    default:
      return 'btn-default'; // 기본 버튼 클래스
  }
};

// 지진 펄스 크기를 조정하는 함수
function adjustPulseSize(zoomLevel: number) {
  let pulseElements = document.querySelectorAll('.pulse');

  // console.log(zoomLevel);
  pulseElements.forEach((pulse) => {
    pulse.classList.toggle('large-pulse', zoomLevel > 10);
  });
}

export default function RippleRing({
  id,
  currentMap,
  markersRef,
  mag,
  status,
  location,
  lat,
  lng,
  createdAt,
  router,
}: {
  currentMap: L.Map;
  markersRef: MutableRefObject<{ [key: string]: L.Marker<any> }>;
  router: AppRouterInstance;
} & EqPointsType) {
  if (!isCurrentMapExist(currentMap)) {
    return;
  }

  // console.log(id);
  // console.log(markersRef.current[id]);
  // console.log(getProcessStatus(status));
  const processStatus = getProcessStatus(status);
  // console.log(getEnumKeyByEnumValue(UsgsStatusEnum, processStatus[0]?.phase));

  // console.log(getSimpleProcessStatus(status));

  if (!markersRef.current[id]) {
    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(currentMap);
    markersRef.current[id] = marker;

    marker.on('click', () => {
      // currentMap.setView(marker.getLatLng(), 15); // 새로운 줌 레벨
      if (currentMap.getZoom() > MAP_FLY_TO_ZOOM) {
        return;
      }
      currentMap.flyTo(marker.getLatLng(), MAP_FLY_TO_ZOOM, MAP_FLY_TO_SPEED); // 새로운 줌 레벨
    });

    const iconClass0 = getIconClass(processStatus[0]?.simpleStatus);
    const buttonClass0 = getButtonClass(processStatus[0]?.simpleStatus);
    const iconClass1 = getIconClass(processStatus[1]?.simpleStatus);
    const buttonClass1 = getButtonClass(processStatus[1]?.simpleStatus);

    marker.bindPopup(
      // TODO: Next.js에서 템플릿 문법 적용하는지? (ex. mustache, thymeleaf)
      `
      <div class="tw-flex tw-flex-col tw-font-sans tw-p-2 tw-justify-center tw-items-center">
        <div class="tw-flex tw-gap-2">
          <span class="tw-text-[38px]">${mag}</span>
          <div class="tw-flex tw-flex-col">
            <span class="tw-text-base">${location}</span>
            <span class="tw-text-xs tw-opacity-50">${createdAt}</span>
          </div>
        </div>
      </div>
      <div class="tw-flex tw-flex-col tw-gap-2 tw-mb-4">
        <div class="tw-flex tw-justify-start tw-items-center tw-gap-2">
          
          <span class="btn ${buttonClass0} btn-circle d-flex align-items-center">
            <i class="mdi ${iconClass0} text-white fs-4"></i>
          </span>
          <span class="tw-font-sans">${processStatus[0]?.phase}</span>
        </div>
        <div class="tw-flex tw-justify-start tw-items-center tw-gap-2">
          
          <span class="btn ${buttonClass1} btn-circle d-flex align-items-center">
            <i class="mdi ${iconClass1} text-white fs-4"></i>
          </span>
          <span class="tw-font-sans">${processStatus[1]?.phase}</span>
        </div>
      </div>

      <div class="tw-flex tw-gap-2">
        <button id="popup-reset-button" class="btn btn-primary tw-ml-auto tw-flex tw-justify-center tw-items-center">
          <i class="mdi mdi-reload tw-w-[20px] tw-h-[20px]"></i> 
          <span>Reset View</span>
        </button>
        <button id="popup-view-detail-button" class="btn btn-primary tw-ml-auto tw-flex tw-justify-center tw-items-center">
          <i class="mdi mdi-magnify tw-w-[20px] tw-h-[20px]"></i>
          <span class="tw-text-center">view in detail</span>
        </button>
      </div>
    `
    );
    marker.on('popupopen', async (e) => {
      // await axios
      //   .put(`${SERVER_HOST}/usgs/read/${id}`)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      const markerElement = e.popup.getElement();
      const detailButton = markerElement?.querySelector('#popup-view-detail-button');
      const resetButton = markerElement?.querySelector('#popup-reset-button');
      if (detailButton) {
        detailButton.addEventListener('click', async () => {
          await axios
            .put(`${SERVER_HOST}/usgs/read/${id}`)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          router.replace(
            `/?location=${location}&createdAt=${createdAt}&lat=${lat}&lng=${lng}&mag=${mag}`,
            {
              scroll: false,
            }
          );
        });
      }
      if (resetButton) {
        resetButton.addEventListener('click', () => {
          currentMap.closePopup();
          // currentMap.setView(MAP_CENTER, MAP_ZOOM);
          currentMap.flyTo(MAP_CENTER, MAP_ZOOM, MAP_FLY_TO_SPEED);
        });
      }
    });

    currentMap.on('zoomend', () => {
      const zoomLevel = currentMap.getZoom();
      adjustPulseSize(zoomLevel);
    });
  }
  return null;
}
