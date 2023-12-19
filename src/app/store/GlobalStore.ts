import * as L from 'leaflet';
import { create } from 'zustand';
import { KIND_OF_MAP_TILES } from '@/app/constants/MapTiles';
import { processStatusObj } from '@/app/components/organisms/CurrentProcessInfo';

export type EqPointsType = {
  mag: string;
  location: string;
  lat: number;
  lng: number;
  createdAt: string;
  isRead: boolean;
  imageStatus: 'Collecting' | 'Stopped' | 'Collecting1' | 'Paused' | 'Waiting';
};

interface ProcessState {
  processStatus: keyof typeof processStatusObj;
}

interface GlobalState extends ProcessState {
  currentMap: L.Map | null;
  setCurrentMap: (currentMap: L.Map | null) => void;
  currentEqPoints: EqPointsType[];
  setCurrentEqPoints: (points: EqPointsType[]) => void;
  readEqPoints: (EqPointsType & { is_read: boolean })[];
  setReadEqPoints: (points: (EqPointsType & { is_read: boolean })[]) => void;
  currentTileLayer: KIND_OF_MAP_TILES;
  setCurrentTileLayer: (currentTileLayer: KIND_OF_MAP_TILES) => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  currentMap: null,
  setCurrentMap: (currentMap) => set(() => ({ currentMap })),
  currentEqPoints: [],
  setCurrentEqPoints: (points) => set(() => ({ currentEqPoints: points })),
  readEqPoints: [],
  setReadEqPoints: (points) => set(() => ({ readEqPoints: points })),
  currentTileLayer: 'google_satellite',
  setCurrentTileLayer: (currentTileLayer) => set(() => ({ currentTileLayer: currentTileLayer })),
  processStatus: 'Failed',
}));

export default useGlobalStore;
