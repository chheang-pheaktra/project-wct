import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from './page/Home';
export default function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact Component={Home}/>
        </Switch>
      </Router>
    </div>
  )
}