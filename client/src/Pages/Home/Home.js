import React, { useState } from "react";
import { Link } from "react-router-dom";

import RelaxBlend from "./../../assets/relaxingherbalcannabisblend-removebg-preview.png";
import Logo from "./../../assets/medleafmarketplace_logo-removebg-preview.png";
// import EnergizingSativa from "./../../assets/energizing_sativacannabisstrain-removebg-preview.png";
import BalancedHybrid from "./../../assets/hybridcannabisstrain-removebg-preview.png";
import Oil from "./../../assets/CBDoil-removebg-preview.png";
// import Bears from "./../../assets/gummybears-removebg-preview.png";
import ReliefCream from "./../../assets/releifcream-removebg-preview.png";
import VapePen from "./../../assets/vapepen-removebg-preview.png";
import Classic from "./../../assets/classic-removebg-preview.png";
import Tincture from "./../../assets/tincturedrops-removebg-preview.png";
import Tea from "./../../assets/tea-removebg-preview.png";
// import Leaves from "./../../assets/leaves.webp";
import Leaves2 from "./../../assets/Sqrd+Lab+Background_+Cannabis-high.gif";

import "./Home.scss";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = [
    { image: Logo, caption: "" },
    { image: RelaxBlend, caption: "Relaxing Herbal Blend" },
    // { image: EnergizingSativa, caption: "Energizing Sativa Mix" },
    { image: BalancedHybrid, caption: "Balanced Hybrid Strain" },
    { image: Oil, caption: "Premium CBD Oil" },
    // { image: Bears, caption: "Edible Gummy Bears" },
    { image: ReliefCream, caption: "Relief Topical Cream" },
    { image: VapePen, caption: "Vape Pen Starter Kit" },
    { image: Classic, caption: "Classic Pre-Rolled Joint" },
    { image: Tincture, caption: "Tincture Drops" },
    { image: Tea, caption: "Cannabis Infused Tea" },
  ];
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % featuredProducts.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + featuredProducts.length) % featuredProducts.length
    );
  };

  return (
    <div className="home">
      <div className="background-image">
        <img src={Leaves2} alt="leaves" />
      </div>
      <div className="slider">
        <picture>
          <img
            src={featuredProducts[currentSlide].image}
            alt={featuredProducts[currentSlide].caption}
            className="slide-image"
          />
        </picture>
        <div className="slide-caption">
          <h2>{featuredProducts[currentSlide].caption}</h2>
          <Link to="/products" className="view-products-btn">
            View Featured Products
          </Link>
        </div>
        <button className="prev-slide" onClick={handlePrevSlide}>
          &lt;
        </button>
        <button className="next-slide" onClick={handleNextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Home;
