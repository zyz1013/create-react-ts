import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<{}, {}> {
  public render() {
    return <div>项目初始化</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
