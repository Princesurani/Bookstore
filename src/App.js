import { BrowserRouter } from "react-router-dom";



import './App.css';
import Nav from "./Components/Nav.js";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/footer/Footer';
import Header from "./Components/header/header";
import Searchbar from "./Components/searchbar";



function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Searchbar/>
        <Nav />
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}


export default App;
