import React, { useState } from "react";
import PropTypes from "prop-types";

function TextInput(props) {
  const { className,labelName, tooltip, ariaLabel, name } = props;
  const [text, setText] = useState("");
  function handleChange(event) {
    let value = event.target.value ? event.target.value : "";
    setText(value);
  }

  return (<label>
      {labelName} :
      <input
      name={name}
      className={className}
      title={tooltip}
      aria-label={ariaLabel}
      placeholder="placeholder"
      type="text"
      value={text}
      onChange={handleChange}
    />
  </label>
   
  );
}

TextInput.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string

};

export default TextInput;
