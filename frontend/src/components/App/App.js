import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Slider from "../Slider/Slider";
import QuestionBlock from "../QuestionBlock/QuestionBlock";
import ServicesBlock from "../ServicesBlock/ServicesBlock";
import YandexMap from "../YandexMap/YandexMap";
import Footer from "../Footer/Footer";
import Denistry from "../Dentistry/Denistry";
import ReactAnimations from "../Animation/Animation";
import LeftSideBar from "../Animation/LeftSideBar";


function App() {
  return (
    <Router>
      {/* <Navigation /> */}
      <LeftSideBar />
      <Route exact path='/'>
        <Slider />
        <QuestionBlock />
        <ServicesBlock />
        {/* <ReactAnimations /> */}
        <YandexMap />
      </Route>
      <Route exact path='/denistry'>
        <Denistry />
      </Route>
      <Route exact path='/denistry/treatment'/>
      <Route exact path='/denistry/hygiene'/>
      <Route exact path='/denistry/implantation'/>
      <Route exact path='/denistry/orthodontics'/>
      <Route exact path='/denistry/surgey'/>
      <Route exact path='/denistry/prosthetics'/>
      <Footer />
    </Router>
  );
}

export default App;
