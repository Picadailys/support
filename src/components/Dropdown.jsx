import React, { useState, useRef, useEffect } from "react";
import DropdownIcon from "./custom-icons/DropdownIcon";

const Dropdown = (props) => {
  const { width, height, children } = props;
  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="xui-pos-relative">
      <div
        className="xui-cursor-pointer"
        ref={buttonRef}
        style={{ display: "inline-flex", alignItems: "center" }}
        onClick={() => setOpen(!open)}
      >
        <DropdownIcon width={width} height={height} />
      </div>
      {open && (
        <div
          ref={menuRef}
          style={{ left: "-200px", top: "0" }}
          className="xui-w-200 xui-max-w-200 xui-bdr-rad-half xui-overflow-y-auto xui-bg-white xui-z-index-1 xui-p-1 xui-box-shadow-2 xui-pos-absolute"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
