import React from "react";
import Button from "../atoms/button";
function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
  console.log(e);

}

function JsxVsJs() {
 
  return (
    <React.Fragment>
      {/* jsx */}
      <div>
        jsx:
        <Button className="red" ariaLabel="click me button" tooltip="tooltip" onClick={handleClick}>
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
            tooltip: "tooltip",
            onClick:handleClick
          },
          "trykk på meg!"
        )
      )}
    </React.Fragment>
  );
}

export default JsxVsJs;
