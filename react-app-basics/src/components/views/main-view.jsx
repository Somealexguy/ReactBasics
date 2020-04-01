import React from "react";
import Main from "../atoms/main";

function MainView(props) {
  const { children } = props;
  return (
      <div
        className="fullSize"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Main className="main-container">{children}</Main>
      </div>
  );
}

export default MainView;
