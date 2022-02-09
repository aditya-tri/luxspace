import Breadcrumb from "components/Breadcrumb";
import Clients from "parts/Clients";
import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";
import Footer from "parts/Footer";
import Header from "parts/Header";
import SiteMap from "parts/SiteMap";

function Details() {
  return (
    <div className="mx-7">
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/1224234", name: "Office Room" },
          { url: "/categories/1224234/products/4234", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Clients />
      <SiteMap />
      <Footer />
    </div>
  );
}

export default Details;
