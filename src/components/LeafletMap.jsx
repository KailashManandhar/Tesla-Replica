import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function LeafletMap() {
  // Coordinates for center [Latitude, Longitude]
  const position = [51.505, -0.09]; 

  return (
    <div className="map-container">
        <div className="map">
            <MapContainer 
      center={position} 
      zoom={13} 
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
        </div>
        <div className="selfDriving-container" style={{ justifyContent: "start",margin: "20px 0",backgroundColor: "white", gap: "350px", height: "25vh"}}>
          <div className="selfDriving-text">
              <p style={{ fontSize: "40px" , margin: "1px"}}>Find Your Charge</p>
              <p style={{ fontSize: "17px", color: "rgb(92, 94, 98)"}}>View the network of Tesla Superchargers and Destination Chargers available near you.</p>
              <div className="selfDriving-buttons" style={{ margin : "0", justifyContent: "start"}}>
                    <button className="black-btn">View Network</button>
                    <button className="white-btn" style={{ backgroundColor: "#F4F4F4"}}>Learn More</button>
              </div>
              
          </div>
          <div className="selfDriving-text-subContainer" style={{margin: "0"}}>
                <div className="subContainer-sub">
                    <p style={{ fontSize: "40px", margin: "1px"}}>36,132</p>
                    
                    <p style={{ fontSize: "17px", color: "rgb(92, 94, 98)", margin: "1px"}}>Super Chargers </p>
                </div>
                <div className="subContainer-sub">
                    <p style={{ fontSize: "40px", margin: "1px"}}>6,057</p>
                    <p style={{ fontSize: "17px", color: "rgb(92, 94, 98)", margin: "1px"}}>Destination Chargers</p>
                </div>
            </div>
          
        </div>
        
    </div>
    
  );
}