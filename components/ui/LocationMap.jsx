"use client";
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function LocationMap({
  center,
  label,
  initialZoom = 10.5,
  flyZoom = 12.2,
  pitch = 45,
  bearing = -20,
  className = "relative aspect-[4/3] w-full overflow-hidden border border-white/10",
}) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center,
      zoom: initialZoom,
      pitch,
      bearing,
    });

    map.current.addControl(new maplibregl.NavigationControl({ visualizePitch: true }));

    const el = document.createElement("div");
    el.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;">
        <div style="
          width:16px;height:16px;
          background:white;
          border-radius:999px;
          box-shadow:0 0 25px rgba(255,255,255,0.8);
        "></div>
        <div style="
          margin-top:6px;
          font-size:10px;
          color:white;
          letter-spacing:1px;
          text-transform:uppercase;
          opacity:0.8;
        ">
          ${label}
        </div>
      </div>
    `;

    new maplibregl.Marker(el).setLngLat(center).addTo(map.current);

    const timer = setTimeout(() => {
      map.current?.flyTo({
        center,
        zoom: flyZoom,
        speed: 1.2,
        curve: 1.4,
        essential: true,
      });
    }, 700);

    return () => {
      clearTimeout(timer);
      map.current?.remove();
    };
  }, [center, initialZoom, flyZoom, pitch, bearing, label]);

  return <div ref={mapContainer} className={className} />;
}