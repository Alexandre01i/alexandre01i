import 'react-bootstrap/dist/react-bootstrap.min.js.LICENSE.txt';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
// import { Footer } from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
