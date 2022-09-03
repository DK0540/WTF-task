import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Home from './Pages';
import About from './Pages/About';
import Gyms from './Pages/Gyms';


function App() {
  return (
    <div className='App'>
    <Router >
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/gym" element={<Gyms/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
