
import { useNavigate } from "react-router-dom"

export default function Cards(props){
    const navigate = useNavigate()
    return(
            <div className="card">
                <img src={props.img} />
                <div className="card-text">
                    <p className="carName">{props.name}</p>
                    <p className="car-lease">{props.lease}</p>
                    <div className="btn-grp">
                        <button className="blue-btn" 
                            onClick={() => navigate(`/order/${props.name}`.replace(" ","_"))}>Order Now</button>
                            

                        <button className="learnMore-btn">Learn More</button>
                    </div>
                </div>
            </div>
    )
}