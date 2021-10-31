import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Slider from "../Slider/Slider";
import QuestionBlock from "../QuestionBlock/QuestionBlock";
import ServicesBlock from "../ServicesBlock/ServicesBlock";
import YandexMap from "../YandexMap/YandexMap";
import Footer from "../Footer/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <Slider />
      <QuestionBlock />
      <ServicesBlock />
      <YandexMap />
      <Footer />
    </Router>
  );
}

export default App;
