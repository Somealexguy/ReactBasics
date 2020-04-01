import React from "react";
import PropTypes from "prop-types";
import Card from "../atoms/card";
function Article(props) {
  const { articles } = props;
  return (
    <React.Fragment>
      {articles &&
        articles.map((x, index) => {
          return <Card key={index} element={x}></Card>;
        })}
    </React.Fragment>
  );
}
Article.propTypes = {
  articles: PropTypes.array
};
export default Article;
