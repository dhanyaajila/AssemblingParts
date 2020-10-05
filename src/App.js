import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./routes/Home"
import Registry from "./routes/Partlist"
import Dandd from "./routes/Dandd"
import Finalp from "./routes/Finalp"
import "./style.css";
import Partlist from './routes/Partlist';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact >
              <Home/>
            </Route>
            <Route path="/partlist">
              <Partlist />
            </Route>
            <Route path="/dandd">
              <Dandd />
            </Route>
            <Route path="/finalp">
              <Finalp />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App;
