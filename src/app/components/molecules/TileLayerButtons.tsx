import { KIND_OF_MAP_TILES } from '@/app/common/constants/MapTiles';
import Image from 'next/image';

type Props = {
  setCurrentTileLayer: (layer: KIND_OF_MAP_TILES) => void;
  layers: KIND_OF_MAP_TILES[];
};

export default function TileLayerButtons({ setCurrentTileLayer, layers }: Props) {
  return (
    <div className="tw-absolute tw-bottom-[5%] tw-right-[3%] tw-z-10 tw-flex tw-flex-col tw-gap-[10px]">
      {layers.map((layer) => {
        return (
          <Image
            key={layer}
            className="tw-cursor-pointer tw-rounded-[4px] tw-bg-white tw-p-[4px] hover:tw-scale-150"
            src={`/assets/images/${layer}.png`}
            alt={layer}
            width={60}
            height={60}
            onClick={() => {
              setCurrentTileLayer(layer);
            }}
            role={layer}
            style={{
              transition: '0.3s ease',
            }}
          />
        );
      })}
    </div>
  );
}
