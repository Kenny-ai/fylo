import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import HeaderContainer from "./components/Header/HeaderContainer";
import PageThree from "./components/PageThree";
import PageTwo from "./components/PageTwo";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App text-14 text-white font-body">
      <HeaderContainer />
      <PageTwo />
      <PageThree />
      <Testimonials />
      {/* <Form /> */}
      <Footer />
    </div>
  );
}

export default App;
