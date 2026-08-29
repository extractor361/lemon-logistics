import { useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Navigation } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { COVERAGE_HUB, COVERAGE_DESTINATIONS } from "@/lib/siteData";
import { useLanguage } from "@/lib/LanguageContext";

// Custom hub marker (yellow)
const hubIcon = L.divIcon({
  className: "",
  html: `<div style="
    width: 18px; height: 18px;
    background: #FFCC00;
    border: 3px solid #111111;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(255,204,0,0.25);
  "></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

// Custom destination marker (white)
const destIcon = L.divIcon({
  className: "",
  html: `<div style="
    width: 11px; height: 11px;
    background: #ffffff;
    border: 2px solid #111111;
    border-radius: 50%;
  "></div>`,
  iconSize: [11, 11],
  iconAnchor: [5.5, 5.5],
});

export default function CoverageMap() {
  const [activeDest, setActiveDest] = useState(null);
  const { lang, t } = useLanguage();

  return (
    <section className="bg-lemon-dark py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Tekst */}
          <div>
            <Reveal>
              <SectionLabel>{t.coverageMap.label}</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-white text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-balance">
                {t.coverageMap.title}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lemon-gray-light text-lg leading-relaxed max-w-xl">
                {t.coverageMap.text}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {COVERAGE_DESTINATIONS.map((d) => (
                  <button
                    key={d.name}
                    onMouseEnter={() => setActiveDest(d.name)}
                    onMouseLeave={() => setActiveDest(null)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded border text-left transition-colors ${
                      activeDest === d.name
                        ? "border-lemon-yellow bg-lemon-yellow/10 text-white"
                        : "border-white/10 bg-lemon-gray text-lemon-gray-light hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <MapPin
                      className="w-3.5 h-3.5 shrink-0 text-lemon-yellow"
                    />
                    <span className="text-sm font-semibold">{d.name}</span>
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-6 flex items-start gap-3 p-4 rounded bg-lemon-gray border-l-2 border-lemon-yellow">
                <Navigation className="w-5 h-5 text-lemon-yellow shrink-0 mt-0.5" />
                <p className="text-sm text-lemon-gray-light leading-relaxed">
                  {t.coverageMap.note}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Mapa */}
          <Reveal delay={120}>
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl h-[340px] sm:h-[420px] lg:h-[480px]">
              <MapContainer
                center={[44.0, 18.5]}
                zoom={5}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%", background: "#1a1a1a" }}
                attributionControl={true}
              >
                <TileLayer
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                  attribution='Tiles &copy; Esri'
                />
                <TileLayer
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}"
                />
                {/* Rute iz hub-a */}
                {COVERAGE_DESTINATIONS.map((d) => (
                  <Polyline
                    key={`route-${d.name}`}
                    positions={[COVERAGE_HUB.position, d.position]}
                    pathOptions={{
                      color: "#FFCC00",
                      weight: activeDest === d.name ? 2.5 : 1.2,
                      opacity: activeDest === d.name ? 0.9 : 0.35,
                      dashArray: "6 8",
                    }}
                  />
                ))}
                {/* Hub marker */}
                <Marker position={COVERAGE_HUB.position} icon={hubIcon}>
                  <Popup>
                    <div style={{ fontFamily: "sans-serif" }}>
                      <strong style={{ color: "#111" }}>{COVERAGE_HUB.name}</strong>
                      <br />
                      <span style={{ fontSize: "12px", color: "#666" }}>
                        {lang === "en" ? COVERAGE_HUB.countryEn : COVERAGE_HUB.country} — {t.coverageMap.hub}
                      </span>
                    </div>
                  </Popup>
                </Marker>
                {/* Destinacije */}
                {COVERAGE_DESTINATIONS.map((d) => (
                  <Marker
                    key={d.name}
                    position={d.position}
                    icon={destIcon}
                    eventHandlers={{
                      mouseover: () => setActiveDest(d.name),
                      mouseout: () => setActiveDest(null),
                    }}
                  >
                    <Popup>
                      <div style={{ fontFamily: "sans-serif" }}>
                        <strong style={{ color: "#111" }}>{d.name}</strong>
                        <br />
                        <span style={{ fontSize: "12px", color: "#666" }}>
                          {lang === "en" ? d.countryEn : d.country}
                        </span>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}