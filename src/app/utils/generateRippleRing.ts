import { EqPointsType } from '@/app/store/GlobalStore';
import * as L from 'leaflet';
import { isCurrentMapExist } from '@/app/types/TypePredicate';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { MAP_CENTER, MAP_FLY_TO_SPEED, MAP_ZOOM } from '@/app/containers/MapContainer';
import { MutableRefObject } from 'react';
import axios from 'axios';
import { SERVER_HOST } from '@/app/common/constants/environment.const';

const customIcon = L.divIcon({
  className: 'custom-icon',
  html: '<div class="pulse"></div>',
  iconSize: [30, 30],
}); // 마커 아이콘 설정

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

  if (!markersRef.current[id]) {
    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(currentMap);
    markersRef.current[id] = marker;

    marker.on('click', () => {
      // currentMap.setView(marker.getLatLng(), 15); // 새로운 줌 레벨
      if (currentMap.getZoom() > 10) {
        return;
      }
      currentMap.flyTo(marker.getLatLng(), 10, MAP_FLY_TO_SPEED); // 새로운 줌 레벨
    });

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
          <span class="btn btn-success btn-circle d-flex align-items-center">
            <i class="mdi mdi-comment-multiple-outline text-white fs-4"></i>
          </span>
          <span class="tw-font-sans">Pre-Data Processed </span>
        </div>
        <div class="tw-flex tw-justify-start tw-items-center tw-gap-2">
          <span class="btn btn-success btn-circle d-flex align-items-center">
            <i class="mdi mdi-comment-multiple-outline text-white fs-4"></i>
          </span>
          <span class="tw-font-sans">Post-Data Processed</span>
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
