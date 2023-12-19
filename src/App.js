import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Login from "./page/login";
import Service from "./page/Service";
import About from "./page/About";
import Signup from "./page/signup";
import Create from "./page/Create";
import { ToastContainer } from "react-toastify";
import index from "./page";
import Food from "./page/Food";
import Resturant from "./page/resturant";
import Qrcode from "./page/Qrcode";
export default function App() {
  return (
    <div>
      <Router>
        <ToastContainer></ToastContainer>
        <Header/>
        <Routes>
          <Route path="/" exact Component={index}/>
          <Route path="/Create" exact Component={Create}/>
          <Route path="/Food" index Component={Food}/>
          <Route path="/res" index Component={Resturant} />
          <Route path="/Qrcode" index Component={Qrcode}/>
          <Route path="/service" exact Component={Service}/>
          <Route path="/About" exact Component={About}/>
          <Route path="/login" exact Component={Login}/>
          <Route path="/signup" exact Component={Signup}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}