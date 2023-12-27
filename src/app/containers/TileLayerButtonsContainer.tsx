import TileLayerButtons from '@/app/components/molecules/TileLayerButtons';
import { KIND_OF_MAP_TILES } from '@/app/common/constants/MapTiles';
import useGlobalStore from '@/app/store/GlobalStore';

type Props = {
  layers: KIND_OF_MAP_TILES[];
};

const TileLayerButtonsContainer = ({ layers }: Props) => {
  const setCurrentTileLayer = useGlobalStore((state) => state.setCurrentTileLayer);

  return <TileLayerButtons setCurrentTileLayer={setCurrentTileLayer} layers={layers} />;
};

export default TileLayerButtonsContainer;
