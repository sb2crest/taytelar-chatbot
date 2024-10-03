import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import Options from "./widget/comp/Options";
import headerImage from "./widget/icons/chat.svg";
import OrderDetailsForm from "./widget/comp/OrderDetailsForm"
import LoyaltyPointsForm from "./widget/comp/LoyaltyPointsForm.js"

const config = () => {
  const botName = "TayTelar";

  const initialMessages = [
    createChatBotMessage(`Welcome ! How can I assist you today?`, {
      widget: "options",
    }),
  ];
  
  const widgets = [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "orderDeatilsButton",
      widgetFunc: (props) => <OrderDetailsForm {...props} />,
    },
    
    {
      widgetName: "loyaltyPointsButton",
      widgetFunc: (props) => <LoyaltyPointsForm {...props} />,
    },
  
  ];

  return {
    botName,
    initialMessages,
    customComponents: {
      header: () => (
        <div
          style={{
            backgroundColor: "#e1e1e1",
            padding: "5px",
            borderRadius: "3px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={headerImage}
            alt="Header"
            style={{ width: "40px", height: "40px", margin: "0 10px 0 7px"}}
          />
          <div>
            <p style={{ fontSize: "16px", lineHeight: "0px"}}>
              <strong>{botName}</strong>
            </p>
            <p
              style={{
                fontSize: "12px",
                lineHeight: "0px",
                marginLeft:"-24px",
                color: "#BA933E"
              }}
            >
              Online
            </p>
          </div>
        </div>
      ),
      userAvatar: null,
    },
    widgets,
    state: {},
    actionProvider: new ActionProvider,
    messageParser: MessageParser,
  };
};

export default config;
