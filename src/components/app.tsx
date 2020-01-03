import * as React from "react";
import {hot} from "react-hot-loader";
import "./../assets/scss/app.scss";
const tsLogo = require("./../assets/img/typescript-logo.png");

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="app">
        <h1>types for my scriptz</h1>
        <p>the only way to do itz</p>
        <img src={tsLogo} height="480"/>
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(App);
