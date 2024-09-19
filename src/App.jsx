import Header from "./Component/Header";
import AboutUs from "./Component/AboutUs";
import FAqs from "./Component/FAqs";
import Testimony from "./Component/Testimony";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <AboutUs />
      <FAqs />
      <Testimony />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
