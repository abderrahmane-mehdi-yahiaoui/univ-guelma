import React from "react";
import "./assets/css/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "./Routes";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import { Helmet } from "react-helmet";
import websiteData from "./components/Helper";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.useState = { currentLang: document.documentElement.lang };
    this.state = { currentPath: window.location.pathname };
  }

  render() {
    return (
      <>
        <div className="app">
          <Helmet>
            <title>{websiteData.websiteName}</title>
          </Helmet>
          <Router>
            <Header />
            <div className="site__wrapper">
              <main className="main__content">
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                    />
                  ))}
                  <Redirect from="*/" to="/ar" />
                </Switch>
              </main>
              <Sidebar />
              <Newsletter />
              <Footer />
            </div>
          </Router>
        </div>
      </>
    );
  }
}
export default App;
