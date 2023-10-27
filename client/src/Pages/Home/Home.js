import React, { useState } from "react";
import { Link } from "react-router-dom";

import RelaxBlend from "./../../assets/relaxingherbalcannabisblend.png";
import EnergizingSativa from "./../../assets/energizing sativacannabisstrain.png";
import BalancedHybrid from "./../../assets/hybridcannabisstrain.png";
import Oil from "./../../assets/CBDoil.png";
import Bears from "./../../assets/gummybears.png";
import ReliefCream from "./../../assets/releifcream.png";
import VapePen from "./../../assets/vapepen.png";
import Classic from "./../../assets/classic.png";
import Tincture from "./../../assets/tincturedrops.png";
import Tea from "./../../assets/tea.png";

import "./Home.scss";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = [
    { image: RelaxBlend, caption: "Relaxing Herbal Blend" },
    { image: EnergizingSativa, caption: "Energizing Sativa Mix" },
    { image: BalancedHybrid, caption: "Balanced Hybrid Strain" },
    { image: Oil, caption: "Premium CBD Oil" },
    { image: Bears, caption: "Edible Gummy Bears" },
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
      <div className="slider">
        <img
          src={featuredProducts[currentSlide].image}
          alt={featuredProducts[currentSlide].caption}
          className="slide-image"
        />
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
