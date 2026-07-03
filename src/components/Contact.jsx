import gigaFactory from "./../assets/gigafactory.png"
import headquarters from "./../assets/engineering_headquarters.png"
import factory from "./../assets/factory.png"
import texasfactory from "./../assets/factory_texas.png"
import globe from "./../assets/globe.png"
export default function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <div className="info-txt">
                <div className="left-contact">
                    <p className="contact-subHeading">Sales</p>
                    <p className="contact-sm-txt">Locate your nearest Tesla location.</p>
                    <p className="contact-subHeading">Vehicle Customer Support</p>
                    <p className="contact-sm-txt">Find answers about your order, delivery, ownership and product support.</p>
                    <p className="contact-subHeading">Energy and Charging Product Customer Support</p>
                    <p className="contact-sm-txt">For support with Powerwall, Solar Panels, Solar Roof and other energy products, call our Customer Support team toll free at (877) 798-3752 and select option 4, then option 2. For help with Wall Connector and other home charging products, select option 3.</p>
                    <p className="contact-subHeading">Roadside Assistance</p>
                    <p className="contact-sm-txt">Request roadside assistance from the Tesla app. Find international phone numbers for emergency roadside assistance.</p>
                    <p className="contact-subHeading">Service</p>
                    <p className="contact-sm-txt">If your Tesla vehicle needs service, start by scheduling a service appointment in the Tesla app.</p>
                    <p className="contact-subHeading">Safety Recalls</p>
                    <p className="contact-sm-txt">Get the latest safety recall information that applies to your Tesla vehicle.</p>
                    <p className="contact-subHeading">Careers</p>
                    <p className="contact-sm-txt">Find career opportunities at Tesla.</p>
                    <p className="contact-subHeading">First Responders</p>
                    <p className="contact-sm-txt">Download Tesla reference guides for first responders and emergency personnel.</p>
                </div>
                <div className="right-contact">
                    <p className="contact-subHeading">Press</p>
                    <p className="contact-sm-txt">Americas</p>
                    <p className="contact-sm-txt">press@tesla.com</p>
                    <p className="contact-sm-txt">Europe & Middle East</p>
                    <p className="contact-sm-txt">eupress@tesla.com</p>
                    <p className="contact-sm-txt">Australia & Asia</p>
                    <p className="contact-sm-txt">apacpress@tesla.com</p>
                    <p className="contact-sm-txt">China</p>
                    <p className="contact-sm-txt">china-press@tesla.com</p>
                </div></div>
            <h1 style={{ margin: "100px 0 70px" }}>World Wide Officese</h1>
            <div className="location-container">

                <div className="location">
                    <img src={texasfactory} alt="" />
                    <p className="contact-subHeading">Tesla Headquarters - Gigafactory Texas</p>

                    <p className="contact-sm-txt">1 Tesla Road</p>
                    <p className="contact-sm-txt">Austin, TX 78725</p>

                    <p className="contact-sm-txt">Directions</p>
                </div>
                <div className="location">
                    <img src={headquarters} alt="" />
                    <p className="contact-subHeading">Tesla Headquarters - Gigafactory Texas</p>

                    <p className="contact-sm-txt">1 Tesla Road</p>
                    <p className="contact-sm-txt">Austin, TX 78725</p>

                    <p className="contact-sm-txt">Directions</p>
                </div>
                <div className="location">
                    <img src={factory} alt="" />
                    <p className="contact-subHeading">Tesla Headquarters - Gigafactory Texas</p>

                    <p className="contact-sm-txt">1 Tesla Road</p>
                    <p className="contact-sm-txt">Austin, TX 78725</p>

                    <p className="contact-sm-txt">Directions</p>
                </div>
                <div className="location">
                    <img src={gigaFactory} alt="" />
                    <p className="contact-subHeading">Tesla Headquarters - Gigafactory Texas</p>

                    <p className="contact-sm-txt">1 Tesla Road</p>

                    <p className="contact-sm-txt">Austin, TX 78725</p>

                    <p className="contact-sm-txt">Directions</p>
                </div>

            </div>
            <h1 style={{ textAlign: "center" }}>Start Your Journey</h1>
            <p className="contact-sm-txt" style={{ textAlign: "center" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed animi reprehenderit fugit.</p>
            <div className="form-container">
                <div className="left-tabs">
                    <div className="enroll-tab">
                        <h2>Ready to Purchase?</h2>
                        <p className="contact-sm-txt" style={{ marginBottom: "10px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa in architecto ut beatae sed magni.</p>
                        <h5>Lorem ipsum dolor sit.</h5>
                        <h5>Lorem ipsum dolor sit.</h5>
                        <h5>Lorem ipsum dolor sit.</h5>
                    </div>
                    <div className="tab">
                        <img src={globe} alt="" />
                        {/* Wrap the text elements here */}
                        <div className="tab-info">
                            <p className="contact-sm-txt">Phone</p>
                            <h3>65477878787</h3>
                            <p className="contact-sm-txt">Mon-Fri, 9:00 am</p>
                        </div>
                    </div>
                    <div className="tab">
                        <img src={globe} alt="" />
                        {/* Wrap the text elements here */}
                        <div className="tab-info">
                            <p className="contact-sm-txt">Phone</p>
                            <h3>65477878787</h3>
                            <p className="contact-sm-txt">Mon-Fri, 9:00 am</p>
                        </div>
                    </div>
                    <div className="tab">
                        <img src={globe} alt="" />
                        {/* Wrap the text elements here */}
                        <div className="tab-info">
                            <p className="contact-sm-txt">Phone</p>
                            <h3>65477878787</h3>
                            <p className="contact-sm-txt">Mon-Fri, 9:00 am</p>
                        </div>
                    </div>
                    <div className="tab">
                        <img src={globe} alt="" />
                        {/* Wrap the text elements here */}
                        <div className="tab-info">
                            <p className="contact-sm-txt">Phone</p>
                            <h3>65477878787</h3>
                            <p className="contact-sm-txt">Mon-Fri, 9:00 am</p>
                        </div>
                    </div>
                </div>
                <div className="right-tabs">
                    <h2>Send Us an Inquiry</h2>
                    <form>
                        <label>
                            Full Name:
                            <input type="text" />
                        </label>
                        <label>
                            Full Name:
                            <input type="text" />
                        </label>
                        <label>
                            Full Name:
                            <input type="text" />
                        </label>
                        <label>
                            Full Name:
                            <input type="text" />
                        </label>
                        <label>
                            Full Name:
                            <input type="text" />
                        </label>

                        <button type="submit">Send Inquiry</button>
                    </form>
                </div>

            </div>

        </div>

    )


}