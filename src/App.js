import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import ScrollToTop from "./components/scrollto-top";


import { AppRoutes } from './routes';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="select-none">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
