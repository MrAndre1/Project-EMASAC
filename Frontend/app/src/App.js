import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Users} from './components/Users.js'
import {Navbar} from './components/Navbar.js'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Users/>} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}
export default App;
