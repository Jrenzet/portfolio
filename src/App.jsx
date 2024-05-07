import Navbar from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer";
import RouteConfig from "./RouteConfig";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <RouteConfig />
          <Footer />
        </Router>
    </div>
  );
}

export default App;
