import allCars from "./../assets/all-cars.png"
import inventory from "./../assets/inventory.png"

export default function Offer(){
    return (
       <div className="offers-cotainer">
             <div className="offer-card">
                <div className="selfDriving-text">
                   <p style={{ fontSize: "40px" , margin: "0px"}}>Current Offers</p>
                   <p style={{ fontSize: "17px", color: "rgb(92, 94, 98)", margin: "0"}}>Explore limited-time offers on Tesla vehicles.</p>
                   <div className="selfDriving-buttons" style={{ marginTop: "20px"}}>
                           <button className="white-btn">Schedule Demo</button>
                   </div>
               </div>
               <img src={allCars} alt="" />
            </div>
             <div className="offer-card">
                
               <div className="selfDriving-text">
                   <p style={{ fontSize: "40px" , margin: "1px"}}>Inventory</p>
                   <p style={{ fontSize: "17px", color: "rgb(92, 94, 98)", margin: "0"}}>Find nearby vehicles available for immediate delivery.</p>
                   <div className="selfDriving-buttons" style={{ marginTop: "20px"}}>
                           <button className="white-btn">New</button>
                           <button className="white-btn">Pre-Owned</button>
                   </div>
               </div>
               <img src={inventory} style={{height: "220px" , width: "270px"}}/>
            </div>  
               
               
        </div>
       
    )
}