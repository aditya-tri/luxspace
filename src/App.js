import "assets/css/app.css";

import HomePage from "pages/HomePage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";
import Notfound from "pages/Notfound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details" element={<Details />} />
          <Route path="/congratulation" element={<Congratulation />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
