import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./Components/Nav.js";
import Home from "./Components/Home.js";
import Contact from "./Components/Contact.js";
import Books from "./Components/Books.js";
import Register from "./Components/register/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Components/login/login";


function App() {
  return (
    <>

      <div class="p">

        <BrowserRouter>
          <Routes>
            <Route path="" element={<Nav />}>
              <Route path="" element={<Home />} />
              <Route path="home" element={<Home />} />

              <Route path="book" element={<Books />} />
              <Route path="contact" element={<Contact />} />
              <Route path="register" element={<Register />}/>
              <Route path="login" element={<Login />}/>
              
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer />

      </div>

    </>
  );
}


export default App;
