import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import { Provider } from 'react-redux';
// import { store } from "../../redux/store";
import { useSelector } from 'react-redux';
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
import AdminTable from "../AdminTable/AdminTable";


function App() {

  const admin = useSelector(state => state.adminReducer.admin) 

  return (
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
      {/* {
        admin 
          ?(<Route exact path='/admin/table'> 
                <AdminTable />
            </Route>
            )
          :<Redirect to='/' />
      } */}
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
  );
}

export default App;
