import React from "react";
import PropTypes from "prop-types";

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

FormattedDate.propTypes = {
  date: PropTypes.object.isRequired
};
export default FormattedDate;
