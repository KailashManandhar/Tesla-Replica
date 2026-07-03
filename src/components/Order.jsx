import React from 'react'
import { useParams } from 'react-router-dom'
import model3 from "./../assets/model3.png"
import Data from "./OrderData"
import cyber_logo from "./../assets/cybertruck_logo.png"
const Order = () => {
    const {item} = useParams()
    const [data, setData] = React.useState(Data[item])
    const keys = Object.keys(data);
    const [active, setActive] = React.useState(keys[2])
    const carList = ["Model_3","Model_Y","Cyber_Truck"]
    const otherList = ["Solar_Panels","Powerwall","MegaPack","Solar_Roof",]
    console.log(active)
    function toggleClick(id){
        setActive(id)
    }
    let current = data != null && data[active]
  return (
    <div className='order-car-container'>
        {carList.includes(item) && <>
            <img src={data.img} alt={data.name} />
        <div className="ghost-spacer"></div>
        <div className="left-order-container">
            {/* <h1>{data.name}</h1> */}
            {item != "Cyber_Truck" ?
                <h1>{data.name}</h1>
            :<img src={cyber_logo} id='cyber-logo'/>}
            <div className="stats">
                <div className="stat">
                    <h3>{current.range}</h3>
                    <h5>Range</h5>
                </div>
                <div className="stat">
                    <h3>{current.topSpeed} </h3>
                    <h5>Top Speed</h5>
                </div>
                <div className="stat">
                    <h3>{current.zeroToSixty}</h3>
                    <h5>0 - 60 mph</h5>
                </div>
            </div> 
            {item != "Cyber_Truck" &&
            <>
            <div className={`wheel-drive ${active == "Rear-Wheel Drive" ? "active" : ""}`} id= "Rear-Wheel Drive" onClick={() => toggleClick("Rear-Wheel Drive")}>
                <h4>Rear-Wheel Drive</h4>
                <h4>$521<span>/mo</span></h4>
            </div>
            <div className={`wheel-drive ${active == "Premium Rear-Wheel Drive" ? "active" : ""}`} id= "Premium Rear-Wheel Drive" onClick={() => toggleClick("Premium Rear-Wheel Drive")}>
                <h4>Rear-Wheel Drive</h4>
                <h4>$521<span>/mo</span></h4>
            </div>
            <div className={`wheel-drive ${active == "Premium All-Wheel Drive" ? "active" : ""}`} id= "Premium All-Wheel Drive" onClick={() => toggleClick("Premium All-Wheel Drive")}>
                <h4>Rear-Wheel Drive</h4>
                <h4>$521<span>/mo</span></h4>
            </div>
            <div className={`wheel-drive ${active == "Performance All-Wheel Drive" ? "active" : ""}`} id= "Performance All-Wheel Drive" onClick={() => toggleClick("Performance All-Wheel Drive")}>
                <h4>Rear-Wheel Drive</h4>
                <h4>$521<span>/mo</span></h4>
            </div>
            </>
            }

            {item == "Cyber_Truck" && 
            <>
                <div className={`wheel-drive ${active == "Dual Motor All-Wheel Drive" ? "active" : ""}`} id= "Dual Motor All-Wheel Drive" onClick={() => toggleClick("Dual Motor All-Wheel Drive    ")}>
                <h4>Rear-Wheel Drive</h4>
                <h4>$521<span>/mo</span></h4>
            </div>
            <div className={`wheel-drive ${active == "Premium All-Wheel Drive" ? "active" : ""}`} id= "Premium All-Wheel Drive" onClick={() => toggleClick("Premium All-Wheel Drive ")}>
                <h4>Rear-Wheel Drive</h4>
                <h4>$521<span>/mo</span></h4>
            </div>
            <div className={`wheel-drive ${active == "Cyberbeast" ? "active" : ""}`} id= "Cyberbeast" onClick={() => toggleClick("Cyberbeast    ")}>
                <h4>Rear-Wheel Drive</h4>
                <h4>$521<span>/mo</span></h4>
            </div>
            </>}
        </div>
        </>  }
        
    </div>
  )
}

export default Order
