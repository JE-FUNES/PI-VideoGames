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
      {location.pathname !== '/' && <NavBar  />}
      {location.pathname !== '/' && <Footer />}
      <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/games/:name' element={< SearchBar />} />
      <Route path='/detail/:id' element={< Detail />} />
      <Route path='/creategame' element={ <CreateGame />} />
      <Route path='/updategame/:id' element={<UpdateGame />} />
      </Routes>
    </div>
  );
}

export default App;
