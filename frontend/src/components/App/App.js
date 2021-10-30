import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Slider from "../Slider/Slider";
import QuestionBlock from "../QuestionBlock/QuestionBlock";
import ServicesBlock from "../ServicesBlock/ServicesBlock";

function App() {
  return (
    <Router>
      <Navigation />
      <Slider />
      <QuestionBlock />
      <ServicesBlock />
    </Router>
  );
}

export default App;
