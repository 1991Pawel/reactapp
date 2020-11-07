import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <>
      <Router>
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/search/:searchId" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
