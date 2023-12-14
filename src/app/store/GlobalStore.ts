import * as L from 'leaflet';
import { create } from 'zustand';

export type EqPointsType = {
  mag: string;
  location: string;
  lat: number;
  lng: number;
  createdAt: string;
  isRead: boolean;
  imageStatus: 'Collecting' | 'Stopped' | 'Collecting1' | 'Paused' | 'Waiting';
};

interface GlobalState {
  currentMap: L.Map | null;
  setCurrentMap: (currentMap: L.Map | null) => void;
  currentEqPoints: EqPointsType[];
  setCurrentEqPoints: (points: EqPointsType[]) => void;
  readEqPoints: (EqPointsType & { is_read: boolean })[];
  setReadEqPoints: (points: (EqPointsType & { is_read: boolean })[]) => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  currentMap: null,
  setCurrentMap: (currentMap) => set(() => ({ currentMap })),
  currentEqPoints: [],
  setCurrentEqPoints: (points) => set(() => ({ currentEqPoints: points })),
  readEqPoints: [],
  setReadEqPoints: (points) => set(() => ({ readEqPoints: points })),
}));

export default useGlobalStore;
