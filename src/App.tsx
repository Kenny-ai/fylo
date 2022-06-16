import "./App.css";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
