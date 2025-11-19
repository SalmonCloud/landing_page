import { mapPins } from '../../data/siteData';

const MapPanel = () => (
  <section className="section">
    <div className="container">
      <div className="map-panel">
        <div className="map-wrapper">
          <img src="/Resources/world.svg" alt="World map with SalmonCloud locations" />
          {mapPins.map((pin) => (
            <div key={pin.id} className="map-pin" style={{ top: pin.top, left: pin.left }}>
              <span className="map-pin-label">{pin.label}</span>
              <span className="map-pin-dot" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MapPanel;
