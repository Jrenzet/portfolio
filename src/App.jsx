import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import RouteConfig from "./RouteConfig";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Intro />
        <RouteConfig />
      </Router>
    </div>
  );
}

export default App;
