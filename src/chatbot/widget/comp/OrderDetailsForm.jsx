import React, { useEffect, useState } from "react";
import "../../utils/styles.css";

const OrderDetailsForm = (props) => {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const imageUrl0 = "https://media.istockphoto.com/id/1221134337/photo/front-views-black-trousers.jpg?s=612x612&w=0&k=20&c=XSEtHBJpWPQTo5FQgVTGrLBRiOJ7FuYIcUlKZzifGG8=";
  const imageUrl = "https://media.gq.com/photos/654a66099efb7efc0873124f/3:4/w_748%2Cc_limit/Straight-Leg-Pant.jpg";

  const dummyData = [
    {
      id: 1,
      productName: "TayTelar Pant (Black 32)",
      quantity: "[1pc]",
      price: 2000.0,
      desc: "Cotton Solid Slim Pant",
      imageUrl: imageUrl0,
    },
    {
      id: 2,
      productName: "TayTelar Formal Pant (Black 32)",
      quantity: "[1pc]",
      price: 2000.0,
      desc: "Cotton Solid Slim Pant",
      imageUrl: imageUrl,
    },
    {
      id: 3,
      productName: "TayTelar Formal Pant (Black 32)",
      quantity: "[1pc]",
      price: 2000.0,
      desc: "Cotton Solid Slim Pant",
      imageUrl: imageUrl0,
    },
    {
      id: 4,
      productName: "TayTelar Formal Pant (Black 32)",
      quantity: "[1pc]",
      price: 2000.0,
      desc: "Cotton Solid Slim Pant",
      imageUrl: imageUrl,
    },
  ];

  useEffect(() => {
    setOrders(dummyData);
  }, []);

  const handleCardClick = (id) => {
    setExpandedOrderId(expandedOrderId === id ? null : id);
  };

  return (
    <div className="order-details-container">
      <div className="orders-list">
        {orders.map((order) => (
          <div
            className={`order-card ${expandedOrderId === order.id ? "expanded" : ""}`}
            key={order.id}
            onClick={() => handleCardClick(order.id)}
          >
            <div className="order-info">
              <div className="oname">{order.productName}</div>
              <div className="price" style={{ fontWeight: 'bold', color: 'black' }}>{order.quantity}</div>
              <div className="price">₹ {order.price.toFixed(2)}</div>
              <div className="desc">{order.desc}</div>
            </div>
            <div className="order-image">
              {order.imageUrl ? (
                <img src={order.imageUrl} alt={order.productName} />
              ) : (
                <p>No Image</p>
              )}
            </div>
            {expandedOrderId === order.id && (
              <div className="order-actions">
                <button className="action-button track">Track My Order</button>
                <button className="action-button cancel">Cancel My Order</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetailsForm;
