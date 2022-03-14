import { useState } from "react";
import "assets/css/app.css";

import HomePage from "pages/HomePage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";
import Notfound from "pages/Notfound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Provider from "helpers/hooks/useGlobalContext";
import Splash from "components/Splash";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <Provider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/categories/:idc" element={<Details />} />
              <Route
                path="/categories/:idc/products/:idp"
                element={<Details />}
              />
              <Route path="/congratulation" element={<Congratulation />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      )}
    </>
  );
}

export default App;
