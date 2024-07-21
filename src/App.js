import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Pagenotfound from './components/Pagenotfound';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/resume" element={<Resume />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/*" element={<Pagenotfound />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
