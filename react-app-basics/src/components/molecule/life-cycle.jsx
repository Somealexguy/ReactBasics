import React from "react";
import LifeCycleClass from "./class-life-cycle-clock";
import LifeCycleFunction from "./functional-life-cycle-clock";

function LifeCycle() {
  return (
    <React.Fragment>
      <LifeCycleClass></LifeCycleClass>
      <LifeCycleFunction></LifeCycleFunction>
    </React.Fragment>
  );
}

export default LifeCycle;
