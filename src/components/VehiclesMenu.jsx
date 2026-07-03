// VehiclesMenu.jsx
import { Link } from "react-router-dom";

export default function VehiclesMenu(props) {
    const links = ["Current Offers", "Demo Drive", "Trade-In", "Pre-Owned", "Roadster", "Robotaxi"];

    const firstItem = props.data && props.data[0] ? props.data[0] : {};
    const keys = Object.keys(firstItem);

    return (
        <div className="mega-menu-content">
            {keys.includes("img") ? (
                <>
                    <div className="cars-grid">
                        {props.data.map((data, index) => (
                            <div className="menu-car-card" key={index}>
                                <img src={data.img} alt={data.name} />
                                <h5>{data.name}</h5>
                                <div className="card-links">
                                    <a href="#">Learn</a>
                                    <Link to={`/order/${data.name.replace(" ", "_")}`}>Order</Link>
                                </div>
                                </div>  
                        ))}
                    </div>

                    <div className="menu-divider"></div>

                    <ul className="side-links-list">
                        {links.map((link, index) => (
                            <li key={index}><a href="#">{link}</a></li>
                        ))}
                    </ul>
                </>
            ) : (
                <ul className="discover-links-list">
                    {props.data.map((item, index) => (
                        <li key={index}>
                            <Link to={item.to}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );  
}

