import React, { useEffect, useState } from "react";
import "../../utils/styles.css";
import { FaChevronDown, FaChevronUp, FaTruckFast } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import Progress from "./Progress";
import LinearProgressLine from "./LinearProgress";

// Define the shipping stages as a constant
const SHIPPING_STAGES = [
  { stage: "Order Placed", time: "20 Mar 10:00pm" },
  { stage: "Shipped to Delhi", time: "20 Mar 10:00pm" },
  { stage: "Shipped to Mumbai", time: "20 Mar 10:00pm" },
  { stage: "Shipped to Bangalore", time: "20 Mar 10:00pm" },
  { stage: "Shipped to Yelahanka", time: "20 Mar 10:00pm" },
  { stage: "Out for Delivery" },
];
const TRACKING_STAGES = [
  { stage: "Order Placed" },
  { stage: "Shipped" },
  { stage: "Order En-Route" },
  { stage: "Delivered" },
];

const OrderDetailsForm = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [trackingOrderId, setTrackingOrderId] = useState(null);
  const [trackingExpanded, setTrackingExpanded] = useState(null); // State for showing more shipping details

  const imageUrl0 =
    "https://media.istockphoto.com/id/1221134337/photo/front-views-black-trousers.jpg?s=612x612&w=0&k=20&c=XSEtHBJpWPQTo5FQgVTGrLBRiOJ7FuYIcUlKZzifGG8=";
  const imageUrl =
    "https://media.gq.com/photos/654a66099efb7efc0873124f/3:4/w_748%2Cc_limit/Straight-Leg-Pant.jpg";

  const dummyData = [
    {
      id: 1,
      productName: "TayTelar Pant (Black 32)",
      quantity: "[1pc]",
      price: 2000.0,
      desc: "Cotton Solid Slim Pant",
      imageUrl: imageUrl0,
      trackingDetails:
        "Your order is out for delivery and will arrive by tomorrow.",
    },
    {
      id: 2,
      productName: "TayTelar Formal Pant (Black 32)",
      quantity: "[1pc]",
      price: 2000.0,
      desc: "Cotton Solid Slim Pant",
      imageUrl: imageUrl,
      trackingDetails: "Your order has been shipped and is in transit.",
    },
    {
      id: 3,
      productName: "TayTelar Formal Pant (Black 32)",
      quantity: "[1pc]",
      price: 2000.0,
      desc: "Cotton Solid Slim Pant",
      imageUrl: imageUrl0,
      trackingDetails: "Your order is being processed.",
    },
    {
      id: 4,
      productName: "TayTelar Formal Pant (Black 32)",
      quantity: "[1pc]",
      price: 2000.0,
      desc: "Cotton Solid Slim Pant",
      imageUrl: imageUrl,
      trackingDetails: "Your order has been delivered.",
    },
  ];

  useEffect(() => {
    setOrders(dummyData);
  }, []);

  const handleCardClick = (id) => {
    setExpandedOrderId(expandedOrderId === id ? null : id);
    setTrackingOrderId(null);
    setTrackingExpanded(null);
  };

  const handleTrackOrder = (orderId) => {
    if (trackingOrderId === orderId) {
      setTrackingOrderId(null);
      setTrackingExpanded(null);
    } else {
      setTrackingOrderId(orderId);
      setTrackingExpanded(null);
    }
  };

  const toggleTrackingDetails = () => {
    setTrackingExpanded(trackingExpanded ? null : trackingOrderId);
  };

  return (
    <div className="order-details-container">
      <div className="orders-list">
        {orders.map((order) => (
          <div
            className={`order-card ${
              expandedOrderId === order.id ? "expanded" : ""
            }`}
            key={order.id}
          >
            <div className="card-content">
              <div className="order-info">
                <div
                  className="oname"
                  onClick={() => handleCardClick(order.id)}
                >
                  {order.productName}
                </div>
                <div
                  className="quantity"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  {order.quantity}
                </div>
                <div className="price">₹ {order.price.toFixed(2)}</div>
                <div className="desc">{order.desc}</div>
              </div>
              <div className="order-image">
                {order.imageUrl ? (
                  <img
                    src={order.imageUrl}
                    alt={order.productName}
                    onClick={() => handleCardClick(order.id)}
                  />
                ) : (
                  <p>No Image</p>
                )}
              </div>
            </div>
            {expandedOrderId === order.id && (
              <div className="order-actions">
                <button
                  className="action-button track"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click event
                    handleTrackOrder(order.id);
                  }}
                >
                  <FaTruckFast /> Track My Order
                </button>
                <button
                  className="action-button cancel"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ImCancelCircle /> Cancel My Order
                </button>
              </div>
            )}
            {trackingOrderId === order.id && (
              <div className="tracking-container">
                <div>
                  <LinearProgressLine />
                  <div className="tracking-status">
                    <div className="tracking-names">
                      {TRACKING_STAGES.map((stage, index) => (
                        <div key={index} className="tracking-stage">
                          {stage.stage}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    style={{
                      border: "none",
                      marginLeft: "-140px",
                      fontSize: "10px",
                    }}
                    onClick={toggleTrackingDetails}
                  >
                    {trackingExpanded === order.id ? (
                      <>
                        Show Less{" "}
                        <FaChevronUp style={{ marginBottom: "-2px" }} />
                      </>
                    ) : (
                      <>
                        Show More{" "}
                        <FaChevronDown style={{ marginBottom: "-2px" }} />
                      </>
                    )}
                  </button>
                </div>
                {trackingExpanded === order.id && (
                  <div className="shipping-details">
                    {/* Title */}
                    <div className="tracking-title">Order Tracking</div>

                    {/* Shipping Details */}
                    <div className="shipDetails">
                      {/* Progress Bar */}
                      <div className="progress-bar">
                        <Progress />
                      </div>

                      {/* Shipping Stages */}
                      <div className="shipping-stages">
                        {SHIPPING_STAGES.map((item, index) => (
                          <div key={index} className="shipping-stage-status">
                            <div className="shipping-stage">{item.stage}</div>
                            {item.time && (
                              <div className="shipping-stage-time">
                                {item.time}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetailsForm;
