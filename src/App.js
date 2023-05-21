import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/nav.js";
import Home from "./Components/home.js";
import Contact from "./Components/contact.js";
import './App.css';
import Books from "./Components/Books.js";

function App() {
  return (
    <>
      <div class="p">
        <BrowserRouter>
           <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="home" element={<Home />} />
            <Route path="book" element={<Books />} />
            <Route path="contact" element={<Contact />} 
            />
          </Route>
        </Routes> 
      </BrowserRouter>


      </div>

    </>
  );
}


export default App;
