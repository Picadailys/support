import { useEffect, useRef } from "react";

const PINInput = ({ pin, disabled, onChange, gap, onInitFocus = true }) => {
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!isNaN(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      onChange(newPin);
      // Auto focus next input
      if (value !== "" && index < newPin.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && pin[index] === "" && index > 0) {
      const newPin = [...pin];
      newPin[index - 1] = "";
      onChange(newPin);
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("Text").trim();
    if (/^\d+$/.test(pasteData) && pasteData.length === pin.length) {
      const newPin = pasteData.split("").map((digit) => parseInt(digit, 10));
      onChange(newPin);
    }
  };

  useEffect(() => {
    if (onInitFocus) inputRefs.current[0]?.focus();
  }, [onInitFocus]);

  return (
    <div
      className={`xui-d-flex xui-flex-jc-space-between xui-flex-wrap-nowrap xui-grid-gap-${gap} pin__input--container`}
    >
      {pin.map((digit, index) => (
        <input
          key={index}
          disabled={disabled}
          maxLength="1"
          inputMode="numeric"
          value={digit === "" ? "" : "*"}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={(e) => handlePaste(e)}
          ref={(input) => (inputRefs.current[index] = input)}
          className="xui-text-center xui-bdr-rad-half xui-h-40 xui-w-35 xui-lg-w-45"
          style={{ border: "0.1px solid #636161" }}
        />
      ))}
    </div>
  );
};

export default PINInput;
