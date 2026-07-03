"use client";
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const regions = [
  "Sonoma & Napa Valley",
  "Peninsula & Woodside",
  "Newport & Laguna Coast",
  "Big Sur & Carmel",
];

const sarjapur = {
  coords: [77.7512, 12.8615], // Sarjapur Road approx center
};

export default function LocationSection() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: sarjapur.coords,
      zoom: 10.5,
      pitch: 45,
      bearing: -20,
    });

    map.current.addControl(new maplibregl.NavigationControl({ visualizePitch: true }));

    // 🔥 MAIN SARJAPUR MARKER (GLOW LABEL STYLE)
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
          Sarjapur
        </div>
      </div>
    `;

    new maplibregl.Marker(el).setLngLat(sarjapur.coords).addTo(map.current);

    // ✨ CINEMATIC FOCUS
    const timer = setTimeout(() => {
      map.current?.flyTo({
        center: sarjapur.coords,
        zoom: 12.2,
        speed: 1.2,
        curve: 1.4,
        essential: true,
      });
    }, 700);

    return () => {
      clearTimeout(timer);
      map.current?.remove();
    };
  }, []);

  return (
    <Section tone="accent">
      <div className="grid gap-2xl lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-l">
          <SectionHeading
            eyebrow="Where We Work"
            heading="Focused on California's most distinctive addresses."
          />
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {regions.map((region) => (
              <li key={region} className="flex items-center gap-3 text-body text-text-medium">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {region}
              </li>
            ))}
          </ul>
        </div>
        <div
          ref={mapContainer}
          className="relative aspect-[4/3] w-full overflow-hidden border border-white/10"
        />
      </div>
    </Section>
  );
}