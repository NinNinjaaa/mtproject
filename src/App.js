import './App.css';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Num from './Components/Num';
import { BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Welcome </Link>
        <Link to="/about"> About </Link>
        <Link to="/num"> Num </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/num/" element={<Num />} />
      </Routes>
      <h4> MidtermProject </h4>
    </Router>
  );
}

export default App;