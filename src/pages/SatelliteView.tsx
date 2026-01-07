import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// OpenLayers imports - ensure 'ol' package is installed
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';

// Key locations for the satellite view
const locations = [
  {
    id: 'tataskweyak',
    name: 'Tataskweyak Cree Nation (Split Lake)',
    description: 'Traditional territory of Tataskweyak Cree Nation',
    coordinates: [-96.1, 56.27], // [longitude, latitude]
    zoom: 10,
  },
  {
    id: 'churchill-river',
    name: 'Churchill River',
    description: 'The Churchill River before the diversion point',
    coordinates: [-97.0, 56.5],
    zoom: 9,
  },
  {
    id: 'diversion',
    name: 'Churchill River Diversion',
    description: 'Location of Manitoba Hydro\'s Churchill River Diversion infrastructure',
    coordinates: [-97.5, 56.0],
    zoom: 11,
  },
  {
    id: 'nelson-river',
    name: 'Nelson River',
    description: 'The Nelson River receiving diverted waters',
    coordinates: [-94.5, 56.0],
    zoom: 9,
  },
];

export default function SatelliteView() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize the map
    const map = new Map({
      target: mapRef.current,
      layers: [
        // Satellite imagery layer (using Esri World Imagery)
        new TileLayer({
          source: new XYZ({
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            attributions: 'Tiles © Esri',
          }),
        }),
      ],
      view: new View({
        center: fromLonLat(selectedLocation.coordinates),
        zoom: selectedLocation.zoom,
      }),
    });

    mapInstanceRef.current = map;
    setMapLoaded(true);

    return () => {
      map.setTarget(undefined);
      mapInstanceRef.current = null;
    };
  }, []);

  // Update map view when location changes
  useEffect(() => {
    if (mapInstanceRef.current && mapLoaded) {
      mapInstanceRef.current.getView().animate({
        center: fromLonLat(selectedLocation.coordinates),
        zoom: selectedLocation.zoom,
        duration: 1000,
      });
    }
  }, [selectedLocation, mapLoaded]);

  return (
    <>
      {/* Fixed background for areas not covered by map */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="fixed inset-0 z-0 bg-neutral-950"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 min-h-screen"
      >
        {/* Header */}
        <div className="pt-8 pb-6 px-4 lg:px-8">
          <h1 className="text-display text-light text-center lg:text-left">
            Satellite Views
          </h1>
          <p className="text-body-lg text-white/70 mt-4 max-w-3xl">
            Explore the lands and waterways of Tataskweyak Cree Nation territory and 
            see the impact of the Churchill River Diversion from above.
          </p>
        </div>

        {/* Map Container */}
        <div className="px-4 lg:px-8 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Location Selector */}
            <div className="lg:col-span-1 space-y-2">
              <h3 className="text-lg text-amber-200 font-semibold mb-3">
                Select Location
              </h3>
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    selectedLocation.id === location.id
                      ? 'bg-amber-500/30 border border-amber-500/50 text-amber-200'
                      : 'bg-neutral-900/60 border border-amber-500/20 text-white/70 hover:bg-amber-500/10'
                  }`}
                >
                  <div className="font-medium text-sm">{location.name}</div>
                  <div className="text-xs text-white/50 mt-1">{location.description}</div>
                </button>
              ))}
            </div>

            {/* Map */}
            <div className="lg:col-span-3">
              <div 
                ref={mapRef}
                className="w-full h-[60vh] lg:h-[70vh] rounded-lg overflow-hidden border border-amber-500/20"
              />
              
              {/* Map Info Overlay */}
              <div className="mt-4 bg-neutral-900/60 rounded-lg p-4 border border-amber-500/20">
                <h4 className="text-amber-200 font-semibold">{selectedLocation.name}</h4>
                <p className="text-white/60 text-sm mt-1">{selectedLocation.description}</p>
                <p className="text-white/40 text-xs mt-2">
                  Coordinates: {selectedLocation.coordinates[1].toFixed(4)}°N, {Math.abs(selectedLocation.coordinates[0]).toFixed(4)}°W
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="px-4 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-900/60 rounded-lg p-6 border border-amber-500/20"
            >
              <h3 className="text-lg text-amber-200 font-semibold mb-3">
                About the Churchill River Diversion
              </h3>
              <p className="text-white/70 text-sm">
                Built in the 1970s, the Churchill River Diversion (CRD) diverts up to 95% 
                of the Churchill River's flow into the Nelson River for hydroelectric power 
                generation. This massive infrastructure project has had devastating impacts 
                on the aquatic ecosystems and the communities that depend on them.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-neutral-900/60 rounded-lg p-6 border border-amber-500/20"
            >
              <h3 className="text-lg text-amber-200 font-semibold mb-3">
                Impact on Namao Habitat
              </h3>
              <p className="text-white/70 text-sm">
                The diversion has dramatically altered water levels, flow patterns, and 
                temperatures throughout the system. These changes have severely impacted 
                Lake Sturgeon spawning grounds and feeding areas, contributing to the 
                species' decline in traditional waters.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Instructions */}
        <div className="px-4 lg:px-8 pb-12">
          <div className="bg-neutral-900/60 rounded-lg p-6 border border-amber-500/20 text-center">
            <p className="text-white/60">
              🗺️ Use the location buttons to navigate between key areas. You can also zoom and pan the map directly.
              The satellite imagery is provided by Esri World Imagery.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
