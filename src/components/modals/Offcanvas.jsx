import { useRef, useEffect } from "react";
import { Close as CloseIcon } from "@carbon/icons-react";

const Offcanvas = ({
  fullScreen,
  showCloseButton = true,
  handleClose,
  //   className = "",
  children,
  dismissible = true,
}) => {
  const body = useRef(document.body);
  useEffect(() => {
    let cleanup = body.current;
    cleanup.classList.add("no-scroll");
    return () => {
      cleanup.classList.remove("no-scroll");
    };
  });

  return (
    <>
      <div
        onClick={dismissible ? handleClose : null}
        className={`offcanvas__overlay`}
      ></div>
      <div className={`offcanvas ${fullScreen ? "fullscreen" : ""}`}>
        <div className={`offcanvas__content ${fullScreen ? "fullscreen" : ""}`}>
          {showCloseButton && (
            <div className="pointer">
              <CloseIcon onClick={handleClose} />
            </div>
          )}
          {children}
        </div>
      </div>
    </>
  );
};

export default Offcanvas;
