import 'antd/dist/antd.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./Pages/Signup";
import LoginPage from "./Pages/LoginPage";
import Landing from "./Pages/Landing";
import Nav from "./Components/Nav";
import Posts from "./Pages/Posts";
import NoMatch from "./Pages/NoMatch";
import Settings from "./Pages/Settings";
import Profile from './Pages/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
          <Nav/>
          <Routes>
              <Route path="*" element={<NoMatch />} />
              <Route path='/' element={<Landing/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/posts' element={<Posts/>} />
            <Route path='/settings' element={<Settings/>} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
