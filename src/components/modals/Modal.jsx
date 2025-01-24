import { useRef, useEffect } from "react";

const Modal = ({
  handleClose,
  className = "",
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
    <div className="modal" onClick={dismissible ? handleClose : null}>
      <div className="modal__wrapper">
        <div className="modal__content">
          <div className={className} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
