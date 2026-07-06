import React from "react";

export default function Popup(props) {
    const [selected, setSelected] = React.useState(true)

    function changeChosen(bool) {
        if (bool !== selected) {
            setSelected(prev => !prev)
        }
    }

    return (
        <div className="app-container">
            <div className="popup-overlay">

                <div className="popup-box" onClick={(e) => e.stopPropagation()}>

                    <div className="choose-language">
                        <div className={`eng ${selected ? "chosen" : ""}`} onClick={() => changeChosen(true)}>
                            <p>English</p></div>
                        <div className={`nep ${!selected ? "chosen" : ""}`} onClick={() => changeChosen(false)}>
                            <p>Nepali</p>
                        </div>
                    </div>
                    <div className="lang-btn-grp">
                        <button onClick={props.onClick} className="close-btn">
                            Close
                        </button>
                        <button onClick={() => props.lang(selected)} className="close-btn">
                            Change
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
}