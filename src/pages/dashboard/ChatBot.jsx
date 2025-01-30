import React, { useState } from "react";
import Logo2 from "../../assets/images/logo2.png";

const ChatBot = () => {
  const [name, setName] = useState(""); // State for name
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hello, How can I be of help to you today? Kindly select an option that best describes your challenge."
  ); // State for welcome message
  const [theme, setTheme] = useState("System"); // State for theme
  const [orientation, setOrientation] = useState("Right"); // State for orientation

  return (
    <section className="chat-bot-section-holder xui-pos-relative xui-d-flex">
      {/* Left Section */}
      <div className="chat-bot-left xui-pt-1-half xui-pl-1-half">
        <div
          className="xui-h-fluid-100 xui-overflow-y-auto box-shadow-1 xui-pt-2 xui-px-1 xui-pb-7"
          style={{ borderRadius: "16px 0 0 0" }}
        >
          {/* Logo */}
          <div>
            <p className="xui-font-sz-80 xui-font-w-600">Logo</p>
            <div className="nude-bg-5 xui-mt-half xui-w-80 xui-h-80 xui-bdr-rad-1 xui-d-flex xui-flex-jc-center xui-flex-ai-center">
              <img className="xui-img-50" src={Logo2} alt="" />
            </div>
          </div>
          {/* Name Input */}
          <div className="chat-bot-input-grp xui-mt-1">
            <p className="xui-font-sz-85 xui-font-w-600">Name</p>
            <input
              type="text"
              className="nude-bg-5 xui-bdr-rad-half xui-h-45 xui-font-w-600 xui-font-sz-80 xui-mt-1 xui-w-fluid-100 xui-pl-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* Welcome Message */}
          <div className="chat-bot-input-grp xui-mt-1">
            <p className="xui-font-sz-85 xui-font-w-600">Welcome Message</p>
            <textarea
              className="nude-bg-5 xui-bdr-rad-half xui-font-w-600 xui-font-sz-80 xui-mt-1 xui-w-fluid-100 xui-pl-1 xui-py-half"
              style={{
                height: "40px",
                overflow: "hidden",
                minHeight: "40px",
                resize: "none",
              }}
              rows="1"
              value={welcomeMessage}
              onChange={(e) => setWelcomeMessage(e.target.value)}
              onInput={(e) => {
                e.target.style.height = "40px"; // Reset height
                e.target.style.height = `${Math.max(
                  e.target.scrollHeight,
                  40
                )}px`; // Adjust height
              }}
            ></textarea>
          </div>
          {/* Theme Selector */}
          <div className="chat-bot-input-grp xui-mt-1">
            <p className="xui-font-sz-85 xui-font-w-600">Theme</p>
            <select
              className="nude-bg-5 xui-bdr-rad-half xui-h-45 xui-font-w-600 xui-font-sz-80 xui-mt-1 xui-w-fluid-100 xui-pl-1"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="System">System</option>
              <option value="Dark">Dark</option>
              <option value="Light">Light</option>
            </select>
          </div>
          {/* Orientation Selector */}
          <div className="chat-bot-input-grp xui-mt-1">
            <p className="xui-font-sz-85 xui-font-w-600">Orientation</p>
            <select
              className="nude-bg-5 xui-bdr-rad-half xui-h-45 xui-font-w-600 xui-font-sz-80 xui-mt-1 xui-w-fluid-100 xui-pl-1"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value)}
            >
              <option value="Right">Right</option>
              <option value="Left">Left</option>
            </select>
          </div>
        </div>
      </div>
      {/* Right Section (Preview) */}
      {/* Right Section (Preview) */}
      <div className="chat-bot-right xui-pt-1-half xui-pr-1-half">
        <div
          className="xui-h-fluid-100 box-shadow-1 xui-py-2 xui-px-1"
          style={{ borderRadius: "0 16px 0 0" }}
        >
          <p className="xui-font-sz-80 xui-font-w-600">Preview</p>
          <div className="xui-mt-1-half nude-bg-5 xui-p-1 xui-h-350 xui-bdr-rad-half">
            <div
              className={`xui-d-flex ${
                orientation === "Left" ? "xui-flex-dir-row-reverse" : ""
              }`}
            >
              <img
                className="xui-w-35 xui-h-35 xui-bdr-rad-circle"
                src={Logo2}
                alt=""
              />
              <div
                className={`chat-bot-preview xui-bg-white xui-p-1`}
                style={{ width: "calc(100% - 35px)" }}
              >
                {/* Render welcomeMessage with line breaks */}
                <p
                  className="xui-font-sz-80 xui-font-w-600 xui-line-height-1-half"
                  dangerouslySetInnerHTML={{
                    __html: welcomeMessage.replace(/\n/g, "<br />"),
                  }}
                ></p>
                {name && (
                  <p className="xui-font-sz-80 xui-font-w-400 xui-line-height-1">{`- ${name}`}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBot;
