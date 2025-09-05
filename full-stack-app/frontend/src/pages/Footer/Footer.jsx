import "./Footer.css";


const Footer = () => {
    return(
        <div className="footer-bg-container">

            <div className="time-content">
                <h1 className="time-content-heading">OPENING TIMES</h1>

                <p className="time-content-para">Saturday - Sunday <br/>11:00 AM To 12:00 PM</p>
                <p className="time-content-para">Monday - Friday <br/>09:00 AM To 10:00 PM</p>
            </div>

            <div className="menu-content">
                <h1 className="menu-content-heading">THE MENU</h1>

                <p className="menu-content-para">Home</p>
                <p className="menu-content-para">About Us</p>
                <p className="menu-content-para">Menu</p>
                <p className="menu-content-para">Contact Us</p>
            </div>

            <div className="latter-content">
                <h1 className="latter-content-heading">NEWS LATTER</h1>
                <p className="latter-content-para">Don’t miss any updates all the astonishing offers we bring for you.</p>
                <input type="text" placeholder="Enter ur Message" className="latter-content-input" />
                <button className="latter-content-sub-btn">Submit</button>
            </div>
        </div>
    )
}

export default Footer;