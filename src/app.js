import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from './containers/movie';
import Home from './containers/home';
import Nav from './components/nav';
import Watch from './containers/watch';


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/watch">
            <Watch />
          </Route>
          <Route path=":id" component={Movie} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
