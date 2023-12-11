"use client";

import SideBar from "@/app/components/SideBar";
import Header from "@/app/components/Header";
// import Map from "./components/Map";
import * as L from "leaflet";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // 지도를 초기화합니다.
    if (!window.myMap) {
      const map = L.map("map").setView([51.505, -0.09], 13);

      // Add the tile layer to the map.
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      // Store the map in a global variable to prevent re-initialization.
      window.myMap = map;
    }
  }, []);

  return (
    <div>
      <Header />
      <SideBar />
      <div id="map" style={{ height: "500px" }}></div>
      HomePage!
    </div>
  );
}
