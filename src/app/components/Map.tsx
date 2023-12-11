import { CSSProperties } from "react";
import * as L from "leaflet";

const mapStyles: CSSProperties = {
  overflow: "hidden",
  width: "100%",
  height: "100%",
};

type Props = {
  currentMap: L.Map | null;
  // isSideBarOpened: boolean;
  // isROIEnabled: boolean;
  // setROIEnable: (currentROI: boolean) => void;
};

export default function Map({ currentMap }: Props) {
  <>
    <div
      id="map"
      style={{
        ...mapStyles,
        position: "relative",
        transition: "0.3s ease",
        top: 0,
        zIndex: 0,
      }}
    />
  </>;
}
