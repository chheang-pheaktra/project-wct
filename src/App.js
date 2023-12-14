import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Login from "./page/login";
import Service from "./page/Service";
import About from "./page/About";
import Signup from "./page/signup";
import Create from "./page/Create";
import StoreFood from "./Food/StoreFood";
import { ToastContainer } from "react-toastify";
import index from "./page";
export default function App() {
  return (
    <div>
      <Router>
        <ToastContainer></ToastContainer>
        <Header/>
        <Routes>
          <Route path="/" exact Component={index}/>
          <Route path="/Create" exact Component={Create}/>
          <Route path="/StoreFood"  exact Component={StoreFood} />
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