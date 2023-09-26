import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import Detail from "./Views/Detail/Detail";
import Home from "./Views/Home/Home";
import LandingPage from "./Views/LandingPage/LandingPage";
import NavBar from "./Views/Navbar/NavBar";
import CreateGame from "./Views/Forms/CreateGame";
import UpdateGame from "./Views/Forms/UpdateGame";
import Footer from "./Views/Footer/Footer";

/*import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';
*/

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Routes>
      <Route path="/" component={<LandingPage />} />
      <Route path="/home" component={<Home />} />
      <Route path="/games/:name" component={< SearchBar />} />
      <Route path="/detail/:id" component={< Detail />} />
      <Route path="/creategame" component={ <CreateGame />} />
      <Route path="/updategame/:id" component={<UpdateGame />} />
      {location.pathname !== '/' && <Footer />}
      </Routes>
    </div>
  );
}

export default App;
