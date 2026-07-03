import changingImage1 from "./../assets/Homepage-Promo-Meet-Model-Y-Desktop.png"
import changingImage2 from "./../assets/changingImage2.png"

export default function CarsImage(props){
    return <>
        <div className="home-image-container" onClick={props.onClick}>
            
            <img
                src={changingImage1}
                className={`fade-img ${props.currentImg ? "active" : ""}`}
                alt="Model 3"
            />
           
            <div className={`image-text ${props.currentImg ? "active" : ""}`}>
                <h1>Model 3</h1>
                <h4>0% APR available</h4>
            </div>

           
            <img
                src={changingImage2}
                className={`fade-img ${!props.currentImg ? "active" : ""}`}
                alt="Model Y"
            />
            
            <div className={`image-text ${!props.currentImg ? "active" : ""}`}>
                <h1>Model Y</h1>
                <h4>0.99% APR available</h4>
            </div>
        </div>
        
    </>
}