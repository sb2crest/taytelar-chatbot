import React from "react";
import "./Options.css";
import loyaltyPoint from "../icons/addIcon.svg";
import orderDetails from "../icons/OrderDetails.svg";

const Options = (props) => {
  
  const options =  [
        {
          text: "Order Details",
          icon: orderDetails,
          handler: props.actionProvider.handleOrderDetails,
          id: 1,
        },
        {
          text: "Loyalty Points",
          icon: loyaltyPoint,
          handler: props.actionProvider.handleLoyalyPoints,
          id: 2,
        },
      ];

  const buttonsMarkup = options.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="option-button"
    >
      <div className="option-content">
        <img src={option.icon} alt={option.text} className="option-icon" />
        <span>{option.text}</span>
      </div>
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
