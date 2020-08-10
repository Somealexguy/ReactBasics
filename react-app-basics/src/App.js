import React, { useState } from "react";
import "./App.css";

import Button from "./components/atoms/button";

import MainView from "./components/views/main-view";
import JsxVsJs from "./components/molecule/jsx-vs-js";
import LifeCycle from "./components/molecule/life-cycle";
import Article from "./components/molecule/article";
import FunctionalLifeCycleClock from "./components/molecule/functional-life-cycle-clock";
import ClassLifeCycleClock from "./components/molecule/class-life-cycle-clock";
import RegisterForm from "./components/molecule/register-form";

const articles = [
  {
    header: "Virus utbrudd!",
    body: "Microsoft melder at de har fått flere virus på windows i 2019"
  },
  {
    header: "Mindre skatt!",
    body: "Trenger vi mindre skatt?"
  },
  {
    header: "Oslo børs opp 20% siden januar!",
    body: "Det er mange glade nordmenn!"
  }
];
function App() {
  const [visible, setVisible] = useState(true);
  return <MainView><JsxVsJs></JsxVsJs></MainView>;
  // return <MainView><LifeCycle></LifeCycle></MainView>;
  // return (
  //   <MainView>
  //     <Article articles={articles}></Article>
  //   </MainView>
  // );
  // return (
  //   <React.Fragment>
  //     <Button
  //       tooltip={visible ? "Hide" : "Show"}
  //       ariaLabel="hide show"
  //       onClick={() => setVisible(!visible)}
  //     >
  //       {visible ? "Hide" : "Show"}
  //     </Button>
  //     <MainView>
  //       <ClassLifeCycleClock name="Class"></ClassLifeCycleClock>
  //       {visible && (
  //         <FunctionalLifeCycleClock name="Functional"></FunctionalLifeCycleClock>
  //       )}
  //     </MainView>
  //   </React.Fragment>
  // );
    // return <MainView><RegisterForm></RegisterForm></MainView>;
}

export default App;
