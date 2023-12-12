import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Home from './page/Home';
import Login from "./page/login";
import Service from "./page/Service";
import About from "./page/About";
import Signup from "./page/signup";
export default function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/" exact Component={Service}/>
          <Route path="/About" exact Component={About}/>
          <Route path="/login" exact Component={Login}/>
          <Route path="/login" exact Component={Signup}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}