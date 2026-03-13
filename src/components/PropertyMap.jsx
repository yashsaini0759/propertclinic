import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix Leaflet's broken default icon paths when bundled with Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// Custom blue branded marker
function createBrandedMarker() {
  return L.divIcon({
    className: '',
    html: `
      <div style="
        display:flex;flex-direction:column;align-items:center;
      ">
        <div style="
          width:36px;height:36px;border-radius:50% 50% 50% 0;
          background:linear-gradient(135deg,#1E4D8F,#4A6FA5);
          border:3px solid #fff;
          box-shadow:0 3px 10px rgba(30,77,143,0.5);
          transform:rotate(-45deg);
        "></div>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -38],
  })
}

// Auto-open popup on mount
function AutoOpenPopup({ name }) {
  const map = useMap()
  useEffect(() => {
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        layer.openPopup()
      }
    })
  }, [map])
  return null
}

export default function PropertyMap({ lat, lng, name, location }) {
  if (!lat || !lng) return null

  const position = [lat, lng]

  return (
    <div style={{ height: '400px', width: '100%', borderRadius: '12px', overflow: 'hidden', zIndex: 0 }}>
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        attributionControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={createBrandedMarker()}>
          <Popup
            autoClose={false}
            closeOnClick={false}
            closeButton={false}
            className="property-popup"
          >
            <div style={{ fontFamily: 'sans-serif', minWidth: '150px' }}>
              <p style={{ fontWeight: '700', color: '#1E4D8F', margin: '0 0 2px', fontSize: '14px' }}>
                📍 {name}
              </p>
              <p style={{ color: '#555', margin: 0, fontSize: '12px' }}>{location}</p>
            </div>
          </Popup>
        </Marker>
        <AutoOpenPopup name={name} />
      </MapContainer>
    </div>
  )
}
