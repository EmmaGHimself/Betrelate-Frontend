import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
////Import Pages////
import Landing from "./pages/Landing";
import ThankYou from "./pages/ThankYou";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/thank-you" component={ThankYou} />
        <Route exact path="/about" component={About} />
        <Route exact path="*" children={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
}

export default App;
