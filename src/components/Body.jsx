import React from "react"
import CarsImage from "./CarsImage";
import SelfDriving from "./SelfDriving";
import Cards from "./Cards"
import CarData from "./CarData";
import ProductsData from "./ProductsData";
import Offer from "./Offer"
import { nanoid } from "nanoid"
import LeafletMap from "./LeafletMap";

export default function Body(){
    const [homeImages, setHomeImages] = React.useState(true)
    const [carData, setCarData] = React.useState(CarData)
    const [productsData, setProductsData] = React.useState(ProductsData)
   
    React.useEffect(() => 
        {
            const interval = setInterval(() => {
                handleImageClick()
                
            }, 7000);
            return () => clearInterval(interval)
       }, [])


    function handleImageClick(){
        setHomeImages(prev => !prev) 
    }

    const list_carData = carData.map(car => <Cards 
            key = {nanoid()}
            name = {car.name}
            lease = {car.lease}
            img = {car.img}
            />) 
    const list_ProductData = productsData.map(product => <Cards 
            key = {nanoid()}
            name = {product.name}
            lease = {product.quote}
            img = {product.img}
            />) 
    
    return (
        <div>
            <CarsImage 
                onClick={handleImageClick} 
                currentImg = {homeImages} 
            />

            <SelfDriving /> 

            <div className="card-container">
                {list_carData}
            </div>
            
            {/* add everything else in the middle */}
            <Offer />
                            
           <LeafletMap />
            <div className="card-container">
                {list_ProductData}
            </div>  
        </div>
    )
}