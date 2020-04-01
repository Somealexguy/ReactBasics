import React from "react";
import Button from "../atoms/button";
function JsxVsJs() {
  return (
    <React.Fragment>
      {/* jsx */}
      <div>
        jsx:
        <Button className="red" ariaLabel="click me button" tooltip="tooltip">
          Click me!
        </Button>
      </div>
      {/* javascript syntax */}
      {React.createElement(
        "div",
        null,
        "javascript: ",
        React.createElement(
          Button,
          {
            className: "blue",
            ariaLabel: "click me button",
            tooltip: "tooltip"
          },
          "trykk på meg!"
        )
      )}
    </React.Fragment>
  );
}

export default JsxVsJs;
