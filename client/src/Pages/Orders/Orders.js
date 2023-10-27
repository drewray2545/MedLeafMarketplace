import React, { useState } from "react";
import RelaxBlend from "./../../assets/relaxingherbalcannabisblend.png";
import EnergizingSativa from "./../../assets/energizing sativacannabisstrain.png";
import BalancedHybrid from "./../../assets/hybridcannabisstrain.png";
import "./Orders.scss";

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const dummyOrders = [
    {
      orderNumber: "ORD123456",
      productName: "Relaxing Herbal Blend",
      productThumbnail: RelaxBlend,
      orderDate: "10/10/2023",
      orderTotal: 19.99,
      quantity: 2,
    },
    {
      orderNumber: "ORD123457",
      productName: "Energizing Sativa Mix",
      productThumbnail: EnergizingSativa,
      orderDate: "11/10/2023",
      orderTotal: 21.99,
      quantity: 1,
    },
    {
      orderNumber: "ORD123458",
      productName: "Balanced Hybrid Strain",
      productThumbnail: BalancedHybrid,
      orderDate: "12/10/2023",
      orderTotal: 20.49,
      quantity: 3,
    },
  ];

  return (
    <div className="orders">
      <h2>My Orders</h2>
      <div className="orders-container">
        {dummyOrders.map((order) => (
          <div
            className="order-card"
            key={order.orderNumber}
            onClick={() => setSelectedOrder(order)}
          >
            <h3>Order: {order.orderNumber}</h3>
            <p>Product: {order.productName}</p>
            <p>Date: {order.orderDate}</p>
            <p>Total: ${(order.orderTotal * order.quantity).toFixed(2)}</p>
            <div className="product-image">
              <img
                className="thumb"
                src={order.productThumbnail}
                alt="Product Thumbnail"
              />
              <span className="quantity">Qty: {order.quantity}</span>
            </div>
          </div>
        ))}
      </div>
      {selectedOrder && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setSelectedOrder(null)}>
              &times;
            </span>
            <h3>Order: {selectedOrder.orderNumber}</h3>
            <p>Product: {selectedOrder.productName}</p>
            <p>Date: {selectedOrder.orderDate}</p>
            <p>Total: ${selectedOrder.orderTotal.toFixed(2)}</p>
            <h4>Payment Info:</h4>
            <p>Card: **** **** **** 1234</p>
            <p>Expiry: 12/25</p>
            <h4>Shipping Info:</h4>
            <p>Name: John Doe</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Orders;
