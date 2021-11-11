import { css, Global } from "@emotion/react";
import Breeds from "./pages/Breeds";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&family=Noto+Serif&display=swap");
          * {
            font-family: "Noto Serif", cursive;
          }
          h1 {
            font-family: "Indie Flower", cursive;
          }
          a {
            text-decoration: none;
          }
        `}
      />
      <Router>
        <Switch>
          <Route exact path="/" component={Breeds} />
          <Route path="/breeds/:breed/:image" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
