import React, { useState } from "react";
import "react-chatbot-kit/build/main.css";
import { IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";
import "./ChatbotComponent.css";
import { motion, AnimatePresence } from "framer-motion";
import botImage from "../chatbot/widget/icons/bots.svg";
import ChatbotWrapper from "../chatbot/ChatbotWrapper";

const ChatbotComponent = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isChatbotMinimized, setIsChatbotMinimized] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen((prevState) => !prevState);
    if (!isChatbotOpen) setIsChatbotMinimized(false); // Reset minimize when opening
  };

  const minimizeChatbot = () => {
    setIsChatbotMinimized((prevState) => !prevState);
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
    setIsChatbotMinimized(false); // Ensure it's not minimized when closed
  };

  return (
    <>
      {!isChatbotOpen && (
        <button className="toggle-button" onClick={toggleChatbot}>
          <img
            src={botImage}
            alt="botImage"
            style={{ width: "30px", height: "30px" }}
          />
        </button>
      )}

      <AnimatePresence>
        {isChatbotOpen && (
          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "10%" }}
            transition={{ duration: 0.3 }}
            className={`chatbot-container ${
              isChatbotMinimized ? "minimized" : "open"
            }`}
          >
            <button className="minimize-button" onClick={minimizeChatbot}>
              {isChatbotMinimized ? (
                <IoChevronUp style={{ fontSize: "24px", color: "black" }} />
              ) : (
                <IoChevronDown style={{ fontSize: "24px", color: "black" }} />
              )}
            </button>
            <button className="close-button" onClick={closeChatbot}>
              <IoClose style={{ fontSize: "24px", color: "black" }} />
            </button>
            <div
              className={`chatbot-wrapper ${
                isChatbotMinimized ? "hidden" : ""
              }`}
            >
              <ChatbotWrapper />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotComponent;
