import React, { useState } from "react";
import PropTypes from "prop-types";

function TextArea(props) {
  const { className, labelName, tooltip, ariaLabel, name } = props;
  const [text, setText] = useState("Text area");
  function handleChange(event) {
    let value = event.target.value ? event.target.value : "";
    setText(value);
  }

  return (
    <div className="flex-column">
      <label>
        {labelName} :
       
      </label>
      <textarea
          name={name}
          className={className}
          title={tooltip}
          aria-label={ariaLabel}
          value={text}
          onChange={handleChange}
        />
    </div>
  );
}

TextArea.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string
};

export default TextArea;
