
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Day1 from './components/Day1/Day1';
import Day2 from './components/Day2/Day2';
import Home from './pages/home';



const App = () => {
  return (
    <Router >
    <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/day1" element={<Day1></Day1>}>
        </Route>
        <Route path="/day2" element={<Day2></Day2>}>
        </Route>
      </Routes>
      
    </Router>
    
  )
}

export default App