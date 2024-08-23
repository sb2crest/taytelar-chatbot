import { sendMessage } from "./service/GeminiApi";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, userType) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.userType = userType;
  }

  handleOrderDetails = () => {
    const message = this.createChatBotMessage("Your Order Details..",
    { widget: "orderDeatilsButton" }
    );
    this.addMessageToState(message);
  };

  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "options",
        loading: true,
        terminateLoading: true,
        ...options
      }
    );
    this.addMessageToState(message);
  };

  handleAfterSuccess = (message) => {
    this.createChatBotMessage(message, { widget: "options" });
    this.addMessageToState(message);
  };

  handleThanks = () => {
    const message = this.createChatBotMessage("You're welcome, and stay safe!");
    this.addMessageToState(message);
  };

  handleGreet = () => {
    const message = this.createChatBotMessage(`Hello, ${this.userType}!`);
    this.addMessageToState(message);
  };

  handleAIMessage = async (messages) => {
    try {
      const response = await sendMessage(messages);
      const message = this.createChatBotMessage(response.response.candidates[0].content.parts[0].text);
      this.addMessageToState(message);
    } catch (error) {
      console.error('Error handling AI message:', error);
      const errorMessage = this.createChatBotMessage('Error fetching response.');
      this.addMessageToState(errorMessage);
    }
  };

  handleLoyalyPoints = async () => {
      const message = this.createChatBotMessage(
        "Loyalty Points collected so Far",
        { widget: "loyaltyPointsButton" }
      );
      this.addMessageToState(message);
  };

  handleCheckIn = async () => {
      const message = this.createChatBotMessage(
        "You Can Check-In Below",
        { widget: "getEmployeeCheckIn" }
      );
      this.addMessageToState(message);
  };
  
  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
