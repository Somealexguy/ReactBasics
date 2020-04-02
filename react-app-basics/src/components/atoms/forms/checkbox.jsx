import React,{useState} from "react";
import PropTypes from "prop-types";

function Checkbox(props) {
  const {className, tooltip, ariaLabel,name, labelName } = props;
  const [checked,setChecked] = useState(false);
  function handleInputChange(event) {
     const target = event.target;
     const value = target.name === "" ? target.checked : target.value;
     setChecked(value);
   }

  return   <label>
 {labelName}:
  <input
    name={name}
    type="checkbox"
    className={className}
    title={tooltip}
    aria-label={ariaLabel}
    checked={checked}
    onChange={handleInputChange} 
    />
</label>
}

Checkbox.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string

};

export default Checkbox;
