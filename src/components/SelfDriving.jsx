import TeslaHomeVid from "./../assets/TeslaHomeVid.webm"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function SelfDriving(){
    const [counter, setCounter] = React.useState(1122322458)

   const navigate = useNavigate()


    useEffect(() =>
    {
        const interval = setInterval(() => {
            setCounter(prev => prev + 10)
        }, 25)
    }
    ,[])
        
    
    return (
    <div className="selfDriving-container">
        <div className="selfDriving-text">
            <p style={{ fontSize: "40px" , margin: "1px"}}>Full Self Driving</p>
            <p style={{ fontSize: "40px" , margin: "1px"}}>(Supervised)</p>
            <p style={{ fontSize: "17px", color: "rgb(92, 94, 98)"}}>Makes every drive easier. Subscribe for $99/mo.</p>
            <div className="selfDriving-text-subContainer">
                <div className="subContainer-sub">
                    <p style={{ fontSize: "40px", margin: "1px"}}>7x</p>
                    <p style={{ fontSize: "17px", color: "rgb(92, 94, 98)", margin: "1px"}}>Fewer Collisions </p>
                </div>
                <div className="subContainer-sub">
                    <p style={{ fontSize: "40px", margin: "1px"}}>{counter}</p>
                    <p style={{ fontSize: "17px", color: "rgb(92, 94, 98)", margin: "1px"}}>Miles Driven</p>
                </div>
            </div>
            <div className="selfDriving-buttons">
                    <button className="black-btn" onClick={() => navigate("/drive")}>Schedule Demo</button>
                    <button className="white-btn">Learn More</button>
            </div>
        </div>
        <video width="100%" height="auto" controls autoPlay muted loop>
            <source src={TeslaHomeVid} type="video/webm" />
            
        </video>
        
    </div>)
    
}