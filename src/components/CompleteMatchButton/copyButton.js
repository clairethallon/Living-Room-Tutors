import { Button, Overlay, Tooltip } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";

function CopyButton(props) {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div>
      <Button
        ref={target}
        onClick={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="primaryButton matchButton"
      >
        {props.buttonText}
      </Button>
      <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Copied!
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
}

export default CopyButton;
