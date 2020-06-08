import React from "react";

import Navbar from "./components/Navbar";
import CountryList from "./components/global_stats/CountryList";
import TableList from "./components/country_stats/TableList";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <CountryList />
            </Route>
            <Route exact path="/country/:country" component={TableList} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
