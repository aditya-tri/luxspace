import Clients from "parts/Clients";
import Footer from "parts/Footer";
import Header from "parts/Header";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import Hero from "parts/HomePage/Hero";
import JustArrived from "parts/HomePage/JustArrived";
import SiteMap from "parts/SiteMap";

import useScrollAnchor from "helpers/hooks/useScrollAnchor";
import useModalDOM from "helpers/hooks/useModalDOM";
import useScrollToTop from "helpers/hooks/useScrollToTop";

function HomePage() {
  useScrollAnchor();
  useModalDOM();
  useScrollToTop();
  return (
    <>
      <Header theme="black" position="sticky" />
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
