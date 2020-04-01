import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const { element } = props;
  return (
    <article className="article-card">
      <header>Header: {element.header}</header>
      <section>Body: {element.body}</section>
    </article>
  );
}
Card.propTypes = {
  element: PropTypes.object.isRequired
};

export default Card;
