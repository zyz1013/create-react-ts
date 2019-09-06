import * as React from "react";
import * as ReactDOM from "react-dom";
import { DefineService } from "./services/defineService";

const apiUrl = DefineService.Instance.getApiUrl();

class App extends React.Component<{}, {}> {
  public render() {
    return <div>项目初始化</div>;
  }
}
console.log(apiUrl);

ReactDOM.render(<App />, document.getElementById("root"));
