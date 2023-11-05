import React from "react";
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

import "./Products.scss";

const Products = () => {
  const data = [
    {
      productName: "Relaxing Herbal Blend",
      productThumbnail: RelaxBlend,
      documentID: "001",
      description: "A calming blend perfect for nighttime use.",
      price: 19.99,
    },
    {
      productName: "Energizing Sativa Mix",
      productThumbnail: EnergizingSativa,
      documentID: "002",
      description: "Uplifting and energizing, great for daytime use.",
      price: 21.99,
    },
    {
      productName: "Balanced Hybrid Strain",
      productThumbnail: BalancedHybrid,
      documentID: "003",
      description: "Best of both worlds, offering a balanced experience.",
      price: 20.49,
    },
    {
      productName: "Premium CBD Oil",
      productThumbnail: Oil,
      documentID: "004",
      description: "100% pure CBD oil for therapeutic use.",
      price: 29.99,
    },
    {
      productName: "Edible Gummy Bears",
      productThumbnail: Bears,
      documentID: "005",
      description: "Delicious and potent, perfect for on-the-go.",
      price: 14.99,
    },
    {
      productName: "Relief Topical Cream",
      productThumbnail: ReliefCream,
      documentID: "006",
      description: "For localized relief of pain and inflammation.",
      price: 24.99,
    },
    {
      productName: "Vape Pen Starter Kit",
      productThumbnail: VapePen,
      documentID: "007",
      description: "Sleek and discreet, with a variety of flavors.",
      price: 34.99,
    },
    {
      productName: "Classic Pre-Rolled Joint",
      productThumbnail: Classic,
      documentID: "008",
      description: "Ready to use, smooth and even burn.",
      price: 9.99,
    },
    {
      productName: "Tincture Drops",
      productThumbnail: Tincture,
      documentID: "009",
      description: "Easy to dose, with fast-acting effects.",
      price: 27.99,
    },
    {
      productName: "Cannabis Infused Tea",
      productThumbnail: Tea,
      documentID: "010",
      description: "Relax and unwind with this soothing blend.",
      price: 15.99,
    },
  ];
  return (
    <div className="product">
      <h2>Products</h2>
      <div className="product-container">
        {Array.isArray(data) &&
          data.length > 0 &&
          data.map((product, index) => {
            const {
              productName,
              productThumbnail,
              documentID,
              description,
              price,
            } = product;

            return (
              <div className="product-card" key={documentID}>
                <div className="product-image">
                  <img
                    className="thumb"
                    src={productThumbnail}
                    alt="Product Thumbnail"
                  />
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
                <div className="product-info">
                  <h3>{productName}</h3>
                  <p>{description}</p>
                  <p>${price}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
