import React from "react";
import TeslaLogo from "../assets/tesla_logo.png";
import supportLogo from "../assets/supportLogo.png";
import globeLogo from "../assets/globe.png";
import ProfileLogo from "../assets/profile.png";
import menuData from "./MenuData"
import VehiclesMenu from "./VehiclesMenu"; // Import your mega menu component
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./../css/Header.css"
import Popup from "./Popup";
export default function Header(props) {
    // 1. Centralized state to track which menu tray is currently open
    const [activeMenu, setActiveMenu] = React.useState(null);
    const [popup, setPopup] = React.useState(false)
    // 2. Data array representing your navigation links
    const navItems = ["Vehicles", "Energy", "Charging", "Discover", "Shop"];
    function handlePopUp() {
        setPopup(prev => !prev)
    }

    function changeLanguage(bool) {

        const targetLanguage = bool ? 'en' : 'ne';


        const googleCombo = document.querySelector('.goog-te-combo');

        if (googleCombo) {
            googleCombo.value = targetLanguage; // Set the value
            googleCombo.dispatchEvent(new Event('change')); // Force Google to translate
        } else {
            console.error("Google Translate script hasn't fully loaded on the page yet.");
        }
    }


    return (
        // Leaving the header element completely resets the state and closes the menu
        <header onMouseLeave={() => setActiveMenu(null)} className={props.trans ? "trans-navbar" : ""}>
            <div className="visible-nav-content">
                <Link to="/" className="tesla-logo-container">
                    <img src={TeslaLogo} className="teslaLogo" alt="Tesla Logo" />
                </Link>
                {/* 3. Render links dynamically using .map() */}
                <div className="center-elements">
                    {navItems.map((item) => (
                        <h4
                            key={item}
                            onMouseEnter={() => setActiveMenu(item.toLowerCase())}
                        >
                            {item}
                        </h4>
                    ))}
                </div>

                <div className="end-elements">
                    <a href="#"><img src={supportLogo} alt="Support" /></a>
                    <a href="#" onClick={handlePopUp}><img src={globeLogo} alt="Language/Region" /></a>
                    <a href="#"><img src={ProfileLogo} alt="Account Profile" /></a>
                </div>
            </div>

            {/* 4. Dropdown tray container with sliding CSS transition class */}
            <div className={`dropdown-tray ${activeMenu ? "open" : ""}`}>
                {activeMenu === "vehicles" && <VehiclesMenu
                    data={menuData.vehicles}
                />}
                {activeMenu === "energy" && <VehiclesMenu
                    data={menuData.energy}
                />}
                {activeMenu === "charging" && <VehiclesMenu
                    data={menuData.charging}
                />}
                {activeMenu === "discover" && <VehiclesMenu
                    data={menuData.discover}
                />}
                {activeMenu === "shop" && <VehiclesMenu
                    data={menuData.shop}
                />}

            </div>
            {popup && <Popup onClick={handlePopUp} lang={changeLanguage} />}
        </header>
    );
}