import TileLayerButtons from '@/app/components/organisms/TileLayerButtons';
import { KIND_OF_MAP_TILES } from '@/app/constants/MapTiles';
import useGlobalStore from '@/app/store/GlobalStore';

type Props = {
  layers: KIND_OF_MAP_TILES[];
};

const TileLayerButtonsContainer = ({ layers }: Props) => {
  const setCurrentTileLayer = useGlobalStore((state) => state.setCurrentTileLayer);

  // const tileLayerLog = () => {
  //   console.log('tile changed');
  // };

  return (
    <TileLayerButtons
      setCurrentTileLayer={setCurrentTileLayer}
      layers={layers}
      // track={tileLayerLog}
    />
  );
};

export default TileLayerButtonsContainer;
