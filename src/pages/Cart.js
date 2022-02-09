import Breadcrumb from "components/Breadcrumb";
import ShippingDetails from "parts/Cart/ShippingDetails";
import ShoppingCart from "parts/Cart/ShoppingCart";

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
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />

      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex  flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>

      <SiteMap />
      <Footer />
    </div>
  );
}

export default Details;
