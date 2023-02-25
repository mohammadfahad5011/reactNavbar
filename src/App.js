import "./App.css";
import About from "../src/pages/About";
import Home from "../src/pages/Home";
import Education from "../src/pages/Education";
import Skills from "../src/pages/Skills";
import Contact from "../src/pages/Contact";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/product" element={<ProductScreen />}></Route>
      </Routes>
      {/* <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='education' element={<Education />}></Route>
      <Route path='skills' element={<Skills />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Routes> */}
      {/* <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Contact/> */}
    </>
  );
}

export default App;
