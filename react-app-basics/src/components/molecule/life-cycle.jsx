import React from "react";
import LifeCycleClass from "../atoms/class-life-cycle";
import LifeCycleFunction from "../atoms/functional-life-cycle";

function LifeCycle() {
  return (
    <React.Fragment>
      <LifeCycleClass></LifeCycleClass>
      <LifeCycleFunction></LifeCycleFunction>
    </React.Fragment>
  );
}

export default LifeCycle;
