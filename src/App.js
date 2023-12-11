import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import Login from "./page/login";
import Signup from "./page/signup";
export default function App() {
  return (
    <div>
      <Header/>
     <Login/>  
    </div>
  )
}