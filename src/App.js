import React from "react";
import "./App.css";
// import các components để sử dụng.
import Home from "./containers/Home";
import Hero from "./components/Hero";
import ContactUs from "./containers/ContactUs";
import Post from "./containers/Post";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import thư viện Router.
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Hero />

        <Route path="/" exact component={Home} />

        <Route path="/contact-us" component={ContactUs} />

        <Route path="/post/:postId" component={Post} />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}
export default App;
