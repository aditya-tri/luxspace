import Clients from "parts/Clients";
import Footer from "parts/Footer";
import Header from "parts/Header";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import Hero from "parts/HomePage/Hero";
import JustArrived from "parts/HomePage/JustArrived";
import SiteMap from "parts/SiteMap";

import useScrollAnchor from "helpers/hooks/useScrollAnchor";
import useModalDOM from "helpers/hooks/useModalDOM";

function HomePage() {
  useScrollAnchor();
  useModalDOM();
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
}

export default HomePage;
