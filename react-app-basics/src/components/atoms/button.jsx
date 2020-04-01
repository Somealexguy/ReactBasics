import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const { children, className, onClick, tooltip, ariaLabel } = props;
  return (
    <button
      className={className}
      onClick={e =>
        onClick ? onClick(e) : console.warn(e, "no onClick added to button")
      }
      title={tooltip}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Button;
