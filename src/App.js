import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import "./Css_style/Global_css/GlobalCss.css";
import { HomePage } from "./Pages/Home/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <HomePage />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
