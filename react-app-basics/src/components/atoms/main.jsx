import React from "react";

function Main(props) {
  const { children, className } = props;
  return <main className={className}>{children}</main>;
}

export default Main;
