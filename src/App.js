import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Login from "./page/login";
import Signup from "./page/signup";
import Contact from './page/Contact'
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Home from "./page/Home";
import About from "./page/About"
import Resturant from "./page/resturant";
import Food from "./page/Food";
import Qrcode from "./page/Qrcode";
import Addfood from "./page/Addfood";
import Order from "./page/Order";
import Getuser from "./Admin/Getuser";
export default function App() {
  
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
  };
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Home/>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" index element={<Contact/>}/>
            <Route path="/About" index element={<About/>}/>
            </Route>
            <Route path="/resturant" index element={<Resturant/>}/>
            <Route path="/Food" index element={<Food/>}/>
            <Route path="/Qrcode" index element={<Qrcode/>}/>
            <Route path="/Addfood" index element={<Addfood/>}/>
            <Route path="/Order" index element={<Order/>} />
            <Route path="/Getuser" index element={<Getuser/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
