import React from "react";
import "./App.css";
import MainView from "./components/views/main-view";
import JsxVsJs from "./components/molecule/jsx-vs-js";
import LifeCycle from "./components/molecule/life-cycle";
import Article from "./components/molecule/article";

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
  // return <MainView><JsxVsJs></JsxVsJs></MainView>;
  // return <MainView><LifeCycle></LifeCycle></MainView>;
  return (
    <MainView>
      <Article articles={articles}></Article>
    </MainView>
  );
}

export default App;
