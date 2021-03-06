import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <div className="container">
          <Route path="/user/:id">
            <UserScreen />
          </Route>
          <Route path="/search/:keyword/size/:pageSize" exact>
            <HomeScreen />
          </Route>
          <Route path="/page/:pageNumber/size/:pageSize" exact>
            <HomeScreen />
          </Route>
          <Route path="/search/:keyword/page/:pageNumber/size/:pageSize">
            <HomeScreen />
          </Route>
          <Route path="/size/:pageSize" exact>
            <HomeScreen />
          </Route>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
        </div>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
