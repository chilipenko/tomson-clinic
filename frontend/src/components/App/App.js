import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "../../redux/store";
import Navigation from "../Navigation/Navigation";
import Slider from "../Slider/Slider";
import QuestionBlock from "../QuestionBlock/QuestionBlock";
import ServicesBlock from "../ServicesBlock/ServicesBlock";
import YandexMap from "../YandexMap/YandexMap";
import Footer from "../Footer/Footer";
import Denistry from "../Dentistry/Denistry";
import ReactAnimations from "../Animation/Animation";
import LeftSideBar from "../Animation/LeftSideBar";
import YourChoiceBlock from "../YourChoice/YourChoice"
import OnlineTable from "../OnlineTable/OnlineTable";
import AdminForm from "../AdminForm/AdminForm";


function App() {
  return (
    <Provider store={store}>
    <Router>
      {/* <Navigation /> */}
      <LeftSideBar />
      <Route exact path='/'>
        <Slider />
        <QuestionBlock />
        <ServicesBlock />
        {/* <ReactAnimations /> */}
        <YourChoiceBlock />
        <YandexMap />
      </Route>
      <Route exact path='/denistry'>
        <Denistry />
      </Route>
      <Route exact path='/admin'>
        <AdminForm />
      </Route>
      <Route exact path='/onlinetable'>
        <OnlineTable />
      </Route>
      <Route exact path='/denistry/treatment'/>
      <Route exact path='/denistry/hygiene'/>
      <Route exact path='/denistry/implantation'/>
      <Route exact path='/denistry/orthodontics'/>
      <Route exact path='/denistry/surgey'/>
      <Route exact path='/denistry/prosthetics'/>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
