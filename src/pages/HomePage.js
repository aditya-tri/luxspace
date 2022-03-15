import Clients from "parts/Clients";
import Document from "parts/Document";
import Footer from "parts/Footer";
import Header from "parts/Header";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import Hero from "parts/HomePage/Hero";
import JustArrived from "parts/HomePage/JustArrived";
import SiteMap from "parts/SiteMap";

function HomePage() {
  return (
    <Document>
      <Header theme="black" name />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
      <Footer />
    </Document>
  );
}

export default HomePage;
