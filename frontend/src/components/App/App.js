import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Slider from "../Slider/Slider";

function App() {
  return (
    <Router>
      <Navigation />
      <Slider />
    </Router>
  );
}

export default App;
