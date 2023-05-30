import { BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav.js";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/footer/Footer';
import Header from "./Components/header/header";
import Searchbar from "./Components/header/searchbar";
import { AuthWrapper } from "./Components/contexts/authcontext.js";



function App() {

  return (
    <>
      <BrowserRouter>
        <AuthWrapper>
          <Header />
          <Searchbar />
          <Nav />
          <Footer />
        </AuthWrapper>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}


export default App;
