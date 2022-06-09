import 'antd/dist/antd.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./Pages/Signup";
import LoginPage from "./Pages/LoginPage";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import NoMatch from "./Pages/NoMatch";
import Settings from "./Pages/Settings";
import Profile from './Pages/Profile';
import Footer from "./Components/Footer";
import About from "./Pages/About";


function App() {
  return (
    <>
      <BrowserRouter>
          <Nav/>
          <Routes>
            {/*<Route path="*" element={<NoMatch />} />*/}
            <Route path='/*' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<LoginPage/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
