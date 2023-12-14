import { EqPointsType } from '@/app/store/GlobalStore';
import * as L from 'leaflet';
import { isCurrentMapExist } from '@/app/types/TypePredicate';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const customIcon = L.divIcon({
  className: 'custom-icon',
  html: '<div class="pulse"></div>',
  iconSize: [100, 100],
}); // 마커 아이콘 설정

// 펄스 크기를 조정하는 함수
function adjustPulseSize(zoomLevel: number) {
  // 여기서는 예시로, 줌 레벨에 따라 다른 클래스를 적용하는 방식을 사용합니다.
  // 실제로는 클래스 이름과 스타일을 프로젝트에 맞게 조정해야 합니다.
  let pulseElements = document.querySelectorAll('.pulse');

  console.log(zoomLevel);
  pulseElements.forEach((pulse) => {
    // 줌 레벨이 10보다 크면 'large-pulse' 클래스를 추가하거나 제거합니다.
    pulse.classList.toggle('large-pulse', zoomLevel > 10);
  });
}

export default function RippleRing({
  currentMap,
  mag,
  location,
  lat,
  lng,
  createdAt,
  router,
}: { currentMap: L.Map; router: AppRouterInstance } & EqPointsType) {
  if (!isCurrentMapExist(currentMap)) {
    return;
  }

  const marker = L.marker([lat, lng], { icon: customIcon }).addTo(currentMap);

  marker.on('click', () => {
    currentMap.setView(marker.getLatLng(), 15); // 새로운 줌 레벨
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
      <div>
        <span class="btn btn-success btn-circle d-flex align-items-center">
          <i class="mdi mdi-comment-multiple-outline text-white fs-4"></i>
        </span>
        <span>3</span>
      </div>

      <button id="popup-view-detail-button" class="btn btn-primary tw-ml-auto tw-flex tw-justify-center tw-items-center">
        <i class="mdi mdi-magnify tw-w-[20px] tw-h-[20px]"></i>
        <span class="tw-text-center">view in detail</span>
      </button>
    `
  );

  marker.on('popupopen', () => {
    const detailButton = document.querySelector('#popup-view-detail-button');
    if (detailButton) {
      detailButton.addEventListener('click', () => {
        // console.log('Popup button clicked');
        router.push('/detail');
      });
    }
  });

  currentMap.on('zoomend', () => {
    const zoomLevel = currentMap.getZoom();
    adjustPulseSize(zoomLevel);
  });

  return null;
}
