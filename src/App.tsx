import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Page";
import "./App.css";
import Counter from "./pages/Counter/index";
import Layout from "./layout/Layout";
import LoginPage from "./pages/login";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
