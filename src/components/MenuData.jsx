import ModelS from "./../assets/models.png"
import Model3 from "./../assets/model3.png"
import ModelY from "./../assets/modely.png"
import ModelX from "./../assets/modelx.png"
import Cybertruck from "./../assets/cybertruck_nav.png"
import SolarPanel from "./../assets/solar_panel_nav.png"
import SolarRoof from "./../assets/solar_roof_nav.png"
import PowerWall from "./../assets/power_wall_nav.png"
import Charging from "./../assets/charging.png"
import HomeCharging from "./../assets/home_charging.png"
import SuperCharging from "./../assets/super_charging.png"

export default {
    vehicles: [
        { name: "Model S", img: ModelS },
        { name: "Model 3", img: Model3 },
        { name: "Model Y", img: ModelY },
        { name: "Model X", img: ModelX },
        { name: "Cyber Truck", img: Cybertruck }
    ],
    energy: [
        { name: "Solar Panel", img: SolarPanel },
        { name: "Solar Roof", img: SolarRoof },
        { name: "Power Wall", img: PowerWall }
    ],
    charging: [
        { name: "Charging", img: Charging },
        { name: "Home Charging", img: HomeCharging },
        { name: "Super Charging", img: SuperCharging }
    ],
    discover: [
        { name: "About Tesla", to: "/footer/aboutus" },
        { name: "Contact", to: "/footer/contact" },
        { name: "News", to: "/footer/news" }
    ],
    shop: [
        { title: "About Tesla", img: ModelS },
        { title: "Contact", img: SolarPanel },
        { title: "News", img: Charging }
    ]

}