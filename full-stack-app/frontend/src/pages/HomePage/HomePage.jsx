import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./HomePage.css";

const HomePage = () => {
    // Slider settings For Small Screen
    const settings1 = { 
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    // Slider settings For Large Screen
    const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
        };
    return(
        <div className="home-page-main-bg-container">
            <Navbar />
            <div className="home-page-top-bg">
                <div>
                    <h1 className="home-page-top-heading">Welcome To Our MunchyWay</h1>
                    <p className="home-page-top-description">Delicious meals, delivered fresh to your doorstep! Explore our wide range of mouth-watering dishes, from sizzling street food to gourmet delights.</p>
                </div>
                <img className="image" src="https://i.ibb.co/LzTRD8JR/775260464661ad6c17889c4a670ae0c1-removebg-preview.png" alt="food-image" />
            </div>

            {/* Why Choose Us */}
            <div>
                <h1 className="choose-us-heading">Why Choose Us?</h1>
                
                <div className="choose-card-container">
                    <div className="choose-card">
                        <img className="choose-card-img" src="https://i.pinimg.com/736x/ab/46/0f/ab460ff90d3c62ec7ade61c2d4b3e984.jpg" alt="image" />
                        <div className="choose-card-content">
                            <h2 className="choose-card-heading">Fresh & Quality Ingredients</h2>
                            <p className="choose-card-para">We use only the best, freshest ingredients for every meal.</p>
                        </div>
                    </div>

                    <div className="choose-card">
                        <img className="choose-card-img" src="https://i.pinimg.com/736x/52/57/6b/52576b994e4288e723cf732acd311506.jpg" alt="image" />
                        <div className="choose-card-content">
                            <h2 className="choose-card-heading">Fast & Reliable Delivery</h2>
                            <p className="choose-card-para">Your favorite food, delivered hot and on time.</p>
                        </div>
                    </div>

                    <div className="choose-card">
                        <img className="choose-card-img" src="https://i.pinimg.com/736x/f0/bc/1b/f0bc1b3ec91bbf9b6d6fb756a60d2349.jpg" alt="image" />
                        <div className="choose-card-content">
                            <h2 className="choose-card-heading">Wide Variety of Dishes</h2>
                            <p className="choose-card-para">From Indian curries to continental delights,we have something for everyone.</p>
                        </div>
                    </div>

                    <div className="choose-card">
                        <img className="choose-card-img" src="https://i.pinimg.com/736x/fb/02/48/fb02489ba66a6b52e62b9a33480a01a1.jpg" alt="image" />
                        <div className="choose-card-content">
                            <h2 className="choose-card-heading">Easy & Secure Payments</h2>
                            <p className="choose-card-para">Multiple payment options for a hassle-free experience.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Our Menu */}

            {/* Our Cheff */}

            <div className="chef-container">
                <img className="chef-img" src="https://i.ibb.co/Q3hfWFkm/d2354797cfb995122e8bf0248cb1fd76-removebg-preview.png" alt="chef-img" />
                <div>
                <h2 className="chef-heading">Meet Our Chef</h2>
                <h2 className="chef-name">Raghavendra</h2>
                <p className="chef-description">Trained at the prestigious YouTube Academy of Cooking Disasters, Chef Raghav believes that recipes are just "suggestions" and that the best dishes are created with a little chaos. His signature dish, Mystery Surprise, has been described as "unexpected," "bold," and occasionally "a fire hazard."</p>
                </div>
            </div>

            {/* Order Now */}

            <div>
                <h1 className="od-nw-heading">Order Now & Enjoy!</h1>
                <p className="od-nw-para">Browse our menu, place an order, and experience the joy of great food!</p>
            </div>

            <Footer />


        </div>
    )
}

export default HomePage;