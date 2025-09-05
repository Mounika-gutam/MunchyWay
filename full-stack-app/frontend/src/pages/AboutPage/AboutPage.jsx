import { IoPricetags } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFastfood } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import Navbar from "../NavBar/NavBar";
import "./AboutPage.css";

const AboutPage = () => {
    return(
        <div className="about-page-main-bg-container">
            <Navbar />
            {/* Our Story */}
            <div>
                <h1 className="story-heading">Our Story</h1>
                <p className="story-description">Flavorful Finds began with a simple craving: a reliable place to discover truly exceptional food experiences. 
                   We were tired of endless scrolling through generic restaurant reviews and wanted a curated guide to the best 
                   culinary gems in Hyderabad,IN. So, we created Flavorful Finds to connect food lovers with passionate chefs, 
                   unique dishes, and unforgettable dining adventures.</p>
            </div>

            {/* Our Team */}
            <div>
                <h1 className="team-heading">Our Team</h1>
                <div className="team-mm-container">
                    <img className="team-mm-img" src="https://i.pinimg.com/736x/5f/fc/5b/5ffc5b1e89286eee4f1872b02a62965a.jpg" alt="" />
                    <div>
                        <h2 className="team-mm-name">Emily Carter</h2>
                        <p className="team-mm-description">Founder & Head Foodie. Emily's passion for food started in her grandmother's kitchen. She's on a mission to uncover the most delicious hidden gems and share them with the world.</p>                
                    </div>
                </div>
                <div className="team-mm-container">
                    <img className="team-mm-img-reverse" src="https://i.pinimg.com/736x/a2/98/a9/a298a93783360b0e53fe98963485eca4.jpg" alt="" />
                    <div>
                        <h2 className="team-mm-name">Alex Lee</h2>
                        <p className="team-mm-description">Lead Photographer & Storyteller. Alex captures the beauty and essence of every dish, bringing our culinary stories to life through stunning photography and engaging narratives.</p>                
                    </div>
                </div>
                <div className="team-mm-container">
                    <img className="team-mm-img" src="https://i.pinimg.com/736x/b4/f2/4a/b4f24a1ded250fe50ce8c1cc31ea4777.jpg" alt="" />
                    <div>
                        <h2 className="team-mm-name">Sarah Johns</h2>
                        <p className="team-mm-description">Community Manager. Sarah is the heart of our community, connecting with food lovers and ensuring everyone has a delightful experience on Flavorful Finds.</p>                
                    </div>
                </div>
            </div>

            {/* Our Mission & Vission */}
        
            <div>
                <h1 className="ms-vs-heading">Our Mission & Vission</h1>
                <p className="ms-vs-para">Our mission is to be the ultimate resource for discovering exceptional food experiences. 
                   We strive to empower food lovers to explore new flavors, connect with local culinary artisans, 
                   and create lasting memories around the table.
                </p>
                <p className="ms-vs-para">We envision a world where everyone has access to incredible food experiences, regardless of their 
                   location or budget. We aim to foster a vibrant community of food enthusiasts and support the growth of 
                   local restaurants and food businesses.
                </p>
            </div>

            {/* Our Services Section */}

            <div>
                <h1 className="service-heading">Our Services</h1>
                <div className="services-container">
                    <ul className="service-list">
                        <li className="service-list-item">
                            <IoPricetags className="service-list-item-icon" />
                            <h3 className="service-list-item-name">Discount System</h3>
                            <p className="service-list-item-description">we ahve a favourable discount system for our regular customer.</p>
                        </li>

                        <li className="service-list-item">
                            <TbTruckDelivery className="service-list-item-icon" />
                            <h3 className="service-list-item-name">Delivery</h3>
                            <p className="service-list-item-description">fast and safe delivery from us with a reliable introduction.</p>
                        </li>

                        <li className="service-list-item">
                            <MdFastfood className="service-list-item-icon" />
                            <h3 className="service-list-item-name">500+ Restaurents</h3>
                            <p className="service-list-item-description">we have more than 500 restaurents who cooperate with us.</p>
                        </li>

                        <li className="service-list-item">
                            <FaThumbsUp className="service-list-item-icon" />
                            <h3 className="service-list-item-name">Best Quality</h3>
                            <p className="service-list-item-description">we provide the best service and high quality.</p>
                        </li>
                    </ul>

                    <img src="https://i.ibb.co/p8pY68s/de3757fcb63f6e201dde0cdafe0e74c9-removebg-preview.png" alt="delivery-boy" className="service-delivery-img" />
                </div>
            </div>


            {/* Our Customers */}

            <div>
                <h1 className="customers-section-heading">Some of Our satisfied <span style={{color: "#ffffff"}}>Customers</span></h1>
                <div className="customers-container">
                    <div className="customers-img-container">
                        <img src="https://i.pinimg.com/736x/26/6f/2d/266f2df363be8bdb87f604c357eb3098.jpg" alt="customer-img" className="customer-image" />
                        <img src="https://i.pinimg.com/736x/7c/8e/0e/7c8e0ec99c6bc344276d5d118d3da300.jpg" alt="customer-img" className="customer-image" />
                        <img src="https://i.pinimg.com/736x/6c/56/0d/6c560d7b52bf6a382372c35cd4e0ed66.jpg" alt="customer-img" className="customer-image" />
                    </div>

                    <div className="review-container">
                        <img src="https://i.pinimg.com/736x/77/75/ba/7775ba3f8efe9d87a128f2a9108028f0.jpg" alt="customer-img" className="customer-image" />
                        <p className="customer-review">This food website is a hidden gem! The recipes are easy to follow, the photos are mouthwatering, and everything feels fresh and authentic. I love how it makes cooking fun and stress-free. Whether you're looking for quick meals or something special, you'll always find a tasty idea here.</p>

                        <h3 style={{color: "#222222", fontSize: "15px"}}>Sonia Nancy</h3>
                        <p style={{color: "#ffffff", fontSize: "15px"}}>Professional Trader</p>
                    </div>

                    <div className="customers-img-container">
                        <img src="https://i.pinimg.com/736x/64/79/c1/6479c18d44919f76b1a337ec94998d93.jpg" alt="customer-img" className="customer-image" />
                        <img src="https://i.pinimg.com/736x/fd/49/bf/fd49bff8fa06fa1cbcc9e1e1d06151db.jpg" alt="customer-img" className="customer-image" />
                        <img src="https://i.pinimg.com/736x/1c/b4/2c/1cb42cae55c972b2185ba0e651826802.jpg" alt="customer-img" className="customer-image" />
                    </div>

                </div>
            </div>


            {/* Our Special In Restaurant */}

            <div>
                <h1 className="sp-menu-heading">Our Special In Restaurant</h1>
                <div>
                    <div className="sp-menu-img-container">
                        <img className="sp-menu-img" src="https://i.pinimg.com/736x/ff/c5/8b/ffc58bdbce69251869df34b81883ddb9.jpg" alt="image" />
                        <img className="sp-menu-img" src="https://i.pinimg.com/736x/f1/9c/1a/f19c1a45d2f7485ad9774532c969c2c3.jpg" alt="image" />
                        <img className="sp-menu-img" src="https://i.pinimg.com/736x/5a/ed/11/5aed11664429e2f76919b53e68d616be.jpg" alt="image" />
                    </div>
                    

                </div>
            </div>
        
        
        </div>
    )
}

export default AboutPage;