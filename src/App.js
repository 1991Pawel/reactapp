import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Search from './pages/Search';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Router>
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
