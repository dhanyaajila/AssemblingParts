import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./routes/Home"
import Registry from "./routes/Registry"
import Dandd from "./routes/Dandd"
import Finalp from "./routes/Finalp"
import "./style.css";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact >
              <Home/>
            </Route>
            <Route path="/registry">
              <Registry />
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
