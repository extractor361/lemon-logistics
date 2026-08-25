import { useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Navigation } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { COVERAGE_HUB, COVERAGE_DESTINATIONS } from "@/lib/siteData";

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

  return (
    <section className="bg-lemon-dark py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Tekst */}
          <div>
            <Reveal>
              <SectionLabel>Mreža destinacija</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-white text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-balance">
                Pokrivamo Balkan i šire
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lemon-gray-light text-lg leading-relaxed max-w-xl">
                Iz naše baze u Podgorici organizujemo prevoz ka ključnim
                destinacijama u regionu i Evropi. Poznavanje relacija i procedura
                na granicama omogućava nam da planiramo rutu koja štedi vrijeme
                i novac.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
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
              <div className="mt-8 flex items-start gap-3 p-4 rounded bg-lemon-gray border-l-2 border-lemon-yellow">
                <Navigation className="w-5 h-5 text-lemon-yellow shrink-0 mt-0.5" />
                <p className="text-sm text-lemon-gray-light leading-relaxed">
                  Vaša destinacija nije na listi? Kontaktirajte nas — rute
                  prilagođavamo potrebama klijenata i pokrivamo i relacije van
                  prikazane mreže.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Mapa */}
          <Reveal delay={120}>
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <MapContainer
                center={[44.0, 18.5]}
                zoom={5}
                scrollWheelZoom={false}
                style={{ height: "480px", width: "100%", background: "#1a1a1a" }}
                attributionControl={false}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
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
                        {COVERAGE_HUB.country} — baza
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
                          {d.country}
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