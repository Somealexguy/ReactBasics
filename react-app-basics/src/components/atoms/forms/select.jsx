import React, { useState } from "react";
import PropTypes from "prop-types";

function Select(props) {
  const { className,labelName, tooltip, ariaLabel, name } = props;
  const [selected, setSelected] = useState("Text area");
  function handleChange(event) {
    let value = event.target.value ? event.target.value : "";
    setSelected(value);
  }

  return (<label>
      {labelName} :
      <select value={selected} onChange={handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
  </label>
   
  );
}

Select.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string

};

export default Select;
